import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import PublicPresence from './components/PublicPresence';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Seo from './components/Seo';

export default function App() {
  return (
    <div className="bg-brand-dark text-slate-50 font-sans min-h-screen selection:bg-brand-blue/30 selection:text-white flex flex-col relative overflow-x-clip">
      <Seo />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_30%),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]"
        style={{ backgroundSize: '100% 100%, 24px 24px, 24px 24px' }}
      />
      <div className="relative z-50">
        <Navbar />
      </div>
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
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
