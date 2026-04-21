export interface Project {
  id: string;
  index: string;
  name: string;
  year: string;
  tags: string[];
  desc: string;
  link: string;
  linkLabel: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  desc: string;
  date: string;
}

export interface Qualification {
  type: string;
  name: string;
  org: string;
}

export interface WritingItem {
  type: string;
  title: string;
  desc: string;
  link?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FactRow {
  key: string;
  value: string;
  href?: string;
  isGreen?: boolean;
}

export interface SkillColumn {
  title: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  symbol: string;
}