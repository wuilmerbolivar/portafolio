import { ArrowUpRight, BarChart, Github, Lightbulb, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { lazy, Suspense, useState } from 'react';
import { featuredProjects, repositoryProjects } from '../data/projects';

const BPPModal = lazy(() => import('./BPPModal'));

export default function Projects() {
  const { t, lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <section id="projects" className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col gap-3 mb-6">
          <h2 className="text-[0.875rem] text-brand-blue font-semibold uppercase tracking-widest">
            {t('projects.title')}
          </h2>
          <p className="text-[0.95rem] text-slate-400 leading-relaxed max-w-3xl">
            {lang === 'es'
              ? 'Selección de proyectos que muestran experiencia en operaciones TI, ciberseguridad, automatización, scripting y construcción pública.'
              : 'Selection of projects that showcase experience across IT operations, cybersecurity, automation, scripting, and public building.'}
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.slug} className={`relative overflow-hidden rounded-2xl border p-5 shadow-lg ${project.slug === 'bpp' ? 'border-brand-green/25 bg-linear-to-br from-brand-card to-brand-dark' : 'border-white/8 bg-linear-to-br from-white/6 to-white/3'}`}>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-brand-blue">
                  <Lightbulb size={14} aria-hidden="true" />
                  {project.status[lang]}
                </span>
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-slate-400">{project.category[lang]}</span>
              </div>
              <h3 className="text-[1.25rem] font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-[0.875rem] leading-[1.7] text-slate-400">{project.summary[lang]}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-[0.72rem] font-mono text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">{t('projects.impact')}</div>
                  <div className="text-[1.15rem] font-semibold text-brand-green">{project.impact}</div>
                </div>
                <div className="flex gap-3">
                  {project.slug === 'bpp' ? (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-lg border border-brand-green/20 bg-brand-green px-4 py-2 text-[0.875rem] font-medium text-brand-dark transition-colors hover:bg-brand-green/90"
                      aria-label={t('projects.bppDeepDiveButton')}
                    >
                      <BarChart size={16} aria-hidden="true" />
                      {t('projects.bppDeepDiveButton')}
                    </button>
                  ) : null}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-[0.875rem] font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {t('projects.openLive')}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-card rounded-2xl p-6 relative overflow-hidden shadow-lg border border-white/5">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-[0.75rem] text-slate-300 font-bold uppercase tracking-widest flex items-center gap-2 bg-white/5 w-fit px-3 py-1 rounded-full border border-white/10">
            <Terminal size={14} aria-hidden="true" /> {t('projects.repository')}
          </h2>
          <a href="https://github.com/wuilmerbolivar?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-brand-blue hover:text-white transition-colors" aria-label={t('projects.openRepo')}>
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {repositoryProjects.map((project) => (
            <a
              key={project.slug}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/3 p-5 hover:border-brand-blue/25 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-slate-300">
                  {project.category[lang]}
                </span>
                <ArrowUpRight size={15} className="text-slate-500" aria-hidden="true" />
              </div>
              <h3 className="text-[1rem] font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-[1.7] text-slate-400">{project.summary[lang]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-[0.68rem] font-mono text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-[0.78rem] font-medium text-brand-green">{project.impact}</div>
            </a>
          ))}
        </div>
      </section>

      {isModalOpen ? (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/55 backdrop-blur-sm">
              <div className="rounded-2xl border border-white/10 bg-brand-card px-5 py-4 text-sm text-slate-300 shadow-xl">
                {lang === 'es' ? 'Cargando modulo...' : 'Loading module...'}
              </div>
            </div>
          }
        >
          <BPPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Suspense>
      ) : null}
    </div>
  );
}
