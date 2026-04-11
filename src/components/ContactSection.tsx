import { useState } from "react";
import { Send } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const tiers = ["Under $500K", "$500K – $1M", "$1M – $5M", "$5M – $10M", "$10M+"];

export default function ContactSection() {
  const ref = useScrollFadeIn();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-2xl">
        <p className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase text-center mb-3">
          Get In Touch
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-foreground mb-4">
          Schedule a Consultation
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
          Take the first step toward institutional-quality financial guidance.
        </p>

        {submitted ? (
          <div className="glass-card p-12 text-center">
            <p className="text-primary text-2xl font-heading font-semibold mb-2">Thank You</p>
            <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                placeholder="Full Name"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <select
              required
              defaultValue=""
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="" disabled>Investment Tier</option>
              {tiers.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your financial goals..."
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:brightness-110 transition"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
