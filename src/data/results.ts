import type { ResultItem } from '../types/content';

export const resultsData: ResultItem[] = [
  {
    label: { es: 'MTTR', en: 'MTTR' },
    value: '-25%',
    detail: {
      es: 'Reducción del tiempo promedio de resolución mediante optimización de flujos ITSM y mejor coordinación operativa.',
      en: 'Reduction in average resolution time through ITSM workflow optimization.',
    },
  },
  {
    label: { es: 'Automatización ITSM', en: 'ITSM automation' },
    value: '-120h/mes',
    detail: {
      es: 'Ahorro estimado en reporting, actas RCA, dashboards y documentación operativa para incidentes y problemas.',
      en: 'Estimated manual-work savings through tooling and reporting for critical incidents.',
    },
  },
  {
    label: { es: 'Indisponibilidad', en: 'Downtime' },
    value: '-30%',
    detail: {
      es: 'Reducción durante migraciones y transiciones de sistemas críticos en operación de campo.',
      en: 'Reduction during migrations and transitions of critical systems in field operations.',
    },
  },
  {
    label: { es: 'Incidentes críticos', en: 'Critical incidents' },
    value: 'P1/P2',
    detail: {
      es: 'Experiencia liderando mesas técnicas, SLA, RCA, auditoría de tickets y coordinación N1/N2/N3.',
      en: 'Experience leading bridge calls, SLA control, RCA, ticket auditing, and N1/N2/N3 coordination.',
    },
  },
];
