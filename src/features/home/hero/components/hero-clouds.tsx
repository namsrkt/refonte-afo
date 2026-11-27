import type { CSSProperties } from "react";
import { SKY_CLOUDS } from "../config";
import { Cloud } from "./cloud";

const FADED_OPACITY = 0.4;
const FADE_EVERY = 1;

export function HeroClouds() {
  return (
    <div
      className="hero-cloud-filter pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {SKY_CLOUDS.map((cloud, index) => {
        const isFaded = (index + 1) % FADE_EVERY === 0;

        return (
          <div
            key={cloud.seed}
            className="cloud-drift absolute left-0"
            style={
              {
                top: cloud.top,
                "--cloud-duration": `${cloud.duration}s`,
                "--cloud-delay": `${-cloud.offset * cloud.duration}s`,
              } as CSSProperties
            }
          >
            <Cloud
              seed={cloud.seed}
              width={cloud.width}
              opacity={isFaded ? FADED_OPACITY : cloud.opacity}
              blur={cloud.blur}
            />
          </div>
        );
      })}
    </div>
  );
}
