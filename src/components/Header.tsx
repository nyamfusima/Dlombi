"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact } from "@/lib/contact";
import { BedMark } from "./BedMark";

const links = [
  ["About", "#about"],
  ["Accommodation", "#accommodation"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
  ["Contact", "#contact"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled || menuOpen ? " is-solid" : ""}`}>
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Dlombi's Guesthouse home" onClick={closeMenu}>
          <BedMark className="brand-mark" />
          <span className="brand-type">
            <span>Dlombi&apos;s</span>
            <span>Guesthouse</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">Enquire about a stay <span aria-hidden="true">↗</span></a>
        <a className="header-phone" href={contact.phoneHref} aria-label={`Call ${contact.phoneDisplay}`}>
          {contact.phoneDisplay}
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} strokeWidth={1.5} /> : <Menu size={23} strokeWidth={1.5} />}
        </button>
      </div>

      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {links.map(([label, href], index) => (
          <a
            key={href}
            href={href}
            style={{ transitionDelay: menuOpen ? `${index * 45}ms` : "0ms" }}
            onClick={closeMenu}
          >
            <span>0{index + 1}</span>{label}<span aria-hidden="true">↗</span>
          </a>
        ))}
        <a className="mobile-nav-cta" href="#contact" onClick={closeMenu}>Enquire about a stay <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
