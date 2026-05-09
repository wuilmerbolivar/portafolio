import { useLanguage } from '../context/LanguageContext';
import { Github } from 'lucide-react';
import { siteConfig } from '../data/site';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-8 mt-12 border-t border-white/5 flex flex-col items-center justify-center gap-1.5 relative z-10">
      <p className="text-[0.75rem] text-slate-300 text-center px-4 leading-relaxed">
        {t('footer.sourcePrefix')}{' '}
        <a
          href={`${siteConfig.github}/portafolio`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-blue font-medium underline decoration-current underline-offset-3 hover:text-brand-green transition-colors inline-flex items-center gap-1 ml-1"
        >
          <Github size={12} /> GitHub
        </a>
      </p>
      <p className="text-[0.72rem] text-slate-400 text-center px-4 leading-relaxed">
        {t('footer.license')}
      </p>
    </footer>
  );
}
