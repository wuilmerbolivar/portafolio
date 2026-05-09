import type { Highlight, QuickLink } from '../types/content';

export const heroFocus = {
  es: ['ITSM', 'Ciberseguridad', 'Automatización', 'React', 'Bash'],
  en: ['ITSM', 'Cybersecurity', 'Automation', 'React', 'Bash'],
};

export const valueOffers: Highlight[] = [
  {
    title: { es: 'Automatización operativa', en: 'Operational automation' },
    description: {
      es: 'Diseño herramientas y flujos que reducen trabajo manual, aceleran reporting y mejoran el seguimiento del servicio.',
      en: 'I design tools and workflows that reduce manual work, accelerate reporting, and improve service follow-up.',
    },
  },
  {
    title: { es: 'Reporting ejecutivo', en: 'Executive reporting' },
    description: {
      es: 'Convierto operación técnica en dashboards KPI, reportes de calidad, actas RCA y visibilidad útil para cliente y liderazgo.',
      en: 'I turn technical operations into KPI dashboards, quality reports, RCA minutes, and useful visibility for clients and leadership.',
    },
  },
  {
    title: { es: 'Documentación y detalle', en: 'Documentation and detail' },
    description: {
      es: 'Aporto trazabilidad, documentación clara, auditoría de tickets y seguimiento riguroso para evitar ambigüedad en incidentes críticos.',
      en: 'I bring traceability, clear documentation, ticket auditing, and rigorous follow-up to remove ambiguity in critical incidents.',
    },
  },
  {
    title: { es: 'Análisis y redacción técnica', en: 'Analysis and technical writing' },
    description: {
      es: 'Combino análisis técnico, troubleshooting y redacción profesional para comités, writeups, reportes y aprendizaje público.',
      en: 'I combine technical analysis, troubleshooting, and professional writing for committees, writeups, reports, and public learning.',
    },
  },
];

export const profileHighlights: Highlight[] = [
  {
    title: { es: 'Incident & Problem Management', en: 'Incident & Problem Management' },
    description: {
      es: 'Lidero incidentes de alta severidad, coordino equipos N1/N2/N3 y sostengo SLA en entornos de misión crítica.',
      en: 'I lead high-severity incidents, coordinate teams, sustain SLAs, and turn RCA into actionable plans.',
    },
  },
  {
    title: { es: 'Automatización orientada a operaciones', en: 'Operations-driven automation' },
    description: {
      es: 'Desarrollo herramientas ITSM, dashboards y módulos documentales que aceleran decisiones y entrega de valor.',
      en: 'I build web tools, scripts, and workflows that remove repetitive tasks and accelerate decisions.',
    },
  },
  {
    title: { es: 'Ciberseguridad aplicada', en: 'Applied cybersecurity' },
    description: {
      es: 'Extiendo el perfil operativo con hardening, laboratorios, writeups y documentación técnica desde 4k4m1m3.com.',
      en: 'I combine hardening, CTF labs, defensive scripting, and public learning through 4k4m1m3.com.',
    },
  },
];

export const authorityLinks: QuickLink[] = [
  {
    title: { es: '4k4m1m3.com', en: '4k4m1m3.com' },
    description: {
      es: 'Perfil técnico y editorial con writeups, comunidad, visión de ciberseguridad y construcción pública.',
      en: 'Technical and editorial profile with writeups, community, cybersecurity perspective, and public building.',
    },
    href: 'https://4k4m1m3.com/',
    cta: { es: 'Explorar perfil', en: 'Explore profile' },
    tag: { es: 'Ciberseguridad', en: 'Cybersecurity' },
  },
  {
    title: { es: 'Newsletter Ciberestrategia Empresarial', en: 'Ciberestrategia Empresarial Newsletter' },
    description: {
      es: 'Contenido en LinkedIn enfocado en estrategia, riesgos, continuidad y criterio ejecutivo en seguridad.',
      en: 'LinkedIn content focused on strategy, risk, continuity, and executive security judgment.',
    },
    href: 'https://www.linkedin.com/newsletters/ciberestrategia-empresarial-7297597677997883392/',
    cta: { es: 'Ver newsletter', en: 'View newsletter' },
    tag: { es: 'LinkedIn', en: 'LinkedIn' },
  },
  {
    title: { es: '4k4m1m3 GitHub', en: '4k4m1m3 GitHub' },
    description: {
      es: 'Repositorio de herramientas, scripts y laboratorios orientados a seguridad, Docker y CTF.',
      en: 'Repository of tools, scripts, and labs focused on security, Docker, and CTF workflows.',
    },
    href: 'https://github.com/4k4m1m3',
    cta: { es: 'Ver repositorios', en: 'View repositories' },
    tag: { es: 'OSS', en: 'OSS' },
  },
  {
    title: { es: 'Portafolio en GitHub', en: 'Portfolio on GitHub' },
    description: {
      es: 'Código fuente del sitio, historial de iteración y evidencia de trabajo modular con React y Vite.',
      en: 'Site source code, iteration history, and evidence of modular React and Vite work.',
    },
    href: 'https://github.com/wuilmerbolivar/portafolio',
    cta: { es: 'Revisar codigo', en: 'Review code' },
    tag: { es: 'Frontend', en: 'Frontend' },
  },
];
