export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  experience: string;
  coreSkills: string[];
  linkedin: string;
}

export interface DesiredRole {
  title: string;
  salary: string;
  location: string;
  industries: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface ProjectExperience {
  name: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  school: string;
  major: string;
  degree: string;
  period: string;
}

export interface ResumeDraft {
  id?: number;
  personalInfo: PersonalInfo;
  strengths: string[];
  desiredRole: DesiredRole;
  workExperiences: WorkExperience[];
  projects: ProjectExperience[];
  education: Education[];
  updatedAt?: string;
}

export type ResumeTemplateId = 'editorial' | 'classic' | 'compact';

export interface ResumeTemplate {
  id: ResumeTemplateId;
  name: string;
  description: string;
}
