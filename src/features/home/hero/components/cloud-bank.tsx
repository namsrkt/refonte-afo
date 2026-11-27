import type { CSSProperties } from "react";
import { BANK_CLOUDS_BACK, BANK_CLOUDS_FRONT, type BankCloud } from "../config";
import { Cloud } from "./cloud";

function BankGroup({ clouds, hidden = false }: { clouds: BankCloud[]; hidden?: boolean }) {
  return (
    <div
      className="relative h-[260px] w-screen shrink-0"
      aria-hidden={hidden || undefined}
    >
      {clouds.map((cloud) => (
        <div
          key={cloud.seed}
          className="absolute"
          style={{ left: `${cloud.left}%`, bottom: cloud.bottom }}
        >
          <Cloud
            seed={cloud.seed}
            width={cloud.width}
            opacity={cloud.opacity}
            blur={cloud.blur}
          />
        </div>
      ))}
    </div>
  );
}

function BankTrack({
  clouds,
  duration,
  reverse = false,
}: {
  clouds: BankCloud[];
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="cloud-bank-track absolute inset-0 flex w-max"
      style={
        {
          "--bank-duration": `${duration}s`,
          animationDirection: reverse ? "reverse" : undefined,
        } as CSSProperties
      }
    >
      <BankGroup clouds={clouds} />
      <BankGroup clouds={clouds} hidden />
    </div>
  );
}

export function CloudBank({
  position = "bottom",
}: {
  position?: "top" | "bottom";
}) {
  const isTop = position === "top";

  return (
    <div
      className={`hero-cloud-filter pointer-events-none absolute inset-x-0 z-0 h-[260px] overflow-hidden ${
        isTop ? "top-0" : "bottom-0"
      }`}
      aria-hidden="true"
    >
      <div
        className={`cloud-bank-mask absolute inset-0 ${isTop ? "rotate-180" : ""}`}
      >
        <BankTrack clouds={BANK_CLOUDS_BACK} duration={150} reverse={isTop} />
        <BankTrack clouds={BANK_CLOUDS_FRONT} duration={95} reverse={isTop} />
      </div>
      <div
        className={`pointer-events-none absolute inset-x-0 h-[30%] ${
          isTop ? "top-0" : "bottom-0"
        }`}
        style={{
          background: isTop
            ? "linear-gradient(to bottom, var(--bank-fade) 0%, var(--bank-fade) 35%, transparent 100%)"
            : "linear-gradient(to top, var(--bank-fade) 0%, var(--bank-fade) 35%, transparent 100%)",
        }}
      />
    </div>
  );
}
