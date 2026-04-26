import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Quote } from 'lucide-react';

type Reference = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  profileUrl: string;
  avatarUrl: string;
  accent: 'blue' | 'green';
};

function ReferenceCard({ reference, readMoreLabel, viewProfileLabel }: { reference: Reference; readMoreLabel: string; viewProfileLabel: string }) {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const accentClass = reference.accent === 'blue' ? 'text-brand-blue' : 'text-brand-green';
  const linkClass = reference.accent === 'blue' ? 'text-brand-blue hover:text-brand-green' : 'text-brand-green hover:text-brand-blue';

  return (
    <article className="bg-linear-to-br from-white/6 to-white/3 border border-white/10 rounded-xl p-5 relative">
      <Quote size={20} className={`${reference.accent === 'blue' ? 'text-brand-blue/50' : 'text-brand-green/50'} absolute top-4 right-4`} />
      <p className="text-[0.875rem] text-slate-300 italic mb-4 leading-relaxed pr-8">
        "{reference.quote}"
        <a href="https://www.linkedin.com/in/wuilmerbolivar/details/recommendations/" target="_blank" rel="noopener noreferrer" className={`${linkClass} ml-2 text-[0.75rem] inline-block font-medium`}>
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
            <div className="text-[0.85rem] font-bold text-white leading-tight truncate">{reference.name}</div>
            <div className={`text-[0.7rem] font-mono mt-0.5 truncate ${accentClass}`}>{reference.role}</div>
          </div>
        </div>
        <a
          href={reference.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.75rem] text-slate-400 hover:text-white transition-colors shrink-0"
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
  const { t } = useLanguage();
  const references: Reference[] = [
    {
      quote: t('testimonials.quote1'),
      name: t('testimonials.name1'),
      role: t('testimonials.role1'),
      initials: t('testimonials.initials1'),
      profileUrl: 'https://www.linkedin.com/in/maalfer1/',
      avatarUrl: 'https://unavatar.io/linkedin/user:maalfer1?fallback=false',
      accent: 'blue',
    },
    {
      quote: t('testimonials.quote2'),
      name: t('testimonials.name2'),
      role: t('testimonials.role2'),
      initials: t('testimonials.initials2'),
      profileUrl: 'https://www.linkedin.com/in/chuquimbalquic/',
      avatarUrl: 'https://unavatar.io/linkedin/user:chuquimbalquic?fallback=false',
      accent: 'green',
    },
  ];

  return (
    <section id="testimonials" className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-3 pointer-events-none">
        <Quote size={120} />
      </div>
      
      <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
        <h2 className="text-[0.875rem] text-brand-blue font-semibold uppercase tracking-widest">
          {t('testimonials.title')}
        </h2>
        <a 
          href="https://www.linkedin.com/in/wuilmerbolivar/details/recommendations/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[0.75rem] text-slate-400 hover:text-white transition-colors"
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
          />
        ))}
      </div>
    </section>
  );
}
