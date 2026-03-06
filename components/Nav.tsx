"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/80 backdrop-blur-2xl border-b border-white/[0.06]"
          : ""
      }`}
      role="banner"
    >
      <div className="flex items-center justify-between px-6 sm:px-12 lg:px-20 h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-white hover:text-lime-400 transition-colors"
          aria-label="Jonash Santiago — Back to home"
        >
          nash.santiago04<span className="text-lime-400">@gmail.com</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex text-xs font-mono uppercase tracking-widest px-5 py-2 rounded-full border border-lime-400/40 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors"
          >
            Hire Me
          </a>

          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block w-5 h-px bg-white origin-center transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-white origin-center transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <div className="bg-[#080808] border-b border-white/[0.08] px-6 pb-6 pt-2 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-mono uppercase tracking-widest text-white/55 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-sm font-mono uppercase tracking-widest text-lime-400 hover:text-lime-300 transition-colors"
          >
            Hire Me →
          </a>
        </div>
      </div>
    </header>
  );
}
