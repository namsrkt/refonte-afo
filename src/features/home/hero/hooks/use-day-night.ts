"use client";

import { useEffect, useState } from "react";

export type Sky = "day" | "night";

function getSky(date: Date): Sky {
  const hours = date.getHours();
  return hours >= 6 && hours < 18 ? "day" : "night";
}

export function useDayNight() {
  const [sky, setSky] = useState<Sky>("day");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const schedule = () => {
      const now = new Date();
      const next = getSky(now);

      setSky(next);
      document.documentElement.dataset.sky = next;

      const nextHour = new Date(now);
      nextHour.setHours(now.getHours() + 1, 0, 0, 0);
      timeout = setTimeout(schedule, nextHour.getTime() - now.getTime());
    };

    schedule();

    return () => clearTimeout(timeout);
  }, []);

  return sky;
}
