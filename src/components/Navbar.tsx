"use client";

import { useState } from "react";

const navLinks = [
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Stack", href: "/#expertise" },
  { label: "Why Hire Me", href: "/#why-hire-me" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Reviews", href: "/#reviews" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
      <div className="flex justify-between items-center w-full px-6 md:px-12 xl:px-20 2xl:px-[120px] py-6 md:py-8 max-w-[1920px] mx-auto">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-black tracking-tighter text-primary uppercase font-headline hover:opacity-80 transition-opacity"
        >
          Adnan Labs
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-headline font-bold tracking-[0.04em] uppercase text-[0.875rem] text-primary hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="bg-primary text-on-primary-container px-6 md:px-8 py-3 font-headline font-bold tracking-[0.04em] uppercase text-[0.875rem] transition-transform active:scale-95 hidden sm:inline-block"
          >
            Contact Me
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-outline-variant/30 px-6 pb-8 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-headline font-bold tracking-[0.04em] uppercase text-sm text-primary hover:text-secondary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-primary text-on-primary-container px-6 py-3 font-headline font-bold tracking-[0.04em] uppercase text-sm text-center mt-4"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
