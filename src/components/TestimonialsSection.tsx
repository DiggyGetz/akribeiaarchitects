import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const testimonials = [
  {
    quote: "Jr Core Advisors transformed our family's financial future. Their multi-generational planning approach is unmatched.",
    name: "Robert & Linda Hayes",
    title: "Clients since 2018",
  },
  {
    quote: "The tax savings alone from their strategies have been extraordinary. Truly institutional-quality advice.",
    name: "Dr. Sarah Mitchell",
    title: "Physician & Entrepreneur",
  },
  {
    quote: "Their team treats you like family while delivering the sophistication of a Wall Street firm.",
    name: "Marcus Johnson",
    title: "CEO, TechVentures Inc.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useScrollFadeIn();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-3xl text-center">
        <Quote className="text-primary/30 mx-auto mb-6" size={48} />
        <div className="min-h-[180px] flex items-center justify-center">
          <div key={current} className="animate-fade-in">
            <p className="text-xl sm:text-2xl text-foreground font-light leading-relaxed mb-8 italic">
              "{testimonials[current].quote}"
            </p>
            <p className="font-heading font-semibold text-foreground">
              {testimonials[current].name}
            </p>
            <p className="text-muted-foreground text-sm">{testimonials[current].title}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary/40 transition">
            <ChevronLeft className="text-muted-foreground" size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary/40 transition">
            <ChevronRight className="text-muted-foreground" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
