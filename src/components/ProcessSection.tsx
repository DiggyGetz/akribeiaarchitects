import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const phases = [
  {
    numeral: "I",
    title: "Survey",
    body: "We measure the ground before drawing a line. Two weeks inside your books, your tools, and a day with your team to map every leak, manual step, and missed lead.",
    deliverable: "Findings memo · system map · prioritized punch list",
  },
  {
    numeral: "II",
    title: "Blueprint",
    body: "A single document showing exactly what we will build, in what order, and what it will return. No surprises, no scope creep, no jargon.",
    deliverable: "Signed scope · 90-day plan · pricing locked",
  },
  {
    numeral: "III",
    title: "Build",
    body: "Heads-down implementation in working sessions, not invoices. Each automation, dashboard, or integration is built, tested, and handed over with documentation.",
    deliverable: "Live systems · documented · trained-in",
  },
  {
    numeral: "IV",
    title: "Refine",
    body: "Systems are kept honest. We monitor, tune, and extend the build as your business grows — under a fixed monthly engagement, not surprise bills.",
    deliverable: "Monthly reviews · quarterly audit · evolving roadmap",
  },
];

export default function ProcessSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="process" className="relative py-32 border-t border-border overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, hsl(32 42% 28% / 0.06) 0%, transparent 55%)",
        }}
      />
      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-6xl">
        <p className="label-eyebrow mb-6 text-center">The Method</p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground mb-4">
          Survey · Blueprint · Build · <span className="text-accent">Refine</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Four phases. Borrowed from architecture because building a business is the same discipline.
        </p>

        <ol className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {phases.map((p) => (
            <li key={p.title} className="bg-background p-10 flex flex-col">
              <span className="font-heading text-3xl text-accent mb-4 leading-none">{p.numeral}</span>
              <h3 className="font-heading text-xl text-foreground mb-3">{p.title}</h3>
              <div className="hairline mb-5" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.body}
              </p>
              <p className="label-eyebrow mb-1">Deliverable</p>
              <p className="font-body text-sm text-foreground leading-relaxed">{p.deliverable}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
