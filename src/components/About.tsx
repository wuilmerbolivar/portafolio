import { BarChart3, FileText, Settings2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { valueOffers } from '../data/profile';

const icons = [Settings2, BarChart3, FileText, ShieldCheck];

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="bg-linear-to-br from-brand-card via-brand-card to-brand-panel border border-white/8 rounded-[1.75rem] p-6 shadow-[0_24px_60px_rgba(5,11,22,0.24)]">
      <h2 className="sr-only">{t('nav.about')}</h2>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(300px,1fr)] xl:items-start">
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

        <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
          <h3 className="text-[0.8rem] uppercase tracking-[0.18em] text-slate-300 font-semibold mb-4">
            {t('about.valueTitle')}
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {valueOffers.map((item, index) => {
              const Icon = icons[index] ?? Settings2;

              return (
                <article key={item.title[lang]} className="rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/3 p-4">
                  <Icon size={18} className="text-brand-blue mb-3" aria-hidden="true" />
                  <h4 className="text-[0.88rem] font-semibold text-white">{item.title[lang]}</h4>
                  <p className="text-[0.77rem] text-slate-400 leading-relaxed mt-2">{item.description[lang]}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
