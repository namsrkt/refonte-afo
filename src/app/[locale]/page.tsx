import { HeroSection } from "@/features/home/hero/components/hero-section";
import { ServicesSection } from "@/features/home/services/components/services-section";
import AboutSection from "@/features/home/aboutSection/about-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
}
