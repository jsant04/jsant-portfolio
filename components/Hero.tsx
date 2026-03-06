"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const TICKER_ITEMS = [
  "Technical Support", "·", "HTML · CSS · JavaScript", "·", "Python", "·",
  "Prompt Engineering", "·", "Customer Service", "·", "System Analysis", "·",
  "Documentation", "·", "Problem Solving", "·", "Team Collaboration", "·",
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Performant parallax using ref — avoids re-renders on every scroll
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden grid-bg"
      aria-label="Hero — introduction"
    >
      {/* Parallax ambient orbs */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-lime-400/8 blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-violet-600/8 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-24 shrink-0" />

      {/* ── Main heading block ── */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 flex-1 flex flex-col justify-center">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-lime-400 mb-7">
          Open to Opportunities &nbsp;·&nbsp; Technical Support / Senior Analyst
        </p>

        <h1
          className="font-black leading-[0.88] tracking-tight text-white"
          style={{ fontSize: "clamp(3.25rem, 11vw, 9rem)" }}
        >
          Jonash
          <br />
          <span className="text-lime-400">Santiago</span>
        </h1>

        <p className="mt-8 max-w-md text-base sm:text-lg text-white/50 leading-relaxed">
          Problem-solving Technical Support Specialist with coding skills. 
          Combines customer support expertise, analytical thinking, and documentation with hands-on development 
          using HTML, CSS, JavaScript, and Python, 
          now transitioning to web development.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="btn-fill group inline-flex items-center gap-2.5 border border-white/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white rounded-full"
          >
            View Work
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-lime-400 rounded-full border border-lime-400/30 hover:border-lime-400 hover:bg-lime-400/5 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div
        className="relative z-10 mt-16 border-t border-b border-white/[0.07] py-4 overflow-hidden"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className={`text-xs font-mono uppercase tracking-widest px-5 whitespace-nowrap select-none ${
                item === "·" ? "text-lime-400" : "text-white/25"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
