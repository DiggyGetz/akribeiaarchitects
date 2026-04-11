export default function LogoTicker() {
  const logos = [
    "Forbes",
    "Bloomberg",
    "Wall Street Journal",
    "CNBC",
    "Financial Times",
    "Barron's",
  ];
  const doubled = [...logos, ...logos];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8">
        As Seen In
      </p>
      <div className="relative">
        <div className="flex animate-slide-left whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="inline-block mx-12 text-xl font-heading font-semibold text-muted-foreground/40"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
