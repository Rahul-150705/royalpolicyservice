import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pollution Center", href: "#pollution" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:9344498444" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span>9344498444</span>
          </a>
          <a href="mailto:royalpolicyservice@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span>royalpolicyservice@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-hero-gradient rounded-lg flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-serif font-bold text-xl md:text-2xl">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-foreground leading-tight">Royal Policy</span>
              <span className="text-xs md:text-sm text-muted-foreground leading-tight">Service</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="accent" size="lg" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <a href="tel:9344498444" className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>9344498444</span>
              </a>
              <a href="mailto:royalpolicyservice@gmail.com" className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>royalpolicyservice@gmail.com</span>
              </a>
            </div>
            <Button variant="accent" className="mt-2" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
