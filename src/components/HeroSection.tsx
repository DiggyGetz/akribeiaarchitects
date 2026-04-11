import { ChevronDown } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function HeroSection() {
  const ref = useScrollFadeIn();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div ref={ref} className="fade-in-section max-w-3xl text-center">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-8">
          Jr Core Advisors
        </p>
        <h1 className="font-heading font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-foreground mb-8">
          We build the technical systems that keep your finances organized.
        </h1>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-16">
          Financial architecture for businesses that demand precision, clarity, and infrastructure that scales.
        </p>
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
