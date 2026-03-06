"use client";

import { useEffect, useRef } from "react";

const SKILLS = [
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL",
  "Prisma", "Tailwind CSS", "REST APIs", "CI/CD", "Vitest",
  "Storybook", "Figma", "Git",
];

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
  { value: "50K+", label: "npm Downloads" },
];

const STEPS = [
  { num: "01", title: "Understand", desc: "Deep dive into requirements, user needs, and technical constraints before writing a single line." },
  { num: "02", title: "Design", desc: "Architecture planning, API design, and component hierarchy mapping with the team." },
  { num: "03", title: "Build", desc: "Iterative development with clean, well-tested, and documented code at every step." },
  { num: "04", title: "Ship", desc: "CI/CD pipelines, performance audits, error monitoring, and post-launch support." },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els?.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 sm:px-12 lg:px-20 relative"
      aria-labelledby="about-heading"
    >
      {/* Section divider */}
      <div className="reveal flex items-center gap-4 mb-16">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-lime-400">
          02 — About
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* ── Left: Bio ── */}
        <div>
          <h2
            id="about-heading"
            className="reveal font-black leading-[0.92] tracking-tight text-white mb-8"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Building the Web,
            <br />
            <span className="text-lime-400">One Line</span>
            <br />
            at a Time.
          </h2>

          <p
            className="reveal text-white/50 text-base sm:text-lg leading-relaxed mb-5"
            style={{ transitionDelay: "0.08s" }}
          >
            I&apos;m a full-stack developer with 5+ years of experience building scalable
            web applications for startups and enterprises alike. I specialise in
            React&thinsp;/&thinsp;Next.js on the front end and Node.js or Python on the back
            end.
          </p>

          <p
            className="reveal text-white/50 text-base sm:text-lg leading-relaxed"
            style={{ transitionDelay: "0.16s" }}
          >
            When I&apos;m not writing code I&apos;m contributing to open source, writing
            technical articles, or exploring the intersection of design and
            engineering.
          </p>

          {/* Stats grid */}
          <div
            className="reveal grid grid-cols-2 gap-4 mt-12"
            style={{ transitionDelay: "0.24s" }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/[0.08] rounded-2xl p-5 bg-white/[0.025]"
              >
                <p className="text-3xl font-black text-lime-400">{stat.value}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-white/38 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Skills + Process ── */}
        <div>
          <h3 className="reveal text-xs font-mono uppercase tracking-[0.25em] text-white/35 mb-5">
            Tech Stack &amp; Skills
          </h3>

          <div
            className="reveal flex flex-wrap gap-2"
            style={{ transitionDelay: "0.08s" }}
          >
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-sm font-mono px-3.5 py-1.5 rounded-full border border-white/10 text-white/55 hover:border-lime-400/50 hover:text-lime-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Process */}
          <div className="mt-14 space-y-6">
            <h3 className="reveal text-xs font-mono uppercase tracking-[0.25em] text-white/35">
              My Approach
            </h3>

            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="reveal flex gap-5 group"
                style={{ transitionDelay: `${0.08 + i * 0.08}s` }}
              >
                <span className="text-xs font-mono text-lime-400/55 mt-0.5 group-hover:text-lime-400 transition-colors shrink-0">
                  {step.num}
                </span>
                <div>
                  <p className="font-semibold text-white/80 group-hover:text-white transition-colors">
                    {step.title}
                  </p>
                  <p className="text-sm text-white/35 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
