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
