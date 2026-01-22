
export interface EducationItem {
  level: string;
  institution: string;
  score: string;
  year?: string;
  details?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  tech: string[];
  description: string;
  github?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
