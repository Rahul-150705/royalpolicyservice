import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/components/ui/logo.jpeg"; // ✅ LOGO IMPORT

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Partners", href: "#partners" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Royal Policy Service Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-primary uppercase">
              ROYALPOLICYSERVICE
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Happy to Help you</p>
              <a href="tel:+919344498444" className="font-semibold text-foreground">
                +91 9344498444
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
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
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+919344498444" className="font-semibold text-foreground">
                +91 9344498444
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
