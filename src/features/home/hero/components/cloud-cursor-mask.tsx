"use client";

import { useEffect, useRef, type ReactNode } from "react";

const LERP = 0.18;

export function CloudCursorMask({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -9999, y: -9999 });
  const current = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const setVars = (x: number, y: number) => {
      wrapper.style.setProperty("--cursor-x", `${x}px`);
      wrapper.style.setProperty("--cursor-y", `${y}px`);
    };

    const animate = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      current.current.x += dx * LERP;
      current.current.y += dy * LERP;
      setVars(current.current.x, current.current.y);

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        frameRef.current = null;
      }
    };

    const start = () => {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    const park = () => {
      target.current.x = -9999;
      target.current.y = -9999;
      start();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const rect = wrapper.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        park();
        return;
      }

      if (current.current.x < -1000 || current.current.y < -1000) {
        current.current.x = x;
        current.current.y = y;
        setVars(x, y);
      }

      target.current.x = x;
      target.current.y = y;
      start();
    };

    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("mouseleave", park);
    window.addEventListener("blur", park);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", park);
      window.removeEventListener("blur", park);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="cloud-cursor-mask pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
