import type { Project } from '@/types/project';
import styles from './FilterBar.module.css';

type FilterBarProps = {
  selected: string;
  onChange: (value: string) => void;
  projectTypes: string[];
  projects: Project[];
};

// FilterBar component removed as per new requirements
