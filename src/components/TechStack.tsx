import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { techStack } from '../data';
import { useLanguage } from '../context/LanguageContext';

const GitHubInsights = lazy(() => import('./GitHubInsights'));

const certs = [
  {
    name: 'eJPTv2',
    issuer: 'eLearnSecurity',
    url: 'https://certs.ine.com/a8b76c4c-edec-44fc-a43c-ed0f25c8c152#acc.2SjFMl0q',
    short: 'eJPT',
    borderColor: 'border-red-400',
    bgColor: 'bg-red-950/60',
    textColor: 'text-red-200',
    containerBorder: 'border-red-400/30'
  },
  {
    name: 'CEH Practical',
    issuer: 'EC-Council',
    url: 'https://www.credly.com/badges/04eefd8d-564f-44fc-add5-d1d8c0012aab/linked_in_profile',
    short: 'CEHP',
    borderColor: 'border-amber-400',
    bgColor: 'bg-amber-950/60',
    textColor: 'text-amber-200',
    containerBorder: 'border-amber-400/30'
  },
  {
    name: 'RWPC',
    issuer: 'CertiProf',
    url: 'https://www.linkedin.com/in/wuilmerbolivar/details/certifications/848021994/multiple-media-viewer?profileId=ACoAACOnd40BdFpPag1L5PQ9akHnU-BF5sBdBS8&treasuryMediaId=1714539975054&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAK1auev5QfiJqhunMVbvUg%3D%3D',
    short: 'RWPC',
    borderColor: 'border-sky-400',
    bgColor: 'bg-sky-950/60',
    textColor: 'text-sky-200',
    containerBorder: 'border-sky-400/30'
  },
  {
    name: 'Cyber Security',
    issuer: 'TryHackMe',
    url: 'https://www.credly.com/badges/f8ae3d90-2ada-4b77-bfce-8113ce5893c8/linked_in_profile',
    short: 'THM',
    borderColor: 'border-emerald-400',
    bgColor: 'bg-emerald-950/60',
    textColor: 'text-emerald-200',
    containerBorder: 'border-emerald-400/30'
  },
  {
    name: 'Prep. eJPTv2',
    issuer: 'Fórmula Hacking',
    url: 'https://formulahacking.es/wp-content/uploads/learn-press-cert/07efc7b6c53a49e936df8b93ef2c784c.png',
    short: 'Prep',
    borderColor: 'border-fuchsia-400',
    bgColor: 'bg-fuchsia-950/60',
    textColor: 'text-fuchsia-200',
    containerBorder: 'border-fuchsia-400/30'
  }
];

export default function TechStack() {
  const { t } = useLanguage();
  const githubInsightsRef = useRef<HTMLDivElement | null>(null);
  const [shouldRenderGitHubInsights, setShouldRenderGitHubInsights] = useState(false);

  useEffect(() => {
    if (shouldRenderGitHubInsights) {
      return;
    }

    const node = githubInsightsRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShouldRenderGitHubInsights(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRenderGitHubInsights(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRenderGitHubInsights]);

  return (
    <section id="tech-stack" className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg">
      <h2 className="text-[0.875rem] text-brand-blue font-semibold uppercase tracking-widest mb-4">
        {t('tech.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {techStack.map((category) => (
          <div key={category.category} className="p-4 bg-linear-to-br from-white/6 to-white/3 rounded-xl border border-white/6 hover:border-brand-blue/20 hover:bg-white/8 transition-colors">
            <div className="font-mono text-[0.75rem] text-brand-green mb-2 uppercase font-semibold">
              {category.category}
            </div>
            <div className="text-[0.875rem] text-slate-400 leading-[1.6]">
              {category.skills.map((skill) => (
                <div key={skill} className="flex gap-2 mb-1 last:mb-0">
                  <span className="text-brand-green/70 text-[0.65rem] mt-1">▸</span>
                  <span className="leading-snug">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div ref={githubInsightsRef}>
        {shouldRenderGitHubInsights ? (
          <Suspense
            fallback={
              <div className="pt-6 border-t border-white/10">
                <div aria-live="polite" className="rounded-2xl border border-white/8 bg-white/3 p-5">
                  <div className="h-3 w-32 rounded-full bg-white/8" />
                  <div className="mt-4 h-10 rounded-2xl bg-white/6" />
                  <div className="mt-3 h-10 rounded-2xl bg-white/6" />
                </div>
              </div>
            }
          >
            <GitHubInsights />
          </Suspense>
        ) : (
          <div className="pt-6 border-t border-white/10" aria-hidden="true">
            <div className="rounded-2xl border border-white/8 bg-white/3 p-5">
              <div className="h-3 w-32 rounded-full bg-white/8" />
              <div className="mt-4 h-10 rounded-2xl bg-white/6" />
              <div className="mt-3 h-10 rounded-2xl bg-white/6" />
            </div>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h3 className="text-[0.875rem] text-slate-300 font-semibold uppercase tracking-widest">
            {t('tech.certs')}
          </h3>
          <a
            href="https://drive.google.com/drive/folders/18unaEbNQLUib7V3-E1SY72NRx6iN-iFF?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.75rem] text-brand-blue hover:text-white transition-colors"
            aria-label={`${t('tech.viewAll')} certificaciones`}
          >
            {t('tech.viewAll')}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
        
        <div className="flex flex-wrap gap-4 pb-2">
          {certs.map((cert) => (
            <a 
              key={cert.name}
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#0a0a0a] border ${cert.containerBorder} px-4 py-3 rounded-xl flex-1 min-w-37.5 sm:min-w-50 hover:bg-white/5 transition-colors`}
              title={`Ver certificado ${cert.name}`}
            >
              <div className={`w-12 h-12 rounded-full ${cert.bgColor} border ${cert.borderColor} flex flex-col items-center justify-center shrink-0`}>
                <span className={`font-bold ${cert.textColor} text-[10px] sm:text-xs tracking-tight`}>{cert.short}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[0.85rem] font-bold text-white leading-tight truncate">{cert.name}</div>
                <div className="text-[0.65rem] text-slate-400 font-mono tracking-wider truncate mt-0.5">{cert.issuer}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
