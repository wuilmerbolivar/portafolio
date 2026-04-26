import { Terminal, Lightbulb, Github, BarChart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { lazy, Suspense, useState } from 'react';

const BPPModal = lazy(() => import('./BPPModal'));

export default function Projects() {
  const { t, lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <section id="projects" className="bg-linear-to-br from-brand-card to-brand-dark border-l-4 border-l-brand-green rounded-2xl p-6 relative overflow-hidden shadow-lg border-y border-r border-y-white/5 border-r-white/5 group">
        <div className="absolute -right-5 -bottom-5 text-[8rem] font-black opacity-5 font-mono pointer-events-none select-none text-white transition-transform group-hover:scale-105 duration-700">
          BPP
        </div>
        
        <div className="relative z-10 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6">
          <div className="max-w-[70%] xl:max-w-[60%]">
            <h2 className="text-[0.75rem] text-brand-blue font-bold uppercase tracking-widest mb-4 flex items-center gap-2 bg-brand-blue/10 w-fit px-3 py-1 rounded-full border border-brand-blue/20">
              <Lightbulb size={14} /> {t('projects.featured')}
            </h2>
            <h3 className="text-[1.5rem] font-bold text-white mb-3 leading-tight">
              {t('projects.title1')}
            </h3>
            <p className="text-[0.875rem] text-slate-400 leading-[1.6] mb-5">
              {t('projects.desc1')}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="font-mono bg-brand-blue/10 border border-brand-blue/30 text-brand-blue px-2 py-1 rounded text-[0.75rem]">React</span>
              <span className="font-mono bg-brand-blue/10 border border-brand-blue/30 text-brand-blue px-2 py-1 rounded text-[0.75rem]">Vite</span>
              <span className="font-mono bg-brand-blue/10 border border-brand-blue/30 text-brand-blue px-2 py-1 rounded text-[0.75rem]">Tailwind CSS</span>
              <span className="font-mono bg-brand-green/10 border border-brand-green/30 text-brand-green px-2 py-1 rounded text-[0.75rem]">Full-Stack ITSM</span>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-brand-dark bg-brand-green hover:bg-brand-green/90 transition-colors px-4 py-2 rounded-lg border border-brand-green/20"
              aria-label={t('projects.bppDeepDiveButton')}
            >
              <BarChart size={16} aria-hidden="true" />
              {t('projects.bppDeepDiveButton')}
            </button>
          </div>

          <div className="xl:text-right mt-2 xl:mt-0 flex flex-col justify-center bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm self-start xl:self-auto">
            <div className="text-[0.65rem] text-slate-400 uppercase tracking-widest mb-1">{t('projects.impactTitle1')}</div>
            <div className="text-[2.25rem] font-black text-brand-green leading-none">{t('projects.impactValue1')}</div>
            <div className="text-[0.75rem] text-slate-300 mt-2 font-medium">{t('projects.impactDesc1')}</div>
          </div>
        </div>
      </section>

      <section className="bg-brand-card rounded-2xl p-6 relative overflow-hidden shadow-lg border border-white/5 group mt-6">

        <div className="absolute -right-5 -bottom-5 text-[8rem] font-black opacity-3 font-mono pointer-events-none select-none text-white transition-transform group-hover:scale-105 duration-700">
          {'{}'}
        </div>

        <div className="relative z-10 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6">
          <div className="max-w-[70%] xl:max-w-[60%]">
            <h2 className="text-[0.75rem] text-slate-300 font-bold uppercase tracking-widest mb-4 flex items-center gap-2 bg-white/5 w-fit px-3 py-1 rounded-full border border-white/10">
              <Terminal size={14} aria-hidden="true" /> {t('projects.complementary')}
            </h2>
            <h3 className="text-[1.25rem] font-bold text-white mb-3 leading-tight">
              {t('projects.title2')}
            </h3>
            <p className="text-[0.875rem] text-slate-400 leading-[1.6] mb-5">
              {t('projects.desc2')}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-1 rounded text-[0.75rem]">PHP</span>
              <span className="font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-1 rounded text-[0.75rem]">JavaScript</span>
              <span className="font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-1 rounded text-[0.75rem]">Python</span>
              <span className="font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-1 rounded text-[0.75rem]">Bash</span>
            </div>

            <a href="https://github.com/wuilmerbolivar?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-brand-blue hover:text-white transition-colors bg-brand-blue/10 px-4 py-2 rounded-lg border border-brand-blue/20" aria-label={t('projects.viewGithub')}>
              <Github size={16} aria-hidden="true" />
              {t('projects.viewGithub')}
            </a>
          </div>

          <div className="xl:text-right mt-2 xl:mt-0 flex flex-col justify-center bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm self-start xl:self-auto">
            <div className="text-[0.65rem] text-slate-400 uppercase tracking-widest mb-1">{t('projects.impactTitle2')}</div>
            <div className="text-[2.25rem] font-black text-white leading-none">{t('projects.impactValue2')}</div>
            <div className="text-[0.75rem] text-slate-300 mt-2 font-medium">{t('projects.impactDesc2')}</div>
          </div>
        </div>
      </section>

      {isModalOpen ? (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/55 backdrop-blur-sm">
              <div className="rounded-2xl border border-white/10 bg-brand-card px-5 py-4 text-sm text-slate-300 shadow-xl">
                {lang === 'es' ? 'Cargando módulo...' : 'Loading module...'}
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
