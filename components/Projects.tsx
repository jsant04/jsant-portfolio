"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import CertificatesModal from "./CertificatesModal";
import { projects } from "@/lib/projects";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [showCerts, setShowCerts] = useState(false);

  // ── Intercept vertical wheel → horizontal scroll ─────────────────
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // If the scroll is primarily horizontal (trackpad), let the browser handle it
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;

      // Let vertical scroll pass through at the boundaries
      if (atStart && e.deltaY < 0) return;
      if (atEnd && e.deltaY > 0) return;

      e.preventDefault();
      el.scrollBy({ left: e.deltaY * 1.6, behavior: "auto" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ── Scroll-reveal ────────────────────────────────────────────────
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els?.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ── Keyboard navigation ──────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      el.scrollBy({ left: 360, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      el.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative"
      aria-labelledby="projects-heading"
    >
      {/* ── Header ── */}
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-lime-400">
            03 — Projects
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
          <span className="text-xs font-mono text-white/28">
            {projects.length} works
          </span>
        </div>

        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2
            id="projects-heading"
            className="font-black leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Selected
            <br />
            <span className="text-lime-400">Work</span>
          </h2>
          <p className="text-sm text-white/38 max-w-[260px] leading-relaxed">
            Hover to preview · scroll or drag to explore · use ← → keys to
            navigate.
          </p>
        </div>
      </div>

      {/* ── Horizontal scroll track ── */}
      <div
        ref={scrollRef}
        role="region"
        aria-label="Projects gallery — scroll horizontally to explore"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="no-scrollbar overflow-x-auto cursor-grab active:cursor-grabbing focus-visible:outline-none"
      >
        <div className="flex gap-5 px-6 sm:px-12 lg:px-20 pb-6 w-max">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Scroll-progress hint */}
      <div
        className="px-6 sm:px-12 lg:px-20 mt-3 flex items-center gap-3"
        aria-hidden="true"
      >
        <div className="flex gap-1.5">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 rounded-full ${
                i === 0 ? "w-8 bg-lime-400" : "w-2 bg-white/12"
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] font-mono text-white/22 uppercase tracking-[0.2em]">
          ← drag / scroll →
        </span>
      </div>

      {/* ── Certificates banner ── */}
      <div className="px-6 sm:px-12 lg:px-20 mt-16 reveal">
        <div className="border border-white/[0.08] rounded-2xl p-8 sm:p-12 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-11 h-11 rounded-xl border border-lime-400/20 bg-lime-400/[0.06] flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-lime-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-xl text-white">View My Certificates</p>
              <p className="text-sm text-white/40 mt-1">
                Credentials and professional certifications I&apos;ve earned along the way.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowCerts(true)}
            className="btn-fill shrink-0 inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white rounded-full"
          >
            See Certificates
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 14 14"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* ── Certificates modal ── */}
      {showCerts && <CertificatesModal onClose={() => setShowCerts(false)} />}
    </section>
  );
}
