import { motion } from 'motion/react';
import { ArrowUpRight, Download, Globe, Github, Linkedin, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { heroFocus } from '../data/profile';
import { siteConfig } from '../data/site';
import ProfileAvatar from './ProfileAvatar';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Hero() {
  const { t, lang, setLang } = useLanguage();
  const cvHref = lang === 'es' ? siteConfig.cvEs : siteConfig.cvEn;
  const cvFileName = lang === 'es' ? 'CV-Wuilmer-Bolivar-ES.pdf' : 'CV-Wuilmer-Bolivar-EN.pdf';

  return (
    <section id="hero" className="bg-linear-to-br from-brand-card via-brand-card to-brand-panel border border-white/8 rounded-[1.75rem] p-6 shadow-[0_24px_60px_rgba(5,11,22,0.35)] text-center relative flex flex-col items-center overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-brand-blue/12 to-transparent" />

      <button
        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        className="absolute top-4 right-4 flex items-center gap-2 text-[0.75rem] text-slate-400 hover:text-white transition-colors bg-white/6 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/8"
        aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <Globe size={14} aria-hidden="true" />
        {lang === 'es' ? 'EN' : 'ES'}
      </button>

      <div className="relative mb-6 h-28 w-28 shrink-0">
        <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-brand-blue/20 ring-1 ring-white/10">
          <ProfileAvatar
            alt="Fotografía de Wuilmer Bolívar"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sizes="110px"
          />
        </div>
        <div className="absolute bottom-2 right-2 group cursor-help z-20">
          <div className="relative w-4 h-4 bg-brand-green border-2 border-brand-card rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]">
            <div className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-75" />
          </div>
          <div className="absolute mt-2 md:mt-0 md:mb-2 top-full md:top-auto md:bottom-full left-1/2 -translate-x-1/2 px-2 py-1 bg-brand-card border border-brand-green/30 text-brand-green text-[0.65rem] font-bold uppercase tracking-wider rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            {t('hero.available')}
          </div>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-3 text-[1.8rem] font-bold text-white md:text-[2.1rem]"
      >
        Wuilmer Bolívar
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-6 text-[0.95rem] font-semibold uppercase tracking-widest text-brand-blue md:text-[1rem]"
      >
        {t('hero.role')}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.18 }}
        className="mb-4 text-balance text-[1.1rem] font-semibold leading-tight text-white md:text-[1.35rem]"
      >
        {t('hero.hook')}
      </motion.p>

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1.5 text-[0.75rem] font-medium text-brand-green">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-green" />
        </span>
        {t('hero.availabilityQuick')}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-6 text-[0.95rem] leading-relaxed text-slate-300"
      >
        {t('hero.tagline')}
      </motion.p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {heroFocus[lang].map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-slate-300">
            {item}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-col gap-4 w-full"
      >
        <a
          href={cvHref}
          download={cvFileName}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 text-[0.98rem] font-bold text-brand-dark ring-2 ring-brand-green/40 transition-all hover:-translate-y-0.5 hover:bg-[#49e1a7] hover:shadow-[0_16px_36px_rgba(52,211,153,0.45)]"
        >
          <Download size={19} />
          {t('hero.downloadCv')}
        </a>

        <div className="grid gap-3">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.875rem] font-medium text-white hover:border-brand-blue/30 hover:bg-white/8 transition-colors"
          >
            <Linkedin size={18} aria-hidden="true" />
            {t('hero.primaryCta')}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.cybersecuritySite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-green/25 bg-brand-green/10 px-4 py-3 text-[0.875rem] font-medium text-brand-green hover:bg-brand-green/15 transition-colors"
          >
            <Shield size={18} aria-hidden="true" />
            {t('hero.secondaryCta')}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="flex justify-center gap-3">
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-colors border border-white/8" title="LinkedIn" aria-label="Perfil de LinkedIn de Wuilmer Bolívar">
            <Linkedin size={20} aria-hidden="true" />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-white/8" title="GitHub" aria-label="Perfil de GitHub de Wuilmer Bolívar">
            <Github size={20} aria-hidden="true" />
          </a>
          <a href={`https://wa.me/${siteConfig.whatsappPhone}`} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-[#25D366] transition-colors border border-white/8" title="WhatsApp" aria-label="Enviar mensaje de WhatsApp a Wuilmer Bolívar">
            <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
