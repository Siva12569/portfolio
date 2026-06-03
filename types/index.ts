export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
  international?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  url: string;
}

export interface ContactForm {
  user_name: string;
  user_email: string;
  message: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
