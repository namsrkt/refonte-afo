import { HeroSection } from "@/features/home/hero/components/hero-section";
import { ServicesSection } from "@/features/home/services/components/services-section";
import AboutSection from "@/features/home/aboutSection/about-section";
import HomeRealization from "@/features/home/homeRealization/hero-realization";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <HomeRealization/>
    </>
  );
}
