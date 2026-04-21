import React, { useRef, useEffect } from 'react';
import { qualifications } from '../data';
import SectionHeader from './SectionHeader';
import styles from './QualificationsSection.module.css';

const QualCard: React.FC<{ type: string; name: string; org: string }> = ({ type, name, org }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const check = () => { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add(styles.in); };
    check(); window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);
  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.type}>{type}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.org}>{org}</div>
    </div>
  );
};

const QualificationsSection: React.FC = () => (
  <section>
    <SectionHeader num="04 — CREDENTIALS" title="Qualifications & awards" />
    <div className={styles.grid}>
      {qualifications.map((q) => <QualCard key={q.name} {...q} />)}
    </div>
  </section>
);

export default QualificationsSection;