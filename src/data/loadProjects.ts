import type { Project } from '@/types/project';

const projectModules = import.meta.glob([
  './projects/*.json',
  '!./projects/project.schema.json'
], { eager: true }) as Record<string, { default: Project }>; 

export const projects: Project[] = Object.values(projectModules).map(m => m.default);

export const sortedProjects: Project[] = [...projects].sort((a, b) =>
  a.studentName.localeCompare(b.studentName)
);

export const projectTypes: string[] = [...new Set(projects.flatMap(p => p.projectType))].sort();

export const allTags: string[] = [...new Set(projects.flatMap(p => p.tags || []))].sort();
