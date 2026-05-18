import logo from "@/assets/logo-clean.png";
import { Mail, Calendar } from "lucide-react";

const CALENDLY = "https://calendly.com/dignangetz";
const EMAIL = "dignang3tz@gmail.com";

const sitemap = [
  { label: "Approach", href: "#approach" },
  { label: "Packages", href: "#packages" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Founder", href: "#about" },
  { label: "Free Walkthrough", href: "#audit" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10 bg-[hsl(217_44%_7%)] text-foreground overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-24 bg-accent/40"
      />
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="flex items-center gap-2.5 font-heading text-lg mb-6">
              <img
                src={logo}
                alt="Stoa Intelligence logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              Stoa Intelligence
            </span>
            <p className="font-body text-sm text-foreground/70 leading-relaxed max-w-md mb-6">
              Stoa Intelligence builds the financial, AI, and operational systems your business is supposed
              to stand on — measured, structural, and meant to last.
            </p>
            <p className="font-body text-xs text-foreground/50 italic">
              Stoa Intelligence (ἀκρίβεια) — precision, exactness, care.
            </p>
          </div>

          <div>
            <p className="label-eyebrow mb-5">Sitemap</p>
            <ul className="space-y-3">
              {sitemap.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-foreground/80 hover:text-accent transition-colors duration-500"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow mb-5">Contact</p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 font-body text-sm text-foreground/80 hover:text-accent transition-colors duration-500"
                >
                  <Mail size={14} /> {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-foreground/80 hover:text-accent transition-colors duration-500"
                >
                  <Calendar size={14} /> Book a Free Walkthrough
                </a>
              </li>
              <li className="font-body text-sm text-foreground/60">
                US-based · remote engagements
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-body text-xs text-foreground/50">
            © {new Date().getFullYear()} Stoa Intelligence.
          </p>
          <p className="font-body text-xs text-foreground/50">
            Privacy and terms available on request — write us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-accent">{EMAIL}</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
