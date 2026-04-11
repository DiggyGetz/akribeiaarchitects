import heroBg from "@/assets/hero-bg.jpg";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function HeroSection() {
  const ref = useScrollFadeIn();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div ref={ref} className="fade-in-section relative z-10 container mx-auto px-6 text-center max-w-4xl pt-24">
        <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-6">
          Wealth Management · Tax Strategy · Estate Planning
        </p>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
          Precision Wealth Management{" "}
          <span className="text-gradient-gold">for the Next Generation</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          We combine institutional-grade strategies with personalized guidance to protect, grow, and transfer your wealth across generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition text-base"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="inline-block border border-border text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-secondary transition text-base"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
