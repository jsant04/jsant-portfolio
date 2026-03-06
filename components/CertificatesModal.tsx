"use client";

import { useEffect, useRef } from "react";
import { certificates } from "@/lib/certificates";

interface CertificatesModalProps {
  onClose: () => void;
}

export default function CertificatesModal({ onClose }: CertificatesModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Focus trap — focus the panel on mount
  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  // Close when clicking the backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certs-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl border border-white/[0.09] bg-[#111111] shadow-2xl outline-none"
      >
        {/* ── Modal header ── */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.07] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-lime-400/25 bg-lime-400/[0.07] flex items-center justify-center">
              <svg
                className="w-4 h-4 text-lime-400"
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
              <h2
                id="certs-modal-title"
                className="font-bold text-base text-white leading-none"
              >
                My Certificates
              </h2>
              <p className="text-xs font-mono text-white/35 mt-0.5">
                {certificates.length} credentials
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificates modal"
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* ── Certificates grid (scrollable) ── */}
        <div className="overflow-y-auto p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.16] transition-colors"
            >
              {/* PDF live preview via scaled iframe */}
              <div className={`relative h-44 bg-gradient-to-br ${cert.gradient} overflow-hidden`}>
                {/* Scaled-down iframe renders the actual PDF page */}
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={`Preview of ${cert.title}`}
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "200%",
                    height: "200%",
                    transform: "scale(0.5)",
                    transformOrigin: "top left",
                    border: "none",
                    pointerEvents: "none",
                    background: "#fff",
                  }}
                />
                {/* Hover overlay: open PDF */}
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${cert.title} certificate PDF`}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-white border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    Open PDF →
                  </span>
                </a>
              </div>

              <div className="p-5">
                {/* Category badge */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/35 bg-white/[0.05] px-2 py-0.5 rounded-full">
                  {cert.category}
                </span>

                <h3 className="mt-3 font-semibold text-sm text-white group-hover:text-lime-400 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="mt-1 text-xs text-white/40 leading-relaxed">
                  {cert.issuer}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/25">{cert.date}</span>

                  <div className="flex items-center gap-3">
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title} certificate`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400/70 hover:text-lime-400 transition-colors"
                    >
                      View
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={cert.pdf}
                      download
                      aria-label={`Download ${cert.title} certificate`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/35 hover:text-white transition-colors"
                    >
                      Download
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
