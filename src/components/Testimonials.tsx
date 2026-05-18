import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Quote } from 'lucide-react';
import { references } from '../data/references';
import { siteConfig } from '../data/site';
import type { Reference } from '../types/content';

function ReferenceCard({ reference, readMoreLabel, viewProfileLabel, lang }: { reference: Reference; readMoreLabel: string; viewProfileLabel: string; lang: 'es' | 'en' }) {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const accentClass = reference.accent === 'blue' ? 'text-brand-blue' : 'text-brand-green';
  const linkClass = reference.accent === 'blue' ? 'text-brand-blue hover:text-brand-green' : 'text-brand-green hover:text-brand-blue';

  return (
    <article className="bg-linear-to-br from-white/6 to-white/3 border border-white/10 rounded-xl p-5 relative">
      <Quote size={20} className={`${reference.accent === 'blue' ? 'text-brand-blue/50' : 'text-brand-green/50'} absolute top-4 right-4`} />
      <p className="mb-4 pr-8 text-[0.96rem] leading-relaxed text-slate-200 italic">
        "{reference.quote[lang]}"
        <a href={siteConfig.linkedinRecommendations} target="_blank" rel="noopener noreferrer" className={`${linkClass} ml-2 inline-block text-[0.82rem] font-medium`}>
          {readMoreLabel}
        </a>
      </p>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex shrink-0 items-center justify-center overflow-hidden">
            {!avatarFailed ? (
              <img
                src={reference.avatarUrl}
                alt={`Foto de ${reference.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setAvatarFailed(true)}
              />
            ) : (
              <span className="font-bold text-slate-500">{reference.initials}</span>
            )}
          </div>
          <div className="min-w-0">
            <div className="truncate text-[0.95rem] font-bold leading-tight text-white">{reference.name}</div>
            <div className={`mt-0.5 truncate font-mono text-[0.8rem] ${accentClass}`}>{reference.role[lang]}</div>
          </div>
        </div>
        <a
          href={reference.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-[0.82rem] text-slate-300 transition-colors hover:text-white"
          aria-label={`${viewProfileLabel}: ${reference.name}`}
        >
          {viewProfileLabel}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section id="testimonials" className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-3 pointer-events-none">
        <Quote size={120} />
      </div>

      <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
        <h2 className="text-[1rem] font-semibold uppercase tracking-widest text-brand-blue">
          {t('testimonials.title')}
        </h2>
        <a
          href={siteConfig.linkedinRecommendations}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.84rem] text-slate-300 transition-colors hover:text-white"
        >
          {t('testimonials.viewLinkedIn')}
        </a>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        {references.map((reference) => (
          <ReferenceCard
            key={reference.name}
            reference={reference}
            readMoreLabel={t('testimonials.readMore')}
            viewProfileLabel={t('testimonials.viewProfile')}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}
