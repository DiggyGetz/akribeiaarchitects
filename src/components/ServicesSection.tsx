import { Briefcase, PiggyBank, Receipt, ScrollText } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const services = [
  {
    icon: Briefcase,
    title: "Wealth Management",
    desc: "Customized portfolio construction across asset classes with active risk management and quarterly rebalancing.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    desc: "Comprehensive income strategies including 401(k) optimization, IRA rollovers, and Social Security timing.",
  },
  {
    icon: Receipt,
    title: "Tax Strategy",
    desc: "Proactive tax-loss harvesting, Roth conversions, and entity structuring to minimize your lifetime tax burden.",
  },
  {
    icon: ScrollText,
    title: "Estate Planning",
    desc: "Trust design, charitable giving strategies, and seamless wealth transfer frameworks for your family.",
  },
];

export default function ServicesSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="services" className="py-24">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          What We Do
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground mb-16">
          Comprehensive Financial Services
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
