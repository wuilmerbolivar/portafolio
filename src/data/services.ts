import type { Highlight, LocalizedText } from '../types/content';

type ServiceFeature = Highlight & {
  id: string;
};

type ServiceStep = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
};

type PaymentFrequency = {
  id: string;
  label: LocalizedText;
};

export const webServiceFeatures: ServiceFeature[] = [
  {
    id: 'development',
    title: { es: 'Desarrollo incluido', en: 'Development included' },
    description: {
      es: 'Diseño y construyo una página web responsive para tu negocio, proyecto o marca personal.',
      en: 'I design and build a responsive website for your business, project, or personal brand.',
    },
  },
  {
    id: 'hosting-domain',
    title: { es: 'Hosting y dominio', en: 'Hosting and domain' },
    description: {
      es: 'Me encargo del despliegue, dominio, hosting y configuración técnica mientras el sitio esté activo.',
      en: 'I handle deployment, domain, hosting, and technical configuration while the site is active.',
    },
  },
  {
    id: 'support',
    title: { es: 'Soporte técnico', en: 'Technical support' },
    description: {
      es: 'Acompañamiento real para ajustes, incidencias, revisiones y continuidad operativa del sitio.',
      en: 'Hands-on support for adjustments, incidents, reviews, and website continuity.',
    },
  },
  {
    id: 'minor-changes',
    title: { es: 'Cambios menores', en: 'Minor changes' },
    description: {
      es: 'Ajustes de texto, imágenes, colores y detalles visuales incluidos sin costo adicional.',
      en: 'Text, image, color, and visual detail adjustments included at no additional cost.',
    },
  },
  {
    id: 'flexible-payment',
    title: { es: 'Pago flexible', en: 'Flexible payment' },
    description: {
      es: 'Frecuencia diaria, semanal, quincenal o mensual según el tipo de proyecto y acuerdo.',
      en: 'Daily, weekly, biweekly, or monthly frequency depending on the project and agreement.',
    },
  },
  {
    id: 'no-contract',
    title: { es: 'Sin contratos largos', en: 'No long contracts' },
    description: {
      es: 'Pagas solo mientras el sitio esté activo. Puedes cancelar cuando ya no lo necesites.',
      en: 'You only pay while the site is active. You can cancel when you no longer need it.',
    },
  },
];

export const webServiceSteps: ServiceStep[] = [
  {
    id: 'idea',
    title: { es: 'Me cuentas la idea', en: 'You share the idea' },
    description: {
      es: 'Definimos objetivo, tipo de público, secciones necesarias y referencias visuales.',
      en: 'We define the goal, audience, required sections, and visual references.',
    },
  },
  {
    id: 'demo',
    title: { es: 'Preparo una demo', en: 'I prepare a demo' },
    description: {
      es: 'Construyo una primera versión para que puedas verla antes de decidir.',
      en: 'I build a first version so you can review it before deciding.',
    },
  },
  {
    id: 'adjustments',
    title: { es: 'Ajustamos detalles', en: 'We adjust details' },
    description: {
      es: 'Hacemos cambios de contenido, estructura o diseño hasta que estés conforme.',
      en: 'We refine content, structure, or design until it matches what you need.',
    },
  },
  {
    id: 'agreement',
    title: { es: 'Definimos el pago', en: 'We define payment' },
    description: {
      es: 'Acordamos una frecuencia según complejidad, alcance y ritmo de mantenimiento.',
      en: 'We agree on a frequency based on complexity, scope, and maintenance rhythm.',
    },
  },
  {
    id: 'maintenance',
    title: { es: 'Yo mantengo el sitio', en: 'I maintain the site' },
    description: {
      es: 'Tú te enfocas en tu negocio; yo gestiono soporte, renovaciones y operación técnica.',
      en: 'You focus on your business; I manage support, renewals, and technical operation.',
    },
  },
];

export const servicePaymentFrequencies: PaymentFrequency[] = [
  { id: 'daily', label: { es: 'Diario', en: 'Daily' } },
  { id: 'weekly', label: { es: 'Semanal', en: 'Weekly' } },
  { id: 'biweekly', label: { es: 'Quincenal', en: 'Biweekly' } },
  { id: 'monthly', label: { es: 'Mensual', en: 'Monthly' } },
];
