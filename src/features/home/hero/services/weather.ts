export type Weather = "clear" | "rain" | "thunder";

const CACHE_KEY = "afo-weather";
const CACHE_TTL_MS = 15 * 60 * 1000;

type CachedWeather = {
  at: number;
  weather: Weather;
};

type IpLocation = {
  success?: boolean;
  latitude?: number;
  longitude?: number;
};

type CurrentWeather = {
  current?: {
    weather_code?: number;
  };
};

export function mapWeatherCode(code: number): Weather {
  if (code >= 95) return "thunder";
  if (code >= 51) return "rain";
  return "clear";
}

function readCache(): Weather | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const cached = JSON.parse(raw) as CachedWeather;
    if (Date.now() - cached.at > CACHE_TTL_MS) return null;

    return cached.weather;
  } catch {
    return null;
  }
}

function writeCache(weather: Weather) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ at: Date.now(), weather } satisfies CachedWeather),
    );
  } catch {
    // Storage unavailable: weather simply refreshes on next load.
  }
}

export async function getWeather(): Promise<Weather> {
  const cached = readCache();
  if (cached) return cached;

  try {
    const location = (await fetch(
      "https://ipwho.is/?fields=success,latitude,longitude",
      { signal: AbortSignal.timeout(4000) },
    ).then((response) => response.json())) as IpLocation;

    if (
      !location.success ||
      typeof location.latitude !== "number" ||
      typeof location.longitude !== "number"
    ) {
      return "clear";
    }

    const current = (await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=weather_code`,
      { signal: AbortSignal.timeout(5000) },
    ).then((response) => response.json())) as CurrentWeather;

    const code = current.current?.weather_code;
    const weather = typeof code === "number" ? mapWeatherCode(code) : "clear";

    writeCache(weather);
    return weather;
  } catch {
    return "clear";
  }
}
