export interface SocialLink {
  platform: 'github' | 'linkedin' | 'leetcode' | 'geeksforgeeks' | 'x' | 'instagram' | 'email';
  label: string;
  url: string;
  username: string;
  primary?: boolean;
}

export interface SkillItem {
  name: string;
  stage?: 'Proficient' | 'Active Working' | 'Exploring' | 'Foundational';
  highlight?: boolean;
}

export interface SkillGroup {
  category: 'Frontend' | 'Backend' | 'Languages' | 'Data & Databases' | 'Tools & DevOps' | 'AI & Machine Learning';
  description: string;
  skills: SkillItem[];
}

export interface ProjectDetail {
  contextProblem: string;
  goals: string[];
  roleContribution: string;
  approachArchitecture: string;
  keyFeatures: string[];
  techChoices: { tech: string; reason: string }[];
  challengesLearning: string;
  outcome: string;
  futureImprovements: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend & System' | 'Utility & Web' | 'Interactive';
  featured: boolean;
  tags: string[];
  githubUrl?: string;
  githubUrlSecondary?: string;
  demoUrl?: string;
  highlights: string[];
  caseStudy: ProjectDetail;
}

export interface AcademicLevel {
  level: string;
  year: number | string;
  institution?: string;
  streamOrFocus?: string;
  description?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  expectedGraduation: number;
  highlights: string[];
  relevantCoursework: string[];
  levels?: AcademicLevel[];
}

export interface Milestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export interface ExploringTopic {
  title: string;
  focus: string;
  description: string;
  status: 'In Progress' | 'Researching' | 'Prototyping';
  tags: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  tagline: string;
  bio: string[];
  locationDisplay: string;
  availability: string;
  email: string;
  education: EducationItem;
  socials: SocialLink[];
  skills: SkillGroup[];
  projects: Project[];
  milestones: Milestone[];
  currentlyExploring: ExploringTopic[];
}
