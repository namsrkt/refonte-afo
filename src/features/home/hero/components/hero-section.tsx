import "../hero.css";
import { CloudBank } from "./cloud-bank";
import { HeroClouds } from "./hero-clouds";
import { HeroContent } from "./hero-content";
import { LightningField } from "./lightning-field";
import { LogoMarquee } from "./logo-marquee";
import { SkyBackground } from "./sky-background";
import { SocialLinks } from "./social-links";
import { WeatherEffects } from "./weather-effects";

export function HeroSection() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-6rem)] flex-col overflow-hidden -mt-5">
        <SkyBackground />
        <LightningField />
        <HeroClouds />
        <CloudBank />
        <WeatherEffects />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
          <HeroContent />
        </div>

        <SocialLinks />
      </section>

      <LogoMarquee />
    </>
  );
}
