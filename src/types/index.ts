import type { LucideIcon } from 'lucide-react';

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
  description: string;
}

export interface CoreCompetency {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}
