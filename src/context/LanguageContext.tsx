import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  es: {
    nav: {
      about: 'Perfil',
      tech: 'Stack',
      projects: 'Proyectos',
      experience: 'Experiencia'
    },
    hero: {
      role: 'ITSM Senior & Automation',
      tagline: 'Garantizo la disponibilidad corporativa a través de la gestión de incidentes críticos y aseguro la continuidad del negocio integrando operaciones con arquitecturas de automatización.',
      downloadCv: 'Descargar CV (PDF)',
      available: 'Talento disponible'
    },
    about: {
      greeting: '👋 Hola Mundo!',
      lead: 'Especialista en Gestión de Servicios TI (ITSM) con +10 años de experiencia en entornos corporativos y bancarios, donde la disponibilidad, resiliencia y continuidad del negocio son críticas.',
      bridgePrefix: 'Mi enfoque diferencial es la integración de ',
      bridgeHighlight: 'ITSM + Desarrollo',
      bridgeSuffix: ', construyendo herramientas que automatizan reportes, optimizan flujos de trabajo operativos y transforman datos en decisiones accionables.',
      years: 'Años Exp',
      efficiency: 'Eficiencia RCA',
      vision: 'Problem & Incident Mngt.',
      visionDesc: 'Gestión end-to-end de eventos de alto impacto y prevención de recurrencias.',
      auto: 'Automatización ITSM',
      autoDesc: 'Eliminación de operación manual mediante arquitecturas offline-first.',
      security: 'Ciberseguridad Aplicada',
      securityDesc: 'Hardening, análisis de incidentes y mitigación de riesgos operativos.'
    },
    projects: {
      featured: 'Proyecto Principal',
      complementary: 'Proyecto Complementario',
      title1: 'Business Problem & Performance (BPP)',
      desc1: 'Un ecosistema web full-stack que automatiza reportes ITSM, actas de comité y KPIs. Elimina el trabajo manual para la auditoría de incidentes críticos, uniendo ITSM y el desarrollo de software moderno.',
      impactTitle1: 'Impacto Operativo',
      impactValue1: '-120h',
      impactDesc1: 'Trabajo manual / mes',
      title2: 'ITSM Scripts & Automatización',
      desc2: 'Múltiples herramientas y scripts (PHP, JavaScript) desarrollados para optimizar tareas repetitivas y Análisis de Causa Raíz en la gestión de servicios IT, logrando eficiencias mensurables.',
      impactTitle2: 'Mejora en RCA',
      impactValue2: '+25%',
      impactDesc2: 'Velocidad de diagnóstico',
      viewGithub: 'Ver Repositorios en GitHub',
      bppDeepDiveButton: 'Ver detalles técnicos',
      bppModalTitle: 'Deep Dive: BPP Platform',
      bppModalDesc: 'Módulos y Gráficas de Auditoría Generados'
    },
    tech: {
      title: 'Stack Tecnológico',
      certs: 'Certificaciones Oficiales',
      viewAll: 'Ver todas',
      githubTitle: 'GitHub Pulse',
      githubSubtitle: 'Actividad y métricas en tiempo real del perfil público.',
      githubLoading: 'Sincronizando actividad actual...',
      githubError: 'No se pudo cargar GitHub en este momento.',
      githubFallback: 'Mostrando la última lectura disponible.',
      publicRepos: 'Repos públicos',
      activeRepos: 'Repos activos',
      totalStars: 'Stars',
      followers: 'Seguidores',
      topLanguages: 'Lenguajes predominantes',
      recentRepos: 'Repos recientes',
      latestPush: 'Último push',
      refreshLabel: 'Actualizado',
      openProfile: 'Abrir perfil',
      openRepo: 'Abrir repo',
      languageProjects: 'repos'
    },
    experience: {
      title: 'Línea de Tiempo de Experiencia',
      education: 'Educación Académica',
      degree: 'Ingeniero Informático'
    },
    testimonials: {
      title: 'Referencias',
      viewLinkedIn: 'Ver todas en LinkedIn',
      viewProfile: 'Ver perfil',
      readMore: 'Leer completo',
      quote1: 'Excelente profesional en informática y ciberseguridad. Sus conocimientos y habilidades son sobresalientes, demostrando siempre compromiso y una actitud colaborativa que lo convierte en un valioso apoyo para cualquier equipo.',
      name1: 'Mario Álvarez Fernández',
      role1: 'Director Master Ciberseguridad - BIG school',
      initials1: 'MA',
      quote2: 'Su apoyo ha sido fundamental para optimizar herramientas, mejorar reportes y gestionar la información de manera ágil. Destaca por su capacidad para desarrollar soluciones prácticas y simplificar procesos tecnológicos.',
      name2: 'Clara M. Chuquimbalqui',
      role2: 'Especialista en Gestión Social - PetroTal',
      initials2: 'CC'
    },
    contact: {
      title: 'Hablemos de Automatización',
      subtitle: '¿Listo para optimizar los procesos de tu operación? Envíame un mensaje y descubramos cómo mi rol híbrido entre ITSM y Desarrollo puede ahorrarte cientos de horas.',
      description: 'Conectemos para conversar sobre cómo puedo aportar valor a tu equipo. Escríbeme y te responderé a la brevedad posible.',
      msg1: 'Hola, ¿qué tal? 👋',
      msg2: '¿Buscas optimizar tu operación?',
      msg3: 'Escríbeme y veamos cómo mi perfil ITSM + Desarrollo puede ahorrarte cientos de horas.',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Escribe un mensaje',
      send: 'Enviar por WhatsApp',
      success: '¡Redirigiendo a WhatsApp...!',
      online: 'en línea',
      today: 'HOY'
    }
  },
  en: {
    nav: {
      about: 'About',
      tech: 'Tech Stack',
      projects: 'Projects',
      experience: 'Experience'
    },
    hero: {
      role: 'Senior ITSM & Automation',
      tagline: 'I guarantee corporate availability through critical incident management and ensure business continuity by integrating operations with automation architectures.',
      downloadCv: 'Download CV (PDF)',
      available: 'Available for work'
    },
    about: {
      greeting: '👋 Hello World!',
      lead: 'IT Service Management (ITSM) Specialist with 10+ years of experience in corporate and banking environments where availability, resilience, and business continuity are critical.',
      bridgePrefix: 'My differential approach is the integration of ',
      bridgeHighlight: 'ITSM + development',
      bridgeSuffix: ', building tools that automate reporting, optimize operational workflows, and transform data into actionable decisions.',
      years: 'Years Exp',
      efficiency: 'RCA Efficiency',
      vision: 'Problem & Incident Mngt.',
      visionDesc: 'End-to-end management of high-impact events and recurrence prevention.',
      auto: 'ITSM Automation',
      autoDesc: 'Elimination of manual operations through offline-first architectures.',
      security: 'Applied Cybersecurity',
      securityDesc: 'Hardening, log analysis, and operational risk mitigation.'
    },
    projects: {
      featured: 'Featured Project',
      complementary: 'Complementary Project',
      title1: 'Business Problem & Performance (BPP)',
      desc1: 'A full-stack web ecosystem that automates ITSM reports, committee minutes, and KPIs. It eliminates manual labor for critical incident auditing, bridging ITSM and modern software development.',
      impactTitle1: 'Operational Impact',
      impactValue1: '-120h',
      impactDesc1: 'Manual work / month',
      title2: 'ITSM Scripts & Automation',
      desc2: 'Multiple tools and scripts (PHP, JavaScript) built to optimize repetitive tasks and root cause analysis in IT service management, achieving measurable efficiencies.',
      impactTitle2: 'RCA Improvement',
      impactValue2: '+25%',
      impactDesc2: 'Diagnosis speed',
      viewGithub: 'View Repositories on GitHub',
      bppDeepDiveButton: 'View Technical Details',
      bppModalTitle: 'Deep Dive: BPP Platform',
      bppModalDesc: 'Generated Audit Modules & Charts'
    },
    tech: {
      title: 'Technical Stack',
      certs: 'Official Certifications',
      viewAll: 'View all',
      githubTitle: 'GitHub Pulse',
      githubSubtitle: 'Live activity and public profile metrics.',
      githubLoading: 'Syncing current activity...',
      githubError: 'GitHub data is unavailable right now.',
      githubFallback: 'Showing the latest cached snapshot.',
      publicRepos: 'Public repos',
      activeRepos: 'Active repos',
      totalStars: 'Stars',
      followers: 'Followers',
      topLanguages: 'Top languages',
      recentRepos: 'Recent repos',
      latestPush: 'Latest push',
      refreshLabel: 'Updated',
      openProfile: 'Open profile',
      openRepo: 'Open repo',
      languageProjects: 'repos'
    },
    experience: {
      title: 'Experience Timeline',
      education: 'Academic Education',
      degree: 'Computer Engineer'
    },
    testimonials: {
      title: 'References',
      viewLinkedIn: 'View all on LinkedIn',
      viewProfile: 'View profile',
      readMore: 'Read full',
      quote1: 'Excellent IT and cybersecurity professional. His knowledge and skills are outstanding, always demonstrating commitment and a collaborative attitude that makes him a valuable support for any team.',
      name1: 'Mario Álvarez Fernández',
      role1: 'Director Master Ciberseguridad - BIG school',
      initials1: 'MA',
      quote2: 'His support has been fundamental in optimizing tools, improving reports, and managing information agilely. He stands out for his ability to develop practical solutions and simplify technological processes.',
      name2: 'Clara M. Chuquimbalqui',
      role2: 'Social Management Specialist - PetroTal',
      initials2: 'CC'
    },
    contact: {
      title: "Let's Talk Automation",
      subtitle: 'Ready to optimize your operational processes? Send me a message and discover how my hybrid ITSM/Dev role can save you hundreds of hours.',
      description: 'Let\'s connect to discuss how I can bring value to your team. Send me a message and I\'ll respond as soon as possible.',
      msg1: 'Hi, how are you? 👋',
      msg2: 'Looking to optimize your operations?',
      msg3: 'Message me and let\'s see how my ITSM + Dev profile can save you hundreds of hours.',
      name: 'Name',
      email: 'Email',
      message: 'Type a message',
      send: 'Send via WhatsApp',
      success: 'Redirecting to WhatsApp...',
      online: 'online',
      today: 'TODAY'
    }
  }
};

const STORAGE_KEY = 'wb-portfolio-language';

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: () => ''
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'es';
    }

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return storedLanguage === 'en' ? 'en' : 'es';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[lang];
    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
