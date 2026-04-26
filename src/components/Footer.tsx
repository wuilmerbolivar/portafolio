import { useLanguage } from '../context/LanguageContext';
import { Github } from 'lucide-react';

export default function Footer() {
  const { lang } = useLanguage();
  
  return (
    <footer className="w-full py-8 mt-12 border-t border-white/5 flex flex-col items-center justify-center gap-2 relative z-10">
      <p className="text-[0.75rem] text-slate-400 text-center px-4 leading-relaxed">
        {lang === 'es' 
          ? 'El código fuente de este sitio web está disponible para su uso en ' 
          : 'The source code of this website is available for use on '}
        <a 
          href="https://github.com/wuilmerbolivar/portafolio" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-brand-blue hover:underline hover:text-brand-green transition-colors inline-flex items-center gap-1 ml-1"
        >
          <Github size={12} /> GitHub
        </a>.
      </p>
    </footer>
  );
}
