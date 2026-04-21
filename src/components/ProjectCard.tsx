import React, { useRef, useEffect } from 'react';
import type { Project } from '../types';
import ProjectMock, { type MockVariant } from './ProjectMock';
import styles from './ProjectCard.module.css';

const VARIANTS: MockVariant[] = ['lms','gifts','chatter','getaid','github','dashboard','valentine'];

const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9)
        el.classList.add(styles.in);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <div ref={ref} className={styles.project}>
      <div className={styles.projL}>
        <div>
          <div className={styles.projIdx}>{project.index}</div>
          <div className={styles.projName}>{project.name}</div>
          <div className={styles.projYear}>{project.year}</div>
          <div className={styles.projTags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.projTag}>{t}</span>
            ))}
          </div>
        </div>
        <a className={styles.projLink} href={project.link} target="_blank" rel="noreferrer">
          {project.linkLabel} <span className={styles.arr}>↗</span>
        </a>
      </div>

      <div className={styles.projR}>
        <div className={styles.projVisual}>
          <div className={styles.projVisualInner}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className={styles.projImg}
              />
            ) : (
              <ProjectMock variant={VARIANTS[idx % VARIANTS.length]} />
            )}
          </div>
        </div>
        <p className={styles.projDesc}>{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;