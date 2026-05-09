import { BarChart3, Gauge, ShieldAlert, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { resultsData } from '../data/results';

const icons = [Gauge, BarChart3, ShieldAlert, Wrench];

export default function Results() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-3 mb-6">
        <h2 className="text-[0.875rem] text-brand-blue font-semibold uppercase tracking-widest">
          {t('results.title')}
        </h2>
        <p className="text-[0.95rem] text-slate-400 leading-relaxed max-w-3xl">
          {t('results.subtitle')}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resultsData.map((item, index) => {
          const Icon = icons[index] ?? BarChart3;

          return (
            <article key={item.label[lang]} className="rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/3 p-5">
              <Icon size={18} className="text-brand-blue mb-4" aria-hidden="true" />
              <div className="text-[0.72rem] uppercase tracking-[0.18em] text-slate-400 mb-2">
                {item.label[lang]}
              </div>
              <div className="text-[1.9rem] font-black text-white leading-none mb-3">
                {item.value}
              </div>
              <p className="text-[0.8rem] text-slate-400 leading-relaxed">
                {item.detail[lang]}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
