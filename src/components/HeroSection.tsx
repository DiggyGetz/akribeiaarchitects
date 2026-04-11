import { ChevronDown } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import logo from "@/assets/logo-clean.png";

export default function HeroSection() {
  const ref = useScrollFadeIn();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div ref={ref} className="fade-in-section max-w-3xl text-center">
        <img src={logo} alt="Jr Core Advisors" className="h-16 w-16 object-contain mx-auto mb-8" />
        <p className="font-body text-xs tracking-widest uppercase text-accent mb-8">
          Jr Core Advisors
        </p>
        <h1 className="font-heading font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-foreground mb-8">
          We build the technical systems that keep your finances organized.
        </h1>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12">
          Financial architecture for businesses that demand precision, clarity, and infrastructure that scales.
        </p>
        <a
          href="#contact"
          className="inline-block mb-8 px-8 py-3 text-sm font-body tracking-widest uppercase border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-500"
        >
          Schedule a Consultation
        </a>
        <br />
        <a
          href="#approach"
          className="inline-flex items-center gap-2 text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
        >
          Explore
          <ChevronDown size={16} className="animate-bounce" style={{ animationDuration: "2s" }} />
        </a>
      </div>
    </section>
  );
}
