import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <LogoTicker />
      <PhilosophySection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
