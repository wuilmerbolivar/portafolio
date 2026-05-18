import { useEffect, useRef } from 'react';
import type { Lang, ProjectCaseStudy } from '../types/content';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  lang: Lang;
  onClose: () => void;
  t: (key: string) => string;
}

export function CaseStudyModal({ project, lang, onClose, t }: CaseStudyModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) {
      return;
    }

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && project) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  useEffect(() => {
    if (!project) {
      return;
    }

    const modal = overlayRef.current;
    if (!modal) {
      return;
    }

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input',
      'select',
      'textarea',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return;
      }

      const focusable = Array.from(modal.querySelectorAll<HTMLElement>(focusableSelectors));
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    modal.addEventListener('keydown', handleTab);
    return () => modal.removeEventListener('keydown', handleTab);
  }, [project]);

  if (!project) {
    return null;
  }

  const l = (value: { es: string; en: string }) => value[lang] || value.es;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-brand-card shadow-2xl hidden-scrollbar">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-brand-card p-6 pb-4">
          <div>
            <h2 id="case-study-title" className="text-xl font-semibold text-white">
              {project.name}
            </h2>
            <p className="mt-1 text-sm text-slate-400">{l(project.headline)}</p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label={t('caseStudy.close')}
            className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="space-y-8 p-6">
          {project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((metric, index) => (
                <div key={`${project.slug}-metric-${index}`} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-xs leading-tight text-slate-400">{l(metric.label)}</div>
                </div>
              ))}
            </div>
          )}

          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
              {t('caseStudy.problem')}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">{l(project.problem)}</p>
          </section>

          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
              {t('caseStudy.solution')}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">{l(project.solution)}</p>
          </section>

          {project.architecture.es && (
            <section>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
                {t('caseStudy.architecture')}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">{l(project.architecture)}</p>
            </section>
          )}

          {project.keyFeatures.length > 0 && (
            <section>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
                {t('caseStudy.features')}
              </h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <li key={`${project.slug}-feature-${index}`} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1 shrink-0 text-slate-500">›</span>
                    {l(feature)}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.recruiterNote && (
            <section className="rounded-xl border border-white/20 bg-white/5 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
                {t('caseStudy.forRecruiters')}
              </h3>
              <p className="text-sm italic leading-relaxed text-slate-200">{l(project.recruiterNote)}</p>
            </section>
          )}

          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
              {t('caseStudy.stack')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {project.screenshots.length > 0 && (
            <section>
              <div className="flex gap-3 overflow-x-auto pb-2 hidden-scrollbar">
                {project.screenshots.map((screenshot, index) => (
                  <img
                    key={`${project.slug}-shot-${index}`}
                    src={screenshot.src}
                    alt={l(screenshot.alt)}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="h-40 w-auto shrink-0 rounded-lg border border-white/10 object-cover"
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="sticky bottom-0 flex gap-3 border-t border-white/10 bg-brand-card p-6 pt-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
            >
              {t('caseStudy.viewLive')}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
            >
              {t('caseStudy.viewRepo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
