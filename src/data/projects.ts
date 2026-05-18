import type { ProjectCaseStudy } from '../types/content';

export const projectCaseStudies: ProjectCaseStudy[] = [

  // ─── TIER 1 ──────────────────────────────────────────────────────────────

  {
    slug: 'bpp',
    tier: 1,
    name: 'ITSM BPP',
    headline: {
      es: 'Automatización ITSM: de Excel manual a dashboard ejecutivo en tiempo real',
      en: 'ITSM automation: from manual Excel to real-time executive dashboard',
    },
    problem: {
      es: 'Los equipos de Problem e Incident Management perdían 2–3 horas diarias generando reportes manualmente en Excel: gráficas operativas, actas de comité RCA, auditorías de tickets y control de SLA. Sin trazabilidad, sin formato estandarizado y sin visibilidad ejecutiva en tiempo real.',
      en: 'Problem and Incident Management teams were losing 2–3 hours daily generating reports manually in Excel: operational charts, RCA committee minutes, ticket audits, and SLA tracking. No traceability, no standardized format, no real-time executive visibility.',
    },
    solution: {
      es: 'Sistema web integral offline-first (sin servidores propios, sin base de datos externa) que automatiza gráficas operativas, actas de RCA, informes ejecutivos, reportes de auditoría de tickets y control de cumplimiento SLA. Dashboards listos para el cliente en tiempo real. Toda la data persiste localmente con IndexedDB.',
      en: 'Comprehensive offline-first web system (no own servers, no external database) that automates operational charts, RCA minutes, executive reports, ticket audit reports, and SLA compliance tracking. Client-ready dashboards in real time. All data persists locally with IndexedDB.',
    },
    architecture: {
      es: 'SPA construida con React + TypeScript + Vite. Persistencia local con IndexedDB (sin backend). Visualizaciones con Recharts. Exportación de reportes con la librería xlsx. Despliegue en Vercel. Arquitectura offline-first: funciona sin internet una vez cargada.',
      en: 'SPA built with React + TypeScript + Vite. Local persistence with IndexedDB (no backend). Visualizations with Recharts. Report export with xlsx library. Deployed on Vercel. Offline-first architecture: works without internet once loaded.',
    },
    keyFeatures: [
      { es: 'Generación automática de actas de comité RCA con plan de acción', en: 'Automatic RCA committee minutes with action plan' },
      { es: 'Dashboard de KPIs con gráficas operativas en tiempo real', en: 'KPI dashboard with real-time operational charts' },
      { es: 'Auditoría de tickets: clasificación, escalamiento y cumplimiento SLA', en: 'Ticket audit: classification, escalation and SLA compliance' },
      { es: 'Exportación de reportes ejecutivos a xlsx listo para el cliente', en: 'Executive report export to client-ready xlsx' },
      { es: 'Seguimiento de problemas e incidentes con historial completo', en: 'Problem and incident tracking with full history' },
      { es: 'Arquitectura offline-first: cero dependencia de infraestructura externa', en: 'Offline-first architecture: zero dependency on external infrastructure' },
    ],
    metrics: [
      { value: '−120h', label: { es: 'horas/mes en tareas manuales eliminadas', en: 'hours/month in manual tasks eliminated' } },
      { value: '+20',   label: { es: 'módulos ITSM cubiertos en la plataforma', en: 'ITSM modules covered in the platform' } },
      { value: '100%',  label: { es: 'offline — sin servidores propios', en: 'offline — no own servers' } },
      { value: '0',     label: { es: 'costo de infraestructura mensual', en: 'monthly infrastructure cost' } },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Recharts', 'IndexedDB', 'Tailwind CSS', 'xlsx', 'Vercel'],
    links: {
      live: 'https://itsm-bpp.vercel.app',
      repo: 'https://github.com/wuilmerbolivar/portafolio',
    },
    screenshots: [
      { src: '/screenshots/bpp-preview.webp', alt: { es: 'Dashboard principal de ITSM BPP', en: 'ITSM BPP main dashboard' } },
    ],
    recruiterNote: {
      es: 'Esta herramienta la construí para resolver un problema real que vivía en proyectos bancarios con BBVA y Banco Pichincha. No es un ejercicio académico: está en producción y cualquier equipo ITSM puede adoptarla sin costo ni infraestructura. Es el ejemplo más claro de cómo combino gestión de servicios con desarrollo.',
      en: 'I built this tool to solve a real problem I experienced in banking projects with BBVA and Banco Pichincha. It\'s not an academic exercise: it\'s in production and any ITSM team can adopt it at zero cost with no infrastructure. It\'s the clearest example of how I combine service management with development.',
    },
  },

  {
    slug: '4k4m1m3',
    tier: 1,
    name: '4k4m1m3',
    headline: {
      es: 'Blog técnico de ciberseguridad ofensiva para la comunidad hispanohablante',
      en: 'Offensive cybersecurity technical blog for the Spanish-speaking community',
    },
    problem: {
      es: 'Escasez de contenido técnico en español sobre pentesting práctico, CTFs y análisis de vulnerabilidades reales. La comunidad hispanohablante dependía de recursos en inglés, a menudo sin contexto ni traducción accesible.',
      en: 'Scarcity of technical content in Spanish on practical pentesting, CTFs, and real vulnerability analysis. The Spanish-speaking community depended on English resources, often without accessible context or translation.',
    },
    solution: {
      es: 'Plataforma educativa con write-ups técnicos de CTF (TheHackersLabs, HackMyVM, Dockerlabs), análisis de vulnerabilidades CVE y notas de pentesting. Comunidad activa en Patreon. Fundada como InitNullTV con presencia en múltiples plataformas.',
      en: 'Educational platform with CTF technical write-ups (TheHackersLabs, HackMyVM, Dockerlabs), CVE vulnerability analysis, and pentesting notes. Active community on Patreon. Founded as InitNullTV with presence on multiple platforms.',
    },
    architecture: {
      es: 'WordPress como CMS con tema personalizado. SEO técnico optimizado. Integración con Patreon para contenido de membresía. Distribución vía redes sociales especializadas en seguridad informática.',
      en: 'WordPress as CMS with custom theme. Optimized technical SEO. Patreon integration for membership content. Distribution via cybersecurity-specialized social networks.',
    },
    keyFeatures: [
      { es: 'Write-ups de CTF con metodología paso a paso reproducible', en: 'CTF write-ups with reproducible step-by-step methodology' },
      { es: 'Análisis de vulnerabilidades CVE con impacto real', en: 'CVE vulnerability analysis with real-world impact' },
      { es: 'Notas de pentesting organizadas por fase y herramienta', en: 'Pentesting notes organized by phase and tool' },
      { es: 'Comunidad en Patreon con contenido exclusivo avanzado', en: 'Patreon community with exclusive advanced content' },
      { es: 'Miembro internacional de Ubuntu y plataformas CTF activas', en: 'International Ubuntu member and active CTF platforms' },
    ],
    metrics: [
      { value: '52+',    label: { es: 'posts técnicos publicados', en: 'technical posts published' } },
      { value: '3',      label: { es: 'plataformas CTF cubiertas', en: 'CTF platforms covered' } },
      { value: 'eJPTv2', label: { es: 'certificación INE Security obtenida', en: 'INE Security certification obtained' } },
      { value: 'CEHPC',  label: { es: 'Certified Ethical Hacker Practical', en: 'Certified Ethical Hacker Practical' } },
    ],
    stack: ['WordPress', 'Linux', 'Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap', 'Docker'],
    links: {
      live: 'https://4k4m1m3.com',
    },
    screenshots: [
      { src: '/screenshots/4k4m1m3-preview.webp', alt: { es: 'Home del blog de ciberseguridad 4k4m1m3', en: '4k4m1m3 cybersecurity blog home' } },
    ],
    recruiterNote: {
      es: 'La ciberseguridad no es un hobby paralelo: es parte de mi perfil técnico que aplico directamente en operaciones ITSM. El hardening de servidores, el análisis de eventos de seguridad y la comprensión de vectores de ataque mejoran la calidad del Problem Management. Este blog es evidencia pública de ese conocimiento.',
      en: 'Cybersecurity is not a side hobby: it\'s part of my technical profile that I apply directly in ITSM operations. Server hardening, security event analysis, and understanding attack vectors improve Problem Management quality. This blog is public evidence of that knowledge.',
    },
  },

  {
    slug: 'slange',
    tier: 1,
    name: 'Slange Trading',
    headline: {
      es: 'Plataforma completa de academia online para traders: gestión, evaluación y seguimiento',
      en: 'Complete online trading academy platform: management, assessment and tracking',
    },
    problem: {
      es: 'Una academia de trading necesitaba centralizar la gestión de estudiantes, membresías, evaluaciones y progreso académico. Las herramientas genéricas (Google Forms, hojas de cálculo) no daban visibilidad ni control real al equipo de instructores.',
      en: 'A trading academy needed to centralize student management, memberships, assessments, and academic progress. Generic tools (Google Forms, spreadsheets) didn\'t give instructors real visibility or control.',
    },
    solution: {
      es: 'Plataforma web integral con panel de estudiantes, control de membresías activas/vencidas, sistema de evaluación de exámenes, seguimiento de progreso académico y panel de instructores. Diseño UX/UI responsivo optimizado para uso en móvil y desktop.',
      en: 'Comprehensive web platform with student panel, active/expired membership control, exam assessment system, academic progress tracking, and instructor dashboard. Responsive UX/UI design optimized for mobile and desktop use.',
    },
    architecture: {
      es: 'Frontend en React + TypeScript con diseño responsive. Panel administrativo para instructores con control de roles. Sistema de membresías con estados activo/vencido/pendiente. Módulo de evaluaciones con corrección automática.',
      en: 'Frontend in React + TypeScript with responsive design. Administrative panel for instructors with role control. Membership system with active/expired/pending states. Assessment module with automatic correction.',
    },
    keyFeatures: [
      { es: 'Gestión completa de estudiantes: registro, perfil y membresía', en: 'Complete student management: registration, profile and membership' },
      { es: 'Control de membresías con estados y fechas de vencimiento', en: 'Membership control with states and expiration dates' },
      { es: 'Sistema de evaluación de exámenes con resultados automáticos', en: 'Exam assessment system with automatic results' },
      { es: 'Seguimiento visual del progreso académico por estudiante', en: 'Visual academic progress tracking per student' },
      { es: 'Panel de instructores con vista agregada de toda la academia', en: 'Instructor dashboard with aggregated view of the entire academy' },
    ],
    metrics: [
      { value: '100%', label: { es: 'funcionalidades de gestión académica cubiertas', en: 'academic management features covered' } },
      { value: '3',    label: { es: 'roles de usuario implementados', en: 'user roles implemented' } },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vercel'],
    links: {
      live: 'https://www.slangetrading.com/',
    },
    screenshots: [
      { src: '/screenshots/slange-preview.webp', alt: { es: 'Plataforma Slange Trading Academy', en: 'Slange Trading Academy platform' } },
    ],
    recruiterNote: {
      es: 'Este proyecto demuestra que puedo construir aplicaciones de gestión con lógica de negocio real, no solo herramientas internas ITSM. La misma capacidad analítica que aplico en Problem Management la traduzco en decisiones de arquitectura de software.',
      en: 'This project demonstrates that I can build management applications with real business logic, not just internal ITSM tools. The same analytical capacity I apply in Problem Management I translate into software architecture decisions.',
    },
  },

  // ─── TIER 2 ──────────────────────────────────────────────────────────────

  {
    slug: 'postslange',
    tier: 2,
    name: 'PostSlange',
    headline: {
      es: 'Generador de imágenes con plantilla desde archivo .txt — por encargo empresarial',
      en: 'Template image generator from .txt file — built for a business client',
    },
    problem: { es: '', en: '' },
    solution: { es: '', en: '' },
    architecture: { es: '', en: '' },
    keyFeatures: [],
    metrics: [],
    stack: ['React', 'TypeScript', 'Canvas API', 'Vercel'],
    links: { live: 'https://postslange.vercel.app' },
    screenshots: [],
  },

  {
    slug: 'xmsizer',
    tier: 2,
    name: 'XM Sizer',
    headline: {
      es: 'Calculadora profesional XM: riesgo, volatilidad ATR y spread en posición ejecutable',
      en: 'Professional XM calculator: risk, ATR volatility and spread into executable position',
    },
    problem: { es: '', en: '' },
    solution: { es: '', en: '' },
    architecture: { es: '', en: '' },
    keyFeatures: [],
    metrics: [],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: { live: 'https://xmsizer.vercel.app' },
    screenshots: [],
  },

  {
    slug: 'alumnos-grow-up',
    tier: 2,
    name: 'Alumnos Grow Up',
    headline: {
      es: 'Plataforma de perfiles para estudiantes del curso intensivo Proyecto Grow Up',
      en: 'Profile platform for Proyecto Grow Up intensive course students',
    },
    problem: { es: '', en: '' },
    solution: { es: '', en: '' },
    architecture: { es: '', en: '' },
    keyFeatures: [],
    metrics: [],
    stack: ['React', 'TypeScript', 'Vercel'],
    links: { live: 'https://alumnos-grow-up.vercel.app' },
    screenshots: [],
  },

  {
    slug: 'initnulltv',
    tier: 2,
    name: 'InitNullTV',
    headline: {
      es: 'Guía y comunidad sobre creación de negocios digitales en español',
      en: 'Guide and community on creating digital businesses in Spanish',
    },
    problem: { es: '', en: '' },
    solution: { es: '', en: '' },
    architecture: { es: '', en: '' },
    keyFeatures: [],
    metrics: [],
    stack: ['WordPress', 'Patreon'],
    links: { live: 'https://initnulltv.com' },
    screenshots: [],
  },
];

// Helper: obtener solo proyectos de un tier
export const getTier1Projects = () => projectCaseStudies.filter((p) => p.tier === 1);
export const getTier2Projects = () => projectCaseStudies.filter((p) => p.tier === 2);

// Helper: obtener proyecto por slug
export const getProjectBySlug = (slug: string) =>
  projectCaseStudies.find((p) => p.slug === slug) ?? null;
