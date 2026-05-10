import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-clean.png";

const navLinks = [
  { label: "Approach", href: "#approach" },
  { label: "Packages", href: "#packages" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Founder", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const CALENDLY = "https://calendly.com/dignangetz";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      {!scrolled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/80 via-background/35 to-transparent"
        />
      )}
      <div className="container mx-auto relative flex items-center justify-between py-5 px-6 gap-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-heading text-base lg:text-lg text-foreground tracking-tight whitespace-nowrap"
          style={!scrolled ? { textShadow: "0 1px 8px hsl(217 40% 5% / 0.85)" } : undefined}
        >
          <img
            src={logo}
            alt="Akribeia Architects — Discobolus mark"
            width={32}
            height={32}
            className="h-8 w-8 object-contain shrink-0"
          />
          Akribeia Architects
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs font-body tracking-widest uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-foreground/85 hover:text-foreground"
              }`}
              style={!scrolled ? { textShadow: "0 1px 6px hsl(217 40% 5% / 0.8)" } : undefined}
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body tracking-widest uppercase border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-all duration-500 whitespace-nowrap"
          >
            Book a Free Walkthrough
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm border-b border-border px-6 pb-6 space-y-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-xs font-body tracking-widest uppercase text-accent"
          >
            Book a Free Walkthrough →
          </a>
        </div>
      )}
    </header>
  );
}
