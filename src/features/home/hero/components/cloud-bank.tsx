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

function BankTrack({ clouds, duration }: { clouds: BankCloud[]; duration: number }) {
  return (
    <div
      className="cloud-bank-track absolute inset-0 flex w-max"
      style={{ "--bank-duration": `${duration}s` } as CSSProperties}
    >
      <BankGroup clouds={clouds} />
      <BankGroup clouds={clouds} hidden />
    </div>
  );
}

export function CloudBank() {
  return (
    <div
      className="hero-cloud-filter pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[260px] overflow-hidden"
      aria-hidden="true"
    >
      <div className="cloud-bank-mask absolute inset-0">
        <BankTrack clouds={BANK_CLOUDS_BACK} duration={150} />
        <BankTrack clouds={BANK_CLOUDS_FRONT} duration={95} />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%]"
        style={{
          background:
            "linear-gradient(to top, var(--bank-fade) 0%, var(--bank-fade) 35%, transparent 100%)",
        }}
      />
    </div>
  );
}
