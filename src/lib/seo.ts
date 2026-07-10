import type { Language } from '../types/content';
import { projectCaseStudies } from '../data/projects';
import { siteConfig } from '../data/site';

type SeoPayload = {
  title: string;
  description: string;
  keywords: string;
  imageAlt: string;
};

export type SeoRoute = 'home' | 'services' | 'contact';

function getPageUrl(route: SeoRoute) {
  const baseUrl = siteConfig.canonicalUrl.replace(/\/$/, '');

  if (route === 'services') {
    return `${baseUrl}/servicios/`;
  }

  if (route === 'contact') {
    return `${baseUrl}/contacto/`;
  }

  return `${baseUrl}/`;
}

function getSeoPayload(lang: Language, route: SeoRoute): SeoPayload {
  if (route === 'services') {
    if (lang === 'es') {
      return {
        title: 'Servicios web administrados | Wuilmer Bolívar',
        description: 'Desarrollo de sitios web administrados con demo previa, hosting, dominio, soporte técnico, cambios menores y pago flexible mientras el sitio esté activo.',
        keywords: 'desarrollo web, sitios web administrados, hosting incluido, dominio incluido, soporte web, Wuilmer Bolívar, paginas web, demo web',
        imageAlt: 'Servicios web administrados de Wuilmer Bolívar con hosting, dominio y soporte',
      };
    }

    return {
      title: 'Managed Web Services | Wuilmer Bolívar',
      description: 'Managed website development with prior demo, hosting, domain, technical support, minor changes, and flexible payment while the website is active.',
      keywords: 'web development, managed websites, included hosting, included domain, web support, Wuilmer Bolívar, website demo',
      imageAlt: 'Managed web services by Wuilmer Bolívar with hosting, domain, and support',
    };
  }

  if (route === 'contact') {
    if (lang === 'es') {
      return {
        title: 'Contacto | Wuilmer Bolívar',
        description: 'Contacto profesional de Wuilmer Bolívar para oportunidades laborales, automatización, ITSM, ciberseguridad aplicada y servicios de desarrollo web.',
        keywords: 'contacto Wuilmer Bolívar, reclutamiento ITSM, automatización, ciberseguridad, desarrollo web, LinkedIn, GitHub, WhatsApp',
        imageAlt: 'Contacto profesional de Wuilmer Bolívar',
      };
    }

    return {
      title: 'Contact | Wuilmer Bolívar',
      description: 'Professional contact page for Wuilmer Bolívar: job opportunities, automation, ITSM, applied cybersecurity, and web development services.',
      keywords: 'contact Wuilmer Bolívar, ITSM recruiting, automation, cybersecurity, web development, LinkedIn, GitHub, WhatsApp',
      imageAlt: 'Professional contact page for Wuilmer Bolívar',
    };
  }

  if (lang === 'es') {
    return {
      title: 'Wuilmer Bolívar | ITSM Senior, Ciberseguridad y Automatización',
      description: 'CV online y portafolio de Wuilmer Bolívar. ITSM senior, automatización, ciberseguridad aplicada, experiencia profesional y proyectos en GitHub.',
      keywords: 'Wuilmer Bolívar, ITSM, Incident Management, Problem Management, ciberseguridad, automatización, Bash, React, portfolio, reclutador, LinkedIn, SOC, continuidad operativa, GitHub',
      imageAlt: 'CV online de Wuilmer Bolívar con foco en ITSM, automatización, GitHub y ciberseguridad',
    };
  }

  return {
    title: 'Wuilmer Bolívar | Senior ITSM, Cybersecurity, and Automation',
    description: 'Online CV and portfolio of Wuilmer Bolívar. Senior ITSM, automation, applied cybersecurity, professional experience, and GitHub projects.',
    keywords: 'Wuilmer Bolívar, ITSM, incident management, problem management, cybersecurity, automation, Bash, React, portfolio, recruiter, LinkedIn, SOC, business continuity, GitHub',
    imageAlt: 'Online CV of Wuilmer Bolívar focused on ITSM, automation, GitHub, and cybersecurity',
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

export function applySeo(lang: Language, route: SeoRoute = 'home') {
  const payload = getSeoPayload(lang, route);
  const pageUrl = getPageUrl(route);
  document.title = payload.title;

  upsertMeta('meta[name="description"]', { name: 'description', content: payload.description });
  upsertMeta('meta[name="keywords"]', { name: 'keywords', content: payload.keywords });
  upsertMeta('meta[name="author"]', { name: 'author', content: siteConfig.name });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: payload.title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: payload.description });
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Wuilmer Bolívar Portfolio' });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: pageUrl });
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: siteConfig.previewImage });
  upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: payload.imageAlt });
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'es' ? 'es_PE' : 'en_US' });
  upsertMeta('meta[property="og:locale:alternate"]', { property: 'og:locale:alternate', content: lang === 'es' ? 'en_US' : 'es_PE' });
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: payload.title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: payload.description });
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: siteConfig.previewImage });
  upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: payload.imageAlt });

  upsertLink('link[rel="canonical"]', 'canonical', pageUrl);
  upsertLink('link[rel="alternate"][hreflang="es"]', 'alternate', pageUrl, 'es');
  upsertLink('link[rel="alternate"][hreflang="en"]', 'alternate', pageUrl, 'en');
  upsertLink('link[rel="alternate"][hreflang="x-default"]', 'alternate', pageUrl, 'x-default');

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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: lang === 'es' ? 'Desarrollo web administrado' : 'Managed web development',
    serviceType: lang === 'es' ? 'Desarrollo web, hosting, dominio y soporte' : 'Web development, hosting, domain, and support',
    url: getPageUrl('services'),
    provider: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.canonicalUrl,
    },
    areaServed: {
      '@type': 'Place',
      name: lang === 'es' ? 'Remoto' : 'Remote',
    },
    offers: {
      '@type': 'Offer',
      price: '1',
      priceCurrency: 'USD',
      description:
        lang === 'es'
          ? 'Sitio web con demo previa, hosting, dominio, soporte y cambios menores incluidos. Pago flexible mientras el sitio esté activo.'
          : 'Website with prior demo, hosting, domain, support, and minor changes included. Flexible payment while the site is active.',
      availability: 'https://schema.org/InStock',
    },
  };

  upsertJsonLd('person-schema', personSchema);
  upsertJsonLd('website-schema', websiteSchema);
  upsertJsonLd('collection-schema', collectionSchema);
  upsertJsonLd('service-schema', serviceSchema);
}
