import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Engagements", href: "#engagements" },
  { label: "Contact", href: "#contact" },
];

function LegalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M7 7h10" />
      <path d="M6 7c0 2-1.5 4-3 5 1.5 1 3 3 3 5" />
      <path d="M18 7c0 2 1.5 4 3 5-1.5 1-3 3-3 5" />
      <path d="M8 20h8" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    const onResize = () => {
      if (window.innerWidth > 820) setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar-wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-shell">
        <nav className="navbar container">
          <a href="#home" className="brand" onClick={handleNavClick}>
            <span className="brand-icon" aria-hidden="true">
              <LegalIcon />
            </span>
            <span className="brand-text">DKP Legal</span>
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "show" : ""}`}
          >
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}