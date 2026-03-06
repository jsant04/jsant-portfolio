"use client";

import { useState, useEffect, useRef } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-reveal
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

  // ── Client-side validation ──────────────────────────────────────
  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) {
      e.message = "Message is required.";
    } else if (form.message.trim().length < 20) {
      e.message = "Message must be at least 20 characters.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white/[0.04] border ${
      errors[field] ? "border-red-500/60" : "border-white/10"
    } rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/18 focus:outline-none focus:border-lime-400/60 transition-colors`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 sm:px-12 lg:px-20 relative"
      aria-labelledby="contact-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-lime-400/[0.04] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-16">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-lime-400">
          04 — Contact
        </span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* ── Left: Copy ── */}
        <div>
          <h2
            id="contact-heading"
            className="reveal font-black leading-[0.92] tracking-tight text-white mb-8"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Let&apos;s Build
            <br />
            <span className="text-lime-400">Something</span>
            <br />
            Together.
          </h2>

          <p
            className="reveal text-white/45 text-base leading-relaxed mb-12"
            style={{ transitionDelay: "0.08s" }}
          >
            Whether you have a project in mind, want to collaborate, or just
            want to say hi — my inbox is always open. I&apos;ll get back to you
            within 24 hours.
          </p>

          {/* Contact info */}
          <div className="reveal space-y-4" style={{ transitionDelay: "0.16s" }}>
            <a
              href="mailto:nash.santiago04@gmail.com"
              className="flex items-center gap-4 group"
              aria-label="Send email to nash.santiago04@gmail.com"
            >
              <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-lime-400/40 transition-colors shrink-0">
                <svg
                  className="w-4 h-4 text-white/38 group-hover:text-lime-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-sm text-white/48 group-hover:text-white transition-colors">
                nash.santiago04@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-white/38"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-sm text-white/48">
                Manila, Philippines · Remote-first
              </span>
            </div>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="reveal" style={{ transitionDelay: "0.12s" }}>
          {status === "success" ? (
            <div
              role="status"
              aria-live="polite"
              className="border border-lime-400/20 bg-lime-400/[0.04] rounded-2xl p-10 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-lime-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-white mb-2">Message Sent!</h3>
              <p className="text-sm text-white/45 mb-6 leading-relaxed">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm font-mono text-lime-400 hover:text-lime-300 transition-colors"
              >
                Send another →
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-widest text-white/35 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="text-xs text-red-400 mt-1.5"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-widest text-white/35 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-xs text-red-400 mt-1.5"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-widest text-white/35 mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What&apos;s it about?"
                  className={inputClass("subject")}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    role="alert"
                    className="text-xs text-red-400 mt-1.5"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-widest text-white/35 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClass("message")} resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="text-xs text-red-400 mt-1.5"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Server error */}
              {status === "error" && (
                <p
                  role="alert"
                  aria-live="assertive"
                  className="text-xs text-red-400 bg-red-400/[0.06] border border-red-400/20 rounded-xl px-4 py-3"
                >
                  Something went wrong. Please try again or email me directly at
                  hello@jsant.dev.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-fill w-full border border-white/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
