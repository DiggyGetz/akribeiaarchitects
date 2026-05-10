import { Calculator, Brain, Cog, Hammer } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const capabilities = [
  {
    icon: Calculator,
    title: "Financial Systems Automation",
    body: "Books that close themselves, dashboards that don't lie, and cash-flow you can read at a glance.",
    examples: [
      "Job-costing dashboard for a contractor across crews and trucks",
      "Insurance-aging and AR follow-up automation for a dental office",
      "QuickBooks ↔ field-service software reconciliation",
    ],
  },
  {
    icon: Brain,
    title: "AI Implementation",
    body: "Practical AI placed exactly where it earns its keep — never as a shiny object.",
    examples: [
      "AI-assisted quote generation from voicemails and field photos",
      "Automated review-collection and reputation responses for dentists",
      "Inbox triage that routes the high-value lead to the owner first",
    ],
  },
  {
    icon: Cog,
    title: "Operations Infrastructure",
    body: "The connective tissue between people, jobs, customers, and money.",
    examples: [
      "Lead intake → CRM → scheduling → invoicing in one tracked flow",
      "Dispatch and route planning for multi-crew service businesses",
      "Patient or client onboarding sequences with no gaps",
    ],
  },
  {
    icon: Hammer,
    title: "Custom Build",
    body: "When off-the-shelf won't fit, we draft and build the exact tool your business needs.",
    examples: [
      "Internal tooling for estimators, schedulers, or office managers",
      "Client portals for transparent billing and project status",
      "Bespoke web presence engineered for trust and conversion",
    ],
  },
];

export default function CapabilitiesSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="capabilities" className="relative py-32 border-t border-border overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(217 38% 13% / 0.5) 0%, transparent 70%)",
        }}
      />
      <div ref={ref} className="fade-in-section relative container mx-auto px-6">
        <p className="label-eyebrow mb-6 text-center">Core Capabilities</p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground mb-4">
          What we build, <span className="text-accent">in plain terms.</span>
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Four disciplines, one practice. Engagements typically blend two or three.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-border max-w-6xl mx-auto border border-border">
          {capabilities.map((c) => (
            <article key={c.title} className="bg-background p-10">
              <c.icon className="text-accent mb-6" size={28} strokeWidth={1.25} />
              <h3 className="font-heading text-xl text-foreground mb-3">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{c.body}</p>
              <p className="label-eyebrow mb-3 text-foreground/70">For example</p>
              <ul className="space-y-2">
                {c.examples.map((ex) => (
                  <li
                    key={ex}
                    className="font-body text-sm text-foreground/85 leading-relaxed flex gap-3"
                  >
                    <span aria-hidden className="text-accent mt-1.5 h-px w-3 bg-accent flex-shrink-0" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
