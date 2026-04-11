import { Shield, TrendingUp, Landmark } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const pillars = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "Fiduciary-first approach with full transparency. Your interests always come before ours.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Data-driven strategies that compound returns while managing downside risk intelligently.",
  },
  {
    icon: Landmark,
    title: "Legacy",
    desc: "Multi-generational planning that ensures your wealth endures and your values carry forward.",
  },
];

export default function PhilosophySection() {
  const ref = useScrollFadeIn();

  return (
    <section id="philosophy" className="py-24 bg-card">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Our Philosophy
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground mb-4">
          Built on Three Pillars
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Every decision we make is grounded in principles that have stood the test of time.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="glass-card p-8 text-center hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition">
                <p.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
