import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { User } from "lucide-react";

const team = [
  { name: "Jonathan Reed", role: "Founder & CEO", bio: "25+ years in institutional portfolio management" },
  { name: "Maria Chen", role: "Chief Investment Officer", bio: "Former VP at Goldman Sachs Asset Management" },
  { name: "David Okafor", role: "Director, Tax Strategy", bio: "CPA with expertise in high-net-worth taxation" },
  { name: "Sarah Kim", role: "Head of Estate Planning", bio: "Trust and estate attorney, JD from Columbia Law" },
];

export default function AboutSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="py-24 bg-card">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Our Team
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground mb-4">
          Meet the Advisors
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A team of seasoned professionals dedicated to your financial success.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t) => (
            <div
              key={t.name}
              className="glass-card p-6 text-center hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition">
                <User className="text-muted-foreground" size={36} />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{t.name}</h3>
              <p className="text-primary text-sm font-medium mb-2">{t.role}</p>
              <p className="text-muted-foreground text-xs">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
