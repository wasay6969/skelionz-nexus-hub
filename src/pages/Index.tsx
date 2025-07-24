import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-space text-foreground overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <AboutSection />
    </div>
  );
};

export default Index;
