import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";

const navLinks = [
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Healthcare", path: "/healthcare" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-black/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="ARAPH Solutions Home"
          >
            <span className="text-xl lg:text-2xl font-serif font-semibold text-brand-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">
              ARAPH
            </span>
            <span className="text-xs lg:text-sm text-brand-gray font-light tracking-widest uppercase">
              Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-light tracking-wide transition-colors duration-300 hover:text-brand-gold ${
                  location.pathname === link.path
                    ? "text-brand-gold"
                    : "text-brand-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium border border-brand-gold/60 text-brand-gold rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
            >
              Start a Project
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand-white hover:text-brand-gold transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-light tracking-wide transition-all duration-300 hover:text-brand-gold ${
                location.pathname === link.path
                  ? "text-brand-gold"
                  : "text-brand-white"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-8 px-8 py-3 text-sm font-medium border border-brand-gold text-brand-gold rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
          >
            Start a Project
          </Link>
          <p className="mt-8 text-xs text-brand-gray">
            {siteConfig.email}
          </p>
        </div>
      </div>
    </>
  );
}
