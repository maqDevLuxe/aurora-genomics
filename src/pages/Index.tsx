import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PartnersSection from "@/components/landing/PartnersSection";
import TechnologySection from "@/components/landing/TechnologySection";
import DNARevealsSection from "@/components/landing/DNARevealsSection";
import MetricsSection from "@/components/landing/MetricsSection";
import SampleStepsSection from "@/components/landing/SampleStepsSection";
import DashboardSection from "@/components/landing/DashboardSection";
import LabSection from "@/components/landing/LabSection";
import CountersSection from "@/components/landing/CountersSection";
import BlogSection from "@/components/landing/BlogSection";
import PrivacySection from "@/components/landing/PrivacySection";
import StoriesSection from "@/components/landing/StoriesSection";
import CTAFooterSection from "@/components/landing/CTAFooterSection";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <TechnologySection />
        <DNARevealsSection />
        <MetricsSection />
        <SampleStepsSection />
        <DashboardSection />
        <LabSection />
        <CountersSection />
        <BlogSection />
        <PrivacySection />
        <StoriesSection />
      </main>
      <CTAFooterSection />
    </div>
  );
};

export default Index;
