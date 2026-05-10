import { ChevronDown } from "lucide-react";
import discobolus from "@/assets/discobolus-museum.jpg";

const CALENDLY = "https://calendly.com/dignangetz";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover [background-position:65%_22%] sm:[background-position:60%_28%]"
        style={{ backgroundImage: `url(${discobolus})` }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none"
      />

      <div
        className="relative max-w-4xl text-center"
        style={{ textShadow: "0 2px 18px hsl(217 40% 5% / 0.85), 0 1px 3px hsl(217 40% 5% / 0.7)" }}
      >
        <p
          className="font-body text-xs tracking-widest uppercase text-accent font-semibold mb-8"
          style={{
            textShadow:
              "0 1px 2px hsl(217 40% 5% / 0.95), 0 2px 12px hsl(217 40% 5% / 0.85), 0 0 18px hsl(217 40% 5% / 0.6)",
          }}
        >
          The skeleton behind the foundation.
        </p>
        <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-10">
          Nothing stands without a <span className="text-accent">foundation.</span>
        </h1>
        <p className="font-body text-base sm:text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed mb-6">
          We build the financial, AI, and operational systems your business is supposed to stand on
          — so it actually does.
        </p>
        <p className="font-body text-sm text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-14">
          Hours back in your week. Leads that don't slip. Books that close themselves.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-sm font-body font-semibold tracking-widest uppercase border border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-500 shadow-[0_8px_30px_-8px_hsl(32_42%_30%/0.5)]"
          >
            Book a Free Walkthrough
          </a>
        </div>

        <a
          href="#approach"
          className="inline-flex items-center gap-2 text-xs font-body tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors duration-500"
        >
          Explore the work
          <ChevronDown size={16} className="animate-bounce" style={{ animationDuration: "2s" }} />
        </a>
      </div>
    </section>
  );
}
