import { experienceDataES, experienceDataEN } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t, lang } = useLanguage();
  const experienceData = lang === 'es' ? experienceDataES : experienceDataEN;

  return (
    <section id="experience" className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg">
      <h2 className="text-[0.875rem] text-brand-blue font-semibold uppercase tracking-widest mb-4">
        {t('experience.title')}
      </h2>

      <div className="flex flex-col gap-6">
        {experienceData.map((exp) => (
          <div key={exp.id} className="pl-6 py-2 border-l-2 border-slate-700 hover:border-brand-blue relative transition-colors group">
            <div className="absolute -left-1.25 top-4 w-2 h-2 bg-slate-600 group-hover:bg-brand-blue rounded-full transition-colors"></div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 sm:gap-4 mb-1">
              <span className="font-semibold text-white">
                {exp.company.replace('Stefanini Group – Proyecto ', '').replace('Stefanini Group – ', '').replace(' Project', '')}
              </span>
              <span className="text-[0.75rem] text-slate-400 whitespace-nowrap">{exp.period}</span>
            </div>
            <div className="text-[0.85rem] text-slate-300 mb-2 font-medium">
              {exp.role.split('→ ').pop() || exp.role}
            </div>
            <ul className="text-[0.8125rem] text-slate-400 space-y-1">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-brand-green/70">▸</span> 
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/10">
        <h2 className="text-[0.875rem] text-slate-300 font-semibold uppercase tracking-widest mb-6">
          {t('experience.education')}
        </h2>
        <div className="pl-6 py-2 border-l-2 border-brand-green/50 relative group">
          <div className="absolute -left-1.25 top-4 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 sm:gap-4 mb-2">
            <span className="font-semibold text-white">
              Instituto Universitario de Tecnología de los Llanos (IUTLL)
            </span>
            <span className="text-[0.75rem] text-slate-400 font-mono">
              2009 - 2014
            </span>
          </div>
          <div className="text-[0.875rem] text-brand-green/90 mb-2 font-medium">
            {t('experience.degree')}
          </div>
        </div>
      </div>
    </section>
  );
}
