"use client";

import { SKY_LAYERS } from "../config";
import { useDayNight } from "../hooks/use-day-night";
import { StarField } from "./star-field";

export function SkyBackground() {
  useDayNight();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {SKY_LAYERS.map((layer) => (
        <div
          key={layer.key}
          className={`sky-layer ${layer.className}`}
          style={{ background: layer.background }}
        />
      ))}
      <div className="sky-glow absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_bottom,rgba(42,79,158,0.8),transparent_70%)]" />
      <StarField />
    </div>
  );
}
