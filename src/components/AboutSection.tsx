import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import dignanImg from "@/assets/dignan-getz-clean.jpg";
import claytonImg from "@/assets/clayton-cotrell-clean.jpg";

const team = [
  { name: "Dignan Getz", role: "Co-Founder", bio: "Strategic vision and client partnerships — designing financial systems that scale.", image: dignanImg },
  { name: "Clayton Cotrell", role: "Co-Founder", bio: "Technical architecture and implementation — building the infrastructure behind the numbers.", image: claytonImg },
];

export default function AboutSection() {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="py-32 border-t border-border">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-8 text-center">
          Leadership
        </p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground mb-20">
          Meet the Founders
        </h2>

        <div className="grid sm:grid-cols-2 gap-16 max-w-2xl mx-auto">
          {team.map((t) => (
            <div key={t.name} className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-1">{t.name}</h3>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">{t.role}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
