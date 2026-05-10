import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import DiscobolusMark from "@/components/DiscobolusMark";
import discobolus from "@/assets/discobolus-museum.jpg";

export default function PhilosophySection() {
  const ref = useScrollFadeIn();

  return (
    <section id="approach" className="relative py-32 border-t border-border overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
        style={{ backgroundImage: `url(${discobolus})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsl(217 38% 11% / 0.6) 0%, hsl(217 38% 11% / 0.95) 65%, hsl(217 40% 9%) 100%)",
        }}
      />
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-3xl">
        <div className="flex justify-center mb-6">
          <DiscobolusMark className="h-8 w-8 text-accent" title="Discobolus mark" />
        </div>
        <p className="label-eyebrow mb-6 text-center">The Architect's Approach</p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground leading-snug mb-10">
          A sculpture is only as good as <span className="text-accent">what holds it up.</span>
        </h2>
        <div className="space-y-6 text-center">
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Nothing stands without a base. Most small businesses try to build height before they
            have anything underneath — more leads, more software, more headcount layered on top of
            books and operations that were never set straight.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Akribeia builds the foundation first, then everything that sits on top of it. The
            financial backbone, the operational spine, the AI where it actually earns its keep —
            measured, structural, and meant to outlast the moment it was built.
          </p>
          <p className="font-body text-base text-foreground leading-relaxed max-w-2xl mx-auto">
            We do not ship features. We set foundations.
          </p>
        </div>
      </div>
    </section>
  );
}
