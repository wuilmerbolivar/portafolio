import { Target, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-linear-to-br from-brand-card via-brand-card to-brand-panel border border-white/8 rounded-[1.75rem] p-6 shadow-[0_24px_60px_rgba(5,11,22,0.24)]">
      <h2 className="sr-only">{t('nav.about')}</h2>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.85fr)] xl:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-[0.88rem] font-semibold text-brand-blue md:text-[0.94rem]">
            {t('about.greeting')}
          </div>
          <p className="text-[1.05rem] md:text-[1.15rem] text-white leading-[1.7] max-w-4xl">
            {t('about.lead')}
          </p>

          <p className="text-[0.92rem] text-slate-400 leading-[1.8] max-w-4xl">
            {t('about.bridgePrefix')}
            <strong className="text-white font-semibold">{t('about.bridgeHighlight')}</strong>
            {t('about.bridgeSuffix')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/8 bg-white/3 p-4 min-h-28">
            <div className="text-[0.72rem] text-slate-400 uppercase tracking-[0.18em] mb-3">{t('about.years')}</div>
            <div className="text-[1.8rem] font-bold text-brand-green leading-none">10+</div>
          </div>

          <div className="rounded-2xl border border-brand-blue/18 bg-brand-blue/8 p-4 min-h-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-brand-blue/10 to-transparent" />
            <div className="relative">
              <div className="text-[0.72rem] text-brand-blue/80 uppercase tracking-[0.18em] mb-3">{t('about.efficiency')}</div>
              <div className="text-[1.8rem] font-bold text-brand-blue leading-none">+25%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mt-6 pt-6 border-t border-white/8">
        <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
          <div className="flex gap-3 items-start">
            <div className="text-brand-blue mt-0.5 shrink-0"><Target size={18} /></div>
            <div>
              <h3 className="text-[0.875rem] font-semibold text-white">{t('about.vision')}</h3>
              <p className="text-[0.75rem] text-slate-400 leading-tight mt-1">{t('about.visionDesc')}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
          <div className="flex gap-3 items-start">
            <div className="text-emerald-500 mt-0.5 shrink-0"><Zap size={18} /></div>
            <div>
              <h3 className="text-[0.875rem] font-semibold text-white">{t('about.auto')}</h3>
              <p className="text-[0.75rem] text-slate-400 leading-tight mt-1">{t('about.autoDesc')}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
          <div className="flex gap-3 items-start">
            <div className="text-red-400 mt-0.5 shrink-0"><ShieldCheck size={18} /></div>
            <div>
              <h3 className="text-[0.875rem] font-semibold text-white">{t('about.security')}</h3>
              <p className="text-[0.75rem] text-slate-400 leading-tight mt-1">{t('about.securityDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
