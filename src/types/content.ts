export type Language = 'es' | 'en';

export type LocalizedText = Record<Language, string>;

export type LocalizedStringList = Record<Language, string[]>;

export type Metric = {
  label: LocalizedText;
  value: string;
  detail: LocalizedText;
};

export type ResultItem = {
  label: LocalizedText;
  value: string;
  detail: LocalizedText;
};

export type Highlight = {
  title: LocalizedText;
  description: LocalizedText;
};

export type QuickLink = {
  title: LocalizedText;
  description: LocalizedText;
  href: string;
  cta: LocalizedText;
  tag: LocalizedText;
};

export type Project = {
  slug: string;
  title: string;
  summary: LocalizedText;
  href: string;
  repository?: string;
  status: LocalizedText;
  category: LocalizedText;
  stack: string[];
  impact: string;
  tier: 1 | 2;
  caseStudy?: ProjectCaseStudy;
  liveUrl?: string;
  repoUrl?: string;
};

export type ExperienceItem = {
  id: number;
  role: LocalizedText;
  company: string;
  period: LocalizedText;
  achievements: LocalizedStringList;
};

export type Certification = {
  name: string;
  issuer: string;
  url: string;
  short: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  containerBorder: string;
};

export type Reference = {
  quote: LocalizedText;
  name: string;
  role: LocalizedText;
  initials: string;
  profileUrl: string;
  avatarUrl: string;
  accent: 'blue' | 'green';
};

// ─── Case Study ──────────────────────────────────────────────────────────────

export type Lang = 'es' | 'en';

export interface LocalizedString {
  es: string;
  en: string;
}

export interface CaseStudyMetric {
  value: string;
  label: LocalizedString;
}

export interface CaseStudyScreenshot {
  src: string;
  alt: LocalizedString;
}

export interface ProjectCaseStudy {
  slug:
    | 'bpp'
    | '4k4m1m3'
    | 'slange'
    | 'postslange'
    | 'xmsizer'
    | 'alumnos-grow-up'
    | 'initnulltv';
  tier: 1 | 2;
  name: string;
  headline: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  architecture: LocalizedString;
  keyFeatures: LocalizedString[];
  metrics: CaseStudyMetric[];
  stack: string[];
  links: {
    live?: string;
    repo?: string;
    blog?: string;
  };
  screenshots: CaseStudyScreenshot[];
  recruiterNote?: LocalizedString;
}
