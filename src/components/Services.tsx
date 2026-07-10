import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Code2,
  CreditCard,
  Globe2,
  Headphones,
  RefreshCw,
  ServerCog,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicePaymentFrequencies, webServiceFeatures, webServiceSteps } from '../data/services';
import { siteConfig } from '../data/site';

const featureIcons = [Code2, ServerCog, Headphones, Wrench, CalendarClock, CheckCircle2];

export default function Services() {
  const { t, lang } = useLanguage();
  const whatsappHref = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(t('services.whatsappText'))}`;

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-lg overflow-hidden relative">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-brand-green/10 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-7 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/10 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand-green">
              <Sparkles size={14} aria-hidden="true" />
              {t('services.kicker')}
            </span>
            <h2 id="services-heading" className="text-[1.55rem] font-bold leading-tight text-white md:text-[2rem]">
              {t('services.title')}
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-300">
              {t('services.subtitle')}
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-[0.92rem] font-bold text-brand-dark transition-all hover:-translate-y-0.5 hover:bg-[#49e1a7] sm:w-auto"
          >
            {t('services.primaryCta')}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.4fr)]">
          <div className="rounded-2xl border border-brand-green/25 bg-linear-to-br from-brand-green/14 via-white/5 to-brand-blue/8 p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
                {t('services.planLabel')}
              </span>
              <Globe2 size={18} className="text-brand-green" aria-hidden="true" />
            </div>

            <div className="mb-5">
              <div className="text-[0.72rem] uppercase tracking-[0.2em] text-slate-400">
                {t('services.fromLabel')}
              </div>
              <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-1 text-white">
                <span className="text-[3.2rem] font-black leading-none">1</span>
                <span className="pb-1 text-[1.3rem] font-bold">USD</span>
                <span className="pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                  {t('services.dailyMinimum')}
                </span>
              </div>
              <p className="mt-3 text-[0.86rem] leading-relaxed text-slate-300">
                {t('services.pricingNote')}
              </p>
            </div>

            <div className="grid gap-2">
              {servicePaymentFrequencies.map((frequency) => (
                <div key={frequency.id} className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-black/18 px-3 py-2.5 text-[0.84rem] text-slate-200">
                  <span className="inline-flex items-center gap-2">
                    <CreditCard size={15} className="text-brand-green" aria-hidden="true" />
                    {frequency.label[lang]}
                  </span>
                  <CheckCircle2 size={15} className="text-brand-green" aria-hidden="true" />
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/8 p-3 text-[0.78rem] leading-relaxed text-amber-100">
              {t('services.advancedNote')}
            </p>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {webServiceFeatures.map((feature, index) => {
                const Icon = featureIcons[index] ?? CheckCircle2;

                return (
                  <article key={feature.id} className="rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/3 p-4">
                    <Icon size={18} className="mb-3 text-brand-blue" aria-hidden="true" />
                    <h3 className="text-[0.9rem] font-semibold text-white">{feature.title[lang]}</h3>
                    <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-400">{feature.description[lang]}</p>
                  </article>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {t('services.processTitle')}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.84rem] leading-relaxed text-slate-400">
                    {t('services.processSubtitle')}
                  </p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand-green">
                  {t('services.demoBadge')}
                </span>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
                {webServiceSteps.map((step, index) => (
                  <article key={step.id} className="flex min-h-39 gap-3 rounded-xl border border-white/8 bg-black/14 p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-green/30 bg-brand-green/10 text-[0.86rem] font-bold text-brand-green">
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[0.9rem] font-semibold leading-snug text-white">{step.title[lang]}</h4>
                      <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-400">{step.description[lang]}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-brand-blue/20 bg-brand-blue/8 p-4 text-[0.86rem] leading-relaxed text-slate-300 md:flex-row md:items-center md:justify-between">
              <span className="inline-flex items-start gap-2">
                <RefreshCw size={17} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" />
                {t('services.maintenanceNote')}
              </span>
              <a href="/contacto" className="inline-flex shrink-0 items-center gap-2 text-[0.82rem] font-semibold text-brand-green hover:text-white">
                {t('services.contactCta')}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
