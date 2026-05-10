import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import PackagesSection from "@/components/PackagesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import ProofSection from "@/components/ProofSection";
import WalkthroughSection from "@/components/WalkthroughSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <PackagesSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <ProcessSection />
        <ProofSection />
        <AboutSection />
        <WalkthroughSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
