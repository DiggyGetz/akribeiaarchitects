export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-heading font-bold text-lg text-foreground">
            Jr Core <span className="text-gradient-gold">Advisors</span>
          </span>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Jr Core Advisors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
