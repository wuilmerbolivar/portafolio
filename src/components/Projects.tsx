import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTier1Projects, getTier2Projects } from '../data/projects';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { SecondaryProjectCard } from './SecondaryProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import type { ProjectCaseStudy } from '../types/content';

export default function Projects() {
  const { t, lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const tier1 = getTier1Projects();
  const tier2 = getTier2Projects();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg">
      <div className="mb-16">
        <h2 id="projects-heading" className="mb-3 text-3xl font-bold text-white md:text-[2rem]">
          {t('projects.featuredTitle')}
        </h2>
        <p className="mb-8 max-w-3xl text-[0.95rem] leading-relaxed text-slate-300">
          {lang === 'es'
            ? 'Casos con impacto operativo real: incidentes críticos, automatización y herramientas construidas para producción.'
            : 'Cases with real operational impact: critical incidents, automation, and production-ready tools.'}
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tier1.map((project) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              lang={lang}
              onOpenModal={setSelectedProject}
              t={t}
            />
          ))}
        </div>
      </div>

      <hr className="mb-16 border-white/10" />

      <div>
        <h2 className="mb-6 text-xl font-semibold text-slate-200">{t('projects.secondaryTitle')}</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tier2.map((project) => (
            <SecondaryProjectCard
              key={project.slug}
              project={project}
              lang={lang}
              t={t}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        t={t}
      />
    </section>
  );
}
