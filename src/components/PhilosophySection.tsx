import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function PhilosophySection() {
  const ref = useScrollFadeIn();

  return (
    <section id="approach" className="py-32 border-t border-border">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-3xl">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-8 text-center">
          The Architect's Approach
        </p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground leading-snug mb-8">
          Financial <span className="text-accent">Infrastructure</span>, <br className="hidden sm:block" />
          Not Data Entry
        </h2>
        <div className="space-y-6 text-center">
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We believe that clean, well-structured financial systems are the foundation of every
            thriving business. Our role is not to simply record transactions — it is to design and
            build the technical infrastructure that gives you clarity, control, and confidence.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From automated dashboards to reconciliation pipelines, we architect systems that
            scale with your ambitions.
          </p>
        </div>
      </div>
    </section>
  );
}
