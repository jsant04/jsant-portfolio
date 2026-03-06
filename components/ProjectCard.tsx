import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card group flex-shrink-0 w-[290px] sm:w-[350px] lg:w-[390px] rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.025] flex flex-col"
      aria-label={`View ${project.title} — ${project.category} project`}
    >
      {/* Gradient hero */}
      <div
        className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Category badge */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-white/80 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Large number */}
        <div className="absolute top-4 right-4 text-6xl font-black text-white/10 leading-none select-none tabindex-[-1]">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <span className="text-xs font-mono uppercase tracking-widest text-white border border-white/30 px-5 py-2 rounded-full">
            View Project →
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-bold text-base text-white group-hover:text-lime-400 transition-colors leading-snug">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-white/28 shrink-0 mt-0.5">
            {project.year}
          </span>
        </div>

        <p className="text-sm text-white/42 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-white/28 bg-white/[0.05] px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-mono text-white/28 bg-white/[0.05] px-2 py-0.5 rounded">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
