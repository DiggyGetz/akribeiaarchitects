import { LayoutDashboard, DatabaseZap, Wallet, TrendingUp, UserCog, Globe, Cpu, Code2 } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const services = [
  { icon: LayoutDashboard, title: "Financial Dashboards", desc: "Real-time visibility into the metrics that matter most to your business." },
  { icon: DatabaseZap, title: "Data Cleaning & Reconciliation", desc: "Transform messy books into pristine, audit-ready financial records." },
  { icon: Wallet, title: "Specialized Budgeting", desc: "The Bucket System — a structured approach to allocating capital with precision." },
  { icon: TrendingUp, title: "Cash Flow Architecture", desc: "Engineered cash flow systems that ensure liquidity and long-term stability." },
  { icon: UserCog, title: "Fractional Controller Services", desc: "Senior-level financial oversight without the full-time overhead." },
  { icon: Globe, title: "Financial Web Portals", desc: "Custom client-facing portals for transparent, real-time financial reporting." },
  { icon: Cpu, title: "AI Implementation", desc: "Intelligent automation that eliminates repetitive tasks and surfaces insights." },
  { icon: Code2, title: "Bespoke Website Building", desc: "High-end digital presence designed for firms that value craftsmanship." },
];

export default function ServicesSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="services" className="py-32 border-t border-border">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-8 text-center">
          Core Capabilities
        </p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground mb-20">
          What We Build
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-5xl mx-auto border border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-8 group hover:bg-secondary/50 transition-colors duration-500"
            >
              <s.icon className="text-muted-foreground group-hover:text-foreground transition-colors duration-500 mb-6" size={20} strokeWidth={1.5} />
              <h3 className="font-heading text-base text-foreground mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
