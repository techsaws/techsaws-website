import CorePropositionSection from "@/components/sections/home/core-proposition-section";
import HeroSection from "../../components/sections/home/hero-section";
import SolutionSection from "@/components/sections/home/solution-section";
import WhySection from "@/components/sections/home/why-section";
import ServiceSection from "@/components/sections/home/service-section";
import CaseStudiesSection from "@/components/sections/home/case-studies-section";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <CorePropositionSection />
      <ServiceSection />
      <CaseStudiesSection />
      <SolutionSection />
      <WhySection />
    </main>
  );
}

export default HomePage;
