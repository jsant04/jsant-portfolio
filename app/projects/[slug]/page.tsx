import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — JSant`,
    description: project.description,
    openGraph: {
      title: `${project.title} — JSant`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — JSant`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen pt-24 pb-32 px-6 sm:px-12 lg:px-20">
      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/38 hover:text-lime-400 transition-colors mb-12 group"
      >
        <svg
          className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 12H5M12 19l-7-7 7-7"
          />
        </svg>
        Back to Projects
      </Link>

      {/* Gradient hero banner */}
      <div
        className={`relative h-56 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden mb-14`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-white/80 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {project.category}
          </span>
          <span className="text-xs font-mono text-white/50">{project.year}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        {/* ── Main content ── */}
        <article className="lg:col-span-2">
          <h1
            className="font-black leading-tight text-white mb-8"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3.25rem)" }}
          >
            {project.title}
          </h1>

          <div className="space-y-5 text-white/52 text-base leading-relaxed">
            {project.longDescription
              .trim()
              .split("\n\n")
              .map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
          </div>

          {/* CTA links */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white rounded-xl"
            >
              Live Demo
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white/55 rounded-xl border border-white/10 hover:border-white/28 hover:text-white transition-colors"
            >
              Source Code
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
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                />
              </svg>
            </a>
          </div>
        </article>

        {/* ── Sidebar ── */}
        <aside className="space-y-6">
          <div className="sticky top-24">
            {/* Tech stack */}
            <div className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.025] mb-6">
              <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-white/35 mb-5">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-mono text-white/55 bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* More projects */}
            {others.length > 0 && (
              <div className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.025]">
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-white/35 mb-5">
                  More Projects
                </h2>
                <ul className="space-y-3">
                  {others.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.gradient} shrink-0`}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-white/48 group-hover:text-white transition-colors leading-snug">
                          {p.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
