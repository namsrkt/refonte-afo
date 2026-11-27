import type { CSSProperties } from "react";
import { mulberry32 } from "../seeded-random";

const VIEW_WIDTH = 100;
const VIEW_HEIGHT = 320;

type BoltConfig = {
  seed: number;
  segments: number;
  left: string;
  top: string;
  width: number;
  height: number;
  duration: string;
  delay: string;
};

type BoltGeometry = {
  main: string;
  branches: string[];
};

const BOLT_CONFIGS: BoltConfig[] = [
  { seed: 611, segments: 9, left: "12%", top: "-2%", width: 64, height: 300, duration: "6.4s", delay: "0s" },
  { seed: 712, segments: 7, left: "72%", top: "0%", width: 50, height: 210, duration: "8.9s", delay: "2.4s" },
  { seed: 813, segments: 10, left: "42%", top: "-4%", width: 60, height: 320, duration: "11.3s", delay: "5.1s" },
  { seed: 914, segments: 6, left: "28%", top: "3%", width: 42, height: 180, duration: "13.7s", delay: "1.2s" },
  { seed: 1015, segments: 8, left: "58%", top: "1%", width: 46, height: 250, duration: "9.8s", delay: "7.3s" },
];

function createBolt(seed: number, segments: number): BoltGeometry {
  const random = mulberry32(seed);
  const points: Array<[number, number]> = [[50, 0]];
  const step = VIEW_HEIGHT / segments;

  for (let index = 1; index <= segments; index++) {
    const previous = points[index - 1];
    const x = Math.min(94, Math.max(6, previous[0] + (random() - 0.5) * 36));
    const y = Math.min(VIEW_HEIGHT, previous[1] + step * (0.65 + random() * 0.7));
    points.push([x, y]);
  }

  const main = points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");

  const branches: string[] = [];
  const branchCount = 2 + Math.floor(random() * 2);

  for (let index = 0; index < branchCount; index++) {
    const anchor = points[2 + Math.floor(random() * (points.length - 4))];
    const direction = random() > 0.5 ? 1 : -1;
    let x = anchor[0];
    let y = anchor[1];
    let branch = `M${x.toFixed(1)} ${y.toFixed(1)}`;
    const branchSegments = 2 + Math.floor(random() * 3);

    for (let segment = 0; segment < branchSegments; segment++) {
      x = Math.min(98, Math.max(2, x + direction * (8 + random() * 16)));
      y = Math.min(VIEW_HEIGHT, y + 12 + random() * 26);
      branch += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
    }

    branches.push(branch);
  }

  return { main, branches };
}

const BOLTS = BOLT_CONFIGS.map((config) => ({
  ...config,
  geometry: createBolt(config.seed, config.segments),
}));

export function LightningField() {
  return (
    <div className="weather-lightning" aria-hidden="true">
      {BOLTS.map((bolt) => (
        <svg
          key={bolt.seed}
          className="hero-bolt"
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          preserveAspectRatio="none"
          style={
            {
              left: bolt.left,
              top: bolt.top,
              width: bolt.width,
              height: bolt.height,
              animationDuration: bolt.duration,
              animationDelay: bolt.delay,
            } as CSSProperties
          }
        >
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path
              d={bolt.geometry.main}
              stroke="#7EB0EE"
              strokeWidth={10}
              opacity={0.16}
              style={{ filter: "blur(6px)" }}
            />
            <path
              d={bolt.geometry.main}
              stroke="#CFE4FF"
              strokeWidth={4}
              opacity={0.5}
              style={{ filter: "blur(1.5px)" }}
            />
            <path
              d={bolt.geometry.main}
              stroke="#FFFFFF"
              strokeWidth={1.8}
              vectorEffect="non-scaling-stroke"
            />
            {bolt.geometry.branches.map((branch) => (
              <g key={branch}>
                <path
                  d={branch}
                  stroke="#CFE4FF"
                  strokeWidth={2.4}
                  opacity={0.35}
                  style={{ filter: "blur(2px)" }}
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={branch}
                  stroke="#FFFFFF"
                  strokeWidth={1.1}
                  opacity={0.9}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
          </g>
        </svg>
      ))}
    </div>
  );
}
