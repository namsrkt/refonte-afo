import { HeroSection } from "@/features/home/hero/components/hero-section";
import { ServicesSection } from "@/features/home/services/components/services-section";
import AboutSection from "@/features/home/aboutSection/about-section";
import HomeRealization from "@/features/home/homeRealization/hero-realization";
import TechnoSection from "@/features/home/technoSection/techno-section";
import HomeProcess from "@/features/home/homeProcess/home-process";
import TestimonialSection from "@/features/home/testimonialSection/testimonial-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <HomeRealization/>
      <TechnoSection />
      <HomeProcess/>
      <TestimonialSection />
    </>
  );
}
