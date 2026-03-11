import { Menu, Scissors, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book Now", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-scrolled" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <Scissors
            size={20}
            className="gold-text rotate-45 group-hover:rotate-0 transition-transform duration-300"
          />
          <span
            className="font-display text-xl font-bold tracking-widest uppercase"
            style={{ color: scrolled ? undefined : "oklch(97% 0.005 85)" }}
          >
            {scrolled ? (
              <span className="gold-gradient-text">Raju Hare Dare</span>
            ) : (
              "Raju Hare Dare"
            )}
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="transition-colors duration-300 text-sm tracking-widest uppercase font-medium"
                style={{ color: scrolled ? "var(--mid)" : "oklch(90% 0 0)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = scrolled
                    ? "var(--mid)"
                    : "oklch(90% 0 0)";
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: scrolled ? "var(--dark)" : "oklch(97% 0 0)" }}
        >
          {menuOpen ? (
            <X size={24} className="gold-text" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{
          background: "oklch(97% 0.008 85 / 0.98)",
          borderBottom: "1px solid oklch(62% 0.14 85 / 0.2)",
        }}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-6 py-4 transition-colors duration-300 text-sm tracking-widest uppercase"
                style={{ color: "var(--mid)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--mid)";
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
