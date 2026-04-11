import { ArrowRight } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const articles = [
  {
    tag: "Market Update",
    title: "Q1 2026: Navigating Elevated Rates and Equity Rotations",
    excerpt: "Our CIO breaks down the macro environment and where we're finding opportunities.",
    date: "Apr 5, 2026",
  },
  {
    tag: "Tax Strategy",
    title: "The 2026 Roth Conversion Window: Why Timing Matters",
    excerpt: "New legislation creates a unique planning opportunity for high-net-worth investors.",
    date: "Mar 22, 2026",
  },
  {
    tag: "Estate Planning",
    title: "Dynasty Trusts in a Changing Regulatory Landscape",
    excerpt: "How to future-proof your estate plan against potential tax reform.",
    date: "Mar 10, 2026",
  },
];

export default function InsightsSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="insights" className="py-24 bg-card">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Insights
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground mb-16">
          Latest From Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((a) => (
            <article
              key={a.title}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {a.tag}
              </span>
              <h3 className="font-heading font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{a.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{a.date}</span>
                <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition" size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
