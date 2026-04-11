import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const checklist = [
  "Build/Improve Business Infrastructure",
  "Clean Messy Financial Data",
  "Custom Financial Dashboarding",
  "AI & System Automation",
  "Cash Flow/Budgeting Systems",
  "Other Technical Accounting Needs",
];

export default function ContactSection() {
  const ref = useScrollFadeIn();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 border-t border-border">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-2xl">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-8 text-center">
          Start a Conversation
        </p>
        <h2 className="font-heading font-normal text-3xl sm:text-4xl text-center text-foreground mb-6">
          Schedule a Consultation
        </h2>
        <p className="font-body text-base text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Tell us about your business and where you need clarity. We'll take it from there.
        </p>

        {submitted ? (
          <div className="text-center py-16">
            <h3 className="font-heading text-2xl text-foreground mb-3">Thank you.</h3>
            <p className="font-body text-muted-foreground">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Name</label>
                <input
                  required
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Company Email</label>
                <input
                  required
                  type="email"
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-500"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">How can we help?</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {checklist.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleItem(item)}
                    className={`text-left px-4 py-3 border text-sm font-body transition-all duration-300 ${
                      selected.includes(item)
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-500 resize-none"
                placeholder="Tell us more about your needs..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 font-body text-xs tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors duration-500 pt-4"
            >
              Send Message
              <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
