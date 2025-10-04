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
              <span className="text-xl font-bold text-white">РР</span>
            </div>
            <div>
              <div className="text-xl font-bold hero-text">Ровный ремонт</div>
              <div className="text-xs text-muted-foreground">Премиум ремонт</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm lg:text-base font-semibold transition-colors duration-200 hover:text-primary hover:scale-105 ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-accent pb-1 scale-105"
                    : "text-foreground/90"
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
              className="flex items-center space-x-1.5 px-3 py-2 lg:px-4 lg:py-2.5 text-sm lg:text-base font-bold text-white bg-gradient-to-r from-primary to-primary-variant hover:from-primary-variant hover:to-primary transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 border border-white/20"
            >
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden lg:inline">8 (905) 864-43-63</span>
              <span className="lg:hidden">8 (905) 864-43-63</span>
            </a>
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
                  className="flex items-center space-x-2 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-variant p-3 rounded-lg shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>8 (905) 864-43-63</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};