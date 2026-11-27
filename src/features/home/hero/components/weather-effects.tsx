"use client";

import { useWeather } from "../hooks/use-weather";
import { mulberry32 } from "../seeded-random";

type RainDrop = {
  id: number;
  left: number;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
};

const LIGHT_RAIN = { count: 55, seed: 20260701, minHeight: 10, maxHeight: 18, minDuration: 0.55, maxDuration: 0.95 };

function createDrops({
  count,
  seed,
  minHeight,
  maxHeight,
  minDuration,
  maxDuration,
}: {
  count: number;
  seed: number;
  minHeight: number;
  maxHeight: number;
  minDuration: number;
  maxDuration: number;
}): RainDrop[] {
  const random = mulberry32(seed);

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: random() * 100,
    height: minHeight + random() * (maxHeight - minHeight),
    duration: minDuration + random() * (maxDuration - minDuration),
    delay: -random() * 3,
    opacity: 0.3 + random() * 0.45,
  }));
}

const LIGHT_DROPS = createDrops(LIGHT_RAIN);

function RainLayer({ drops, className }: { drops: RainDrop[]; className: string }) {
  return (
    <div className={`hero-rain ${className}`}>
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="hero-raindrop"
          style={{
            left: `${drop.left}%`,
            height: drop.height,
            opacity: drop.opacity,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function WeatherEffects() {
  useWeather();

  return (
    <div className="weather-fx" aria-hidden="true">
      <RainLayer drops={LIGHT_DROPS} className="hero-rain-light" />
      <span className="hero-lightning" />
      <span className="hero-lightning hero-lightning-secondary" />
    </div>
  );
}
