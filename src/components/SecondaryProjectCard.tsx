import type { Lang, ProjectCaseStudy } from '../types/content';

interface SecondaryProjectCardProps {
  project: ProjectCaseStudy;
  lang: Lang;
  t: (key: string) => string;
}

export function SecondaryProjectCard({ project, lang, t }: SecondaryProjectCardProps) {
  const l = (value: { es: string; en: string }) => value[lang] || value.es;
  const url = project.links.live || project.links.repo || '#';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name} - ${t('project.viewProject')}`}
      className="group block rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate text-[1rem] font-semibold leading-tight text-white">{project.name}</h3>
          <p className="mt-1 line-clamp-2 text-[0.86rem] leading-snug text-slate-300">
            {l(project.headline)}
          </p>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-slate-500 transition-colors group-hover:text-slate-300"
        >
          <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {project.stack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded bg-white/[0.07] px-2 py-0.5 text-[0.72rem] text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
