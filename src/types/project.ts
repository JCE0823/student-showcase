export type Assignment = 'Problem Set 3' | 'Final Project';

export interface Project {
  assignment: Assignment;
  studentName: string;
  projectTitle: string;
  description: string;
  projectType: string[];
  tags?: string[];
  projectImage?: string;
  projectUrl: string;
  githubUrl?: string;
  reflections?: string;
  studentPhoto?: string;
  videoUrl?: string;
}
