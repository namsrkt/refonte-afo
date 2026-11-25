import AboutSection from "@/features/home/aboutSection/about-section";
import HeroSection from "@/features/home/heroSection/hero-section";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
