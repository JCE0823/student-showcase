import type { Project } from '@/types/project';
import type React from 'react';
import styles from './ProjectCard.module.css';

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.slice(1) || null;
    }
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname.startsWith('/watch')) {
        return u.searchParams.get('v');
      }
      if (u.pathname.startsWith('/embed/')) {
        return u.pathname.split('/')[2] || null;
      }
    }
  } catch {
    return null;
  }
  return null;
}

function getYouTubeThumbnail(url?: string): string | null {
  if (!url) return null;
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles['project-card']}>
      <div className={styles['project-image']}>
        <img
          src={
            `${import.meta.env.BASE_URL}images/${project.projectImage || 'placeholder.svg'}`
          }
          alt={project.projectTitle}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const img = e.currentTarget;
            if (img.src.endsWith('placeholder.svg')) return;
            img.src = `${import.meta.env.BASE_URL}images/placeholder.svg`;
          }}
        />
      </div>

      <div className={styles['project-content']}>
        <div className={styles['project-header']}>
          <img
            src={
              `${import.meta.env.BASE_URL}images/${project.studentPhoto || 'silhouette-student.svg'}`
            }
            alt={project.studentName}
            className={styles['student-photo']}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const img = e.currentTarget;
              if (img.dataset.fallbackUsed === 'true') return;
              img.src = `${import.meta.env.BASE_URL}images/silhouette-student.svg`;
              img.dataset.fallbackUsed = 'true';
            }}
          />
          <div>
            <h3 className={styles['project-title']}>{project.projectTitle}</h3>
            <p className={styles['project-author']}>by {project.studentName}</p>
          </div>
        </div>

        <p className={styles['project-description']}>{project.description}</p>

        {project.reflections && (
          <blockquote className={styles['project-reflections']}>
            <p>"{project.reflections}"</p>
          </blockquote>
        )}

        <div className={styles['project-types']}>
          {project.projectType.map((type) => (
            <span key={type} className={styles['type-badge']}>
              {type}
            </span>
          ))}
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className={styles['project-tags']}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles['tag']}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={styles['project-links-grid']}>
          {/* Video button or blank */}
          {project.videoUrl ? (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link primary"
            >
              Video
            </a>
          ) : (
            <span />
          )}
          {/* Run button or blank */}
          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link primary"
            >
              Run
            </a>
          ) : (
            <span />
          )}
          {/* GitHub button or blank */}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link primary"
            >
              GitHub
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
    </article>
  );
}
