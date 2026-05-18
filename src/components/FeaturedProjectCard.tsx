import type { Lang, ProjectCaseStudy } from '../types/content';

interface FeaturedProjectCardProps {
  project: ProjectCaseStudy;
  lang: Lang;
  onOpenModal: (project: ProjectCaseStudy) => void;
  t: (key: string) => string;
}

export function FeaturedProjectCard({ project, lang, onOpenModal, t }: FeaturedProjectCardProps) {
  const l = (value: { es: string; en: string }) => value[lang] || value.es;

  return (
    <article className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="mb-4">
        <h3 className="text-[1.2rem] font-bold leading-tight text-white">{project.name}</h3>
        <p className="mt-2 text-[0.94rem] leading-snug text-slate-300">{l(project.headline)}</p>
      </div>

      {project.metrics.length > 0 && (
        <div className="mb-4 flex gap-3">
          {project.metrics.slice(0, 2).map((metric, index) => (
            <div key={`${project.slug}-metric-${index}`} className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white">{metric.value}</span>
              <span className="text-xs text-slate-500">{l(metric.label)}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-slate-300">
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-slate-500">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
        >
          {t('project.viewCaseStudy')}
        </button>
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} - ${t('caseStudy.viewLive')}`}
            className="rounded-lg border border-white/20 p-2 text-slate-400 transition-colors hover:border-white/40 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
