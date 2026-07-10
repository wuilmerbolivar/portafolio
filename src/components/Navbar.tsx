import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type NavbarProps = {
  route?: 'home' | 'services' | 'contact';
};

export default function Navbar({ route = 'home' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks =
    route === 'home'
      ? [
          { name: t('nav.about'), href: '#about' },
          { name: t('nav.credibility'), href: '#presence' },
          { name: t('nav.projects'), href: '#projects' },
          { name: t('nav.tech'), href: '#tech-stack' },
          { name: t('nav.experience'), href: '#experience' },
          { name: t('nav.services'), href: '/servicios/', route: 'services' },
          { name: t('nav.contact'), href: '/contacto/', route: 'contact' },
        ]
      : [
          { name: t('nav.home'), href: '/', route: 'home' },
          { name: t('nav.services'), href: '/servicios/', route: 'services' },
          { name: t('nav.contact'), href: '/contacto/', route: 'contact' },
        ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-360 mx-auto px-4 md:px-6 lg:px-8">
        <div className={`mt-2 flex h-16 items-center justify-between rounded-2xl border px-4 transition-colors ${isScrolled || isMobileMenuOpen ? 'border-white/10 bg-brand-dark/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(5,11,22,0.35)]' : 'border-transparent bg-transparent'}`}>
          <a href={route === 'home' ? '#hero' : '/'} className="font-bold text-white tracking-[0.28em] text-[1.05rem]">
            W.B
          </a>

          <nav aria-label="Principal" className="hidden lg:flex gap-1 bg-white/5 backdrop-blur-md px-3 py-2 rounded-full border border-white/8 shadow-sm xl:gap-2">
            {navLinks.map((link) => {
              const isActive = link.route === route;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-full px-3 py-1.5 text-[0.76rem] font-medium uppercase tracking-[0.16em] transition-colors xl:px-4 ${
                    isActive
                      ? 'bg-brand-green/12 text-brand-green ring-1 ring-brand-green/25'
                      : 'text-slate-300 hover:bg-white/6 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <button
            className="lg:hidden text-slate-300 hover:text-white bg-white/5 backdrop-blur-md p-2 rounded-xl border border-white/8 shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-20 left-4 right-4 md:left-6 md:right-6 bg-brand-card/95 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={link.route === route ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[0.85rem] uppercase tracking-widest font-medium transition-colors py-4 px-6 border-b border-white/5 last:border-b-0 ${
                    link.route === route ? 'bg-brand-green/10 text-brand-green' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
