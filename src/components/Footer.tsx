import logo from "@/assets/logo-clean.png";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="flex items-center gap-2.5 font-heading text-lg text-foreground">
            <img src={logo} alt="Jr Core Advisors" className="h-8 w-8 object-contain" />
            Jr Core Advisors
          </span>
          <div className="flex gap-10 text-xs font-body tracking-widest uppercase text-muted-foreground">
            <a href="#approach" className="hover:text-foreground transition-colors duration-500">Approach</a>
            <a href="#services" className="hover:text-foreground transition-colors duration-500">Capabilities</a>
            <a href="#about" className="hover:text-foreground transition-colors duration-500">Team</a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-500">Contact</a>
          </div>
          <p className="text-xs font-body text-muted-foreground">
            © 2026 Jr Core Advisors
          </p>
        </div>
      </div>
    </footer>
  );
}
