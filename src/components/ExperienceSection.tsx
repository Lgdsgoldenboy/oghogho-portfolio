import React, { useRef, useEffect } from 'react';
import { experiences } from '../data';
import SectionHeader from './SectionHeader';
import styles from './ExperienceSection.module.css';

const ExperienceRow: React.FC<{ company: string; role: string; desc: string; date: string }> = ({ company, role, desc, date }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const check = () => { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add(styles.in); };
    check(); window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);
  return (
    <div ref={ref} className={styles.row}>
      <div className={styles.company}>{company}</div>
      <div><div className={styles.role}>{role}</div><div className={styles.desc}>{desc}</div></div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

const ExperienceSection: React.FC = () => (
  <section id="experience">
    <SectionHeader num="03 — HISTORY" title="Experience" />
    {experiences.map((e) => <ExperienceRow key={e.company + e.role} {...e} />)}
  </section>
);

export default ExperienceSection;