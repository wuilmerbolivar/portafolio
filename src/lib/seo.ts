import type { Language } from '../types/content';
import { projectCaseStudies } from '../data/projects';
import { siteConfig } from '../data/site';

type SeoPayload = {
  title: string;
  description: string;
  keywords: string;
  imageAlt: string;
};

function getSeoPayload(lang: Language): SeoPayload {
  if (lang === 'es') {
    return {
      title: 'Wuilmer Bolívar | ITSM Senior, Ciberseguridad y Automatización',
      description: 'Portafolio de Wuilmer Bolívar. Especialista en ITSM, incident management, problem management, automatización, soporte senior y ciberseguridad aplicada.',
      keywords: 'Wuilmer Bolívar, ITSM, Incident Management, Problem Management, ciberseguridad, automatización, Bash, React, portfolio, reclutador, LinkedIn, SOC, continuidad operativa',
      imageAlt: 'Portafolio profesional de Wuilmer Bolívar con foco en ITSM, automatización y ciberseguridad',
    };
  }

  return {
    title: 'Wuilmer Bolívar | Senior ITSM, Cybersecurity, and Automation',
    description: 'Portfolio of Wuilmer Bolívar. Senior profile in ITSM, incident management, problem management, automation, advanced support, and applied cybersecurity.',
    keywords: 'Wuilmer Bolívar, ITSM, incident management, problem management, cybersecurity, automation, Bash, React, portfolio, recruiter, LinkedIn, SOC, business continuity',
    imageAlt: 'Professional portfolio of Wuilmer Bolívar focused on ITSM, automation, and cybersecurity',
  };
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, rel: string, href: string, hrefLang?: string) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  element.rel = rel;
  element.href = href;

  if (hrefLang) {
    element.hreflang = hrefLang;
  }
}

function upsertJsonLd(id: string, data: unknown) {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function applySeo(lang: Language) {
  const payload = getSeoPayload(lang);
  document.title = payload.title;

  upsertMeta('meta[name="description"]', { name: 'description', content: payload.description });
  upsertMeta('meta[name="keywords"]', { name: 'keywords', content: payload.keywords });
  upsertMeta('meta[name="author"]', { name: 'author', content: siteConfig.name });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: payload.title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: payload.description });
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Wuilmer Bolívar Portfolio' });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: siteConfig.canonicalUrl });
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: siteConfig.previewImage });
  upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: payload.imageAlt });
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'es' ? 'es_PE' : 'en_US' });
  upsertMeta('meta[property="og:locale:alternate"]', { property: 'og:locale:alternate', content: lang === 'es' ? 'en_US' : 'es_PE' });
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: payload.title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: payload.description });
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: siteConfig.previewImage });
  upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: payload.imageAlt });

  upsertLink('link[rel="canonical"]', 'canonical', siteConfig.canonicalUrl);
  upsertLink('link[rel="alternate"][hreflang="es"]', 'alternate', siteConfig.canonicalUrl, 'es');
  upsertLink('link[rel="alternate"][hreflang="en"]', 'alternate', siteConfig.canonicalUrl, 'en');
  upsertLink('link[rel="alternate"][hreflang="x-default"]', 'alternate', siteConfig.canonicalUrl, 'x-default');

  const allProjects = projectCaseStudies;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.canonicalUrl,
    image: siteConfig.previewImage,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: lang === 'es' ? 'Especialista Senior ITSM y Ciberseguridad' : 'Senior ITSM and Cybersecurity Specialist',
    knowsAbout: [
      'ITSM',
      'Incident Management',
      'Problem Management',
      'Cybersecurity',
      'Automation',
      'React',
      'Bash',
      'Docker',
    ],
    sameAs: [
      siteConfig.linkedin,
      siteConfig.github,
      siteConfig.securityGithub,
      siteConfig.cybersecuritySite,
      siteConfig.cybersecurityHub,
      siteConfig.newsletter,
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Instituto Universitario de Tecnología de los Llanos',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Stefanini Group',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Wuilmer Bolívar Portfolio',
    url: siteConfig.canonicalUrl,
    inLanguage: lang,
    description: payload.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: payload.title,
    url: siteConfig.canonicalUrl,
    inLanguage: lang,
    description: payload.description,
    hasPart: allProjects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.name,
      url: project.links.live || project.links.repo || siteConfig.canonicalUrl,
      description: project.headline[lang] || project.problem[lang] || project.headline.es,
    })),
  };

  upsertJsonLd('person-schema', personSchema);
  upsertJsonLd('website-schema', websiteSchema);
  upsertJsonLd('collection-schema', collectionSchema);
}
