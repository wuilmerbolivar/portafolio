import Navbar from './components/Navbar';
import { lazy, Suspense, type ReactNode } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import PublicPresence from './components/PublicPresence';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Seo from './components/Seo';
import { useLanguage } from './context/LanguageContext';

const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));

type AppRoute = 'home' | 'services' | 'contact';

function getCurrentRoute(): AppRoute {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/servicios' || pathname === '/services') {
    return 'services';
  }

  if (pathname === '/contacto' || pathname === '/contact') {
    return 'contact';
  }

  return 'home';
}

function HomePage() {
  return (
    <main className="flex-1 px-4 pb-10 pt-20 md:px-6 lg:grid lg:grid-cols-[340px_1fr] lg:gap-8 lg:px-8 lg:pt-24 max-w-360 mx-auto w-full relative z-10 items-start">
      <div className="relative z-10 lg:sticky lg:top-24">
        <Hero />
      </div>

      <div className="flex flex-col gap-6 mt-6 lg:mt-0 relative z-10 pb-12">
        <About />
        <Results />
        <PublicPresence />
        <Projects />
        <TechStack />
        <Experience />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}

function StandalonePage({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 px-4 pb-10 pt-20 md:px-6 lg:px-8 lg:pt-24 max-w-360 mx-auto w-full relative z-10">
      <div className="mx-auto flex max-w-305 flex-col gap-6 pb-12">
        {children}
        <Footer />
      </div>
    </main>
  );
}

function RouteLoading() {
  const { t } = useLanguage();

  return (
    <div role="status" aria-live="polite" className="rounded-2xl border border-white/8 bg-brand-card p-6 shadow-lg">
      <div className="h-3 w-32 rounded-full bg-white/8" />
      <div className="mt-5 h-10 rounded-2xl bg-white/6" />
      <div className="mt-3 h-10 max-w-2xl rounded-2xl bg-white/6" />
      <span className="sr-only">{t('common.loading')}</span>
    </div>
  );
}

export default function App() {
  const route = getCurrentRoute();

  return (
    <div className="bg-brand-dark text-slate-50 font-sans min-h-screen selection:bg-brand-blue/30 selection:text-white flex flex-col relative overflow-x-clip">
      <Seo route={route} />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_30%),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]"
        style={{ backgroundSize: '100% 100%, 24px 24px, 24px 24px' }}
      />
      <div className="relative z-50">
        <Navbar route={route} />
      </div>

      {route === 'home' ? <HomePage /> : null}
      {route === 'services' ? (
        <StandalonePage>
          <Suspense fallback={<RouteLoading />}>
            <Services />
          </Suspense>
        </StandalonePage>
      ) : null}
      {route === 'contact' ? (
        <StandalonePage>
          <Suspense fallback={<RouteLoading />}>
            <Contact />
          </Suspense>
        </StandalonePage>
      ) : null}
    </div>
  );
}
