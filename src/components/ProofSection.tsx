import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import DiscobolusMark from "@/components/DiscobolusMark";
import discobolus from "@/assets/discobolus-museum.jpg";

const CALENDLY = "https://calendly.com/dignangetz";

export default function ProofSection() {
  const ref = useScrollFadeIn();

  return (
    <section
      id="founding"
      className="relative py-32 border-t border-border overflow-hidden bg-[hsl(217_42%_8%)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-no-repeat opacity-[0.14]"
        style={{
          backgroundImage: `url(${discobolus})`,
          backgroundSize: "auto 82%",
          backgroundPosition: "center center",
          backgroundColor: "hsl(217 42% 8%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, hsl(217 40% 10% / 0.55) 0%, hsl(217 42% 8% / 0.95) 65%, hsl(217 44% 6%) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-24 bg-accent/60"
      />

      <div ref={ref} className="fade-in-section relative container mx-auto px-6 max-w-4xl text-center">
        <div className="flex justify-center mb-8">
          <DiscobolusMark className="h-10 w-10 text-accent" title="Discobolus mark" />
        </div>
        <p className="font-body text-xs tracking-widest uppercase text-accent mb-6">
          Founding Clients
        </p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl leading-snug mb-8 text-foreground">
          Three commissions open <span className="text-accent">this quarter.</span>
        </h2>
        <p className="font-body text-base text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-6">
          Akribeia is taking on a small, deliberate set of founding clients. Founding-client
          engagements include locked pricing for 12 months, the founder's direct attention, and a
          public case-study credit if you choose to give one.
        </p>
        <p className="font-body text-base text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-12">
          When the three are signed, we close the books on founding pricing and move to the
          standard rate card.
        </p>

        <div className="grid sm:grid-cols-3 gap-px bg-accent/15 border border-accent/20 mb-12 shadow-[0_20px_60px_-20px_hsl(217_60%_4%/0.7)]">
          <div className="bg-[hsl(217_38%_11%)] p-8">
            <p className="font-heading text-4xl text-accent mb-2">3</p>
            <p className="label-eyebrow text-foreground/65">Commissions reserved</p>
          </div>
          <div className="bg-[hsl(217_38%_11%)] p-8">
            <p className="font-heading text-4xl text-accent mb-2">12</p>
            <p className="label-eyebrow text-foreground/65">Months locked pricing</p>
          </div>
          <div className="bg-[hsl(217_38%_11%)] p-8">
            <p className="font-heading text-4xl text-accent mb-2">1</p>
            <p className="label-eyebrow text-foreground/65">Founder, in the room</p>
          </div>
        </div>

        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-sm font-body tracking-widest uppercase border border-accent bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-500 shadow-[0_8px_30px_-8px_hsl(32_42%_30%/0.5)]"
        >
          Claim a Founding Slot
        </a>
      </div>
    </section>
  );
}
