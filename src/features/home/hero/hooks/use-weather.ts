"use client";

import { useEffect } from "react";
import { getWeather, type Weather } from "../services/weather";

const REFRESH_MS = 15 * 60 * 1000;

export function useWeather() {
  useEffect(() => {
    let active = true;

    const apply = (weather: Weather) => {
      if (!active) return;
      document.documentElement.dataset.weather = weather;
    };

    getWeather().then(apply);

    const interval = window.setInterval(() => {
      getWeather().then(apply);
    }, REFRESH_MS);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);
}
