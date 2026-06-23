import DashboardSection from "@/components/sections/home/dashboard-section";
import HomeHeroSection from "@/components/sections/home/home-hero-section";
import WhySection from "@/components/sections/home/why-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <DashboardSection />
      <WhySection />
    </main>
  );
}

export default HomePage;
