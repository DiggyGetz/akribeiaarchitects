import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CALENDLY = "https://calendly.com/dignangetz";

type Package = {
  name: string;
  tagline: string;
  pain: string;
  includes: string[];
  emphasis?: boolean;
};

const packages: Package[] = [
  {
    name: "Foundation",
    tagline: "Stop the bleeding.",
    pain: "You're losing hours a week to manual entry, missed invoices, and a phone that never stops ringing while you're on the job.",
    includes: [
      "Bookkeeping cleanup & chart of accounts",
      "Lead intake form + auto-routing to your phone",
      "One operations automation (quoting, scheduling, or follow-up)",
      "Monthly cash-flow snapshot",
    ],
  },
  {
    name: "Structure",
    tagline: "Build the load-bearing walls.",
    pain: "Revenue is up but the back office is breaking. You need real systems before the next hire — not after.",
    includes: [
      "Everything in Foundation",
      "Custom dashboard: revenue, jobs, AR/AP, lead pipeline",
      "AI-assisted quoting, follow-up, or review-collection workflow",
      "QuickBooks / job-cost integration",
      "Bi-weekly working sessions with the founder",
    ],
    emphasis: true,
  },
  {
    name: "Stature",
    tagline: "Architecture for scale.",
    pain: "You're past the scrappy phase. Multiple crews, multiple locations, or a thesis worth defending — and the systems need to look the part.",
    includes: [
      "Everything in Structure",
      "Bespoke internal tooling or client portal",
      "Multi-entity financial reporting",
      "AI implementation across sales, ops, and finance",
      "Quarterly business-review with full system audit",
      "Priority response and on-call architecture",
    ],
  },
];

export default function PackagesSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="packages" className="relative py-32 border-t border-border bg-secondary/40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(32 42% 30% / 0.07) 0%, transparent 60%)",
        }}
      />
      <div ref={ref} className="fade-in-section relative container mx-auto px-6">
        <p className="label-eyebrow mb-6 text-center">Engagements</p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground mb-4">
          Three commissions. <span className="text-accent">Built to your scale.</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Productized engagements with clear scope. Most operators land in Foundation or Structure;
          Stature is reserved for businesses ready to operate like an institution.
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-border max-w-6xl mx-auto border border-border">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`bg-background p-10 flex flex-col ${
                p.emphasis
                  ? "ring-1 ring-inset ring-accent shadow-[0_20px_60px_-20px_hsl(32_42%_30%/0.35)]"
                  : ""
              }`}
            >
              <header className="mb-6">
                <p className="label-eyebrow text-accent mb-3">{p.tagline}</p>
                <h3 className="font-heading text-2xl text-foreground mb-2">{p.name}</h3>
                <div className="hairline mt-3" />
              </header>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{p.pain}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {p.includes.map((line) => (
                  <li
                    key={line}
                    className="font-body text-sm text-foreground leading-relaxed flex gap-3"
                  >
                    <span aria-hidden className="text-accent mt-1.5 h-px w-3 bg-accent flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-6 py-3 text-xs font-body tracking-widest uppercase border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500"
              >
                Discuss the Engagement
              </a>
            </article>
          ))}
        </div>

        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground text-center mt-10">
          Engagements are scoped to fit. Pricing is shared on the first call.
        </p>
      </div>
    </section>
  );
}
