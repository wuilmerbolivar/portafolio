import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { authorityLinks } from '../data/profile';

export default function PublicPresence() {
  const { t, lang } = useLanguage();

  return (
    <section id="presence" className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-3 mb-6">
        <h2 className="text-[0.875rem] text-brand-blue font-semibold uppercase tracking-widest">
          {t('credibility.title')}
        </h2>
        <p className="text-[0.95rem] text-slate-400 leading-relaxed max-w-3xl">
          {t('credibility.subtitle')}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {authorityLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/3 p-5 hover:border-brand-blue/25 hover:bg-white/[0.06] transition-colors"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="inline-flex rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-brand-blue">
                {link.tag[lang]}
              </span>
              <ArrowUpRight size={16} className="text-slate-500 group-hover:text-white transition-colors" aria-hidden="true" />
            </div>
            <h3 className="text-[1rem] font-semibold text-white">{link.title[lang]}</h3>
            <p className="mt-2 text-[0.84rem] text-slate-400 leading-relaxed">{link.description[lang]}</p>
            <span className="mt-4 inline-flex text-[0.8rem] font-medium text-brand-green">{link.cta[lang]}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
