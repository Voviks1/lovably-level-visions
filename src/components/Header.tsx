import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "Проекты", href: "/projects" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-variant rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">LH</span>
            </div>
            <div>
              <div className="text-xl font-bold hero-text">Level House</div>
              <div className="text-xs text-muted-foreground">Премиум ремонт</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-accent pb-1"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+79058644363"
              className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>8 (905) 864-43-63</span>
            </a>
            <Button variant="default" className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-accent-foreground font-semibold">
              Консультация
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.href) ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+79058644363"
                  className="flex items-center space-x-2 text-sm font-medium text-foreground mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>8 (905) 864-43-63</span>
                </a>
                <Button variant="default" className="w-full bg-gradient-to-r from-accent to-yellow-500 text-accent-foreground font-semibold">
                  Бесплатная консультация
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};