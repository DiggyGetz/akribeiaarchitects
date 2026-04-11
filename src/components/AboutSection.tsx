import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import dignanImg from "@/assets/dignan-getz-clean.jpg";
import claytonImg from "@/assets/clayton-cotrell-clean.jpg";

const team = [
  { name: "Dignan Getz", role: "Co-Founder", bio: "Visionary leader driving strategic growth and client partnerships", image: dignanImg },
  { name: "Clayton Cotrell", role: "Co-Founder", bio: "Expert in institutional portfolio management and wealth strategy", image: claytonImg },
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
          Meet the Founders
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A team of seasoned professionals dedicated to your financial success.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.map((t) => (
            <div
              key={t.name}
              className="glass-card p-6 text-center hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 ring-2 ring-primary/20 group-hover:ring-primary/50 transition">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover scale-[1.55]" />
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
