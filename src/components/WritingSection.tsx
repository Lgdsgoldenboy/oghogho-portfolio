import React, { useRef, useEffect } from 'react';
import { writingItems } from '../data';
import SectionHeader from './SectionHeader';
import styles from './WritingSection.module.css';

const WritingCard: React.FC<{ type: string; title: string; desc: string; link?: string }> = ({ type, title, desc, link }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const check = () => { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add(styles.in); };
    check(); window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);
  return (
    <div ref={ref} className={styles.card} onClick={link ? () => window.open(link, '_blank') : undefined} style={link ? { cursor: 'pointer' } : undefined}>
      <div className={styles.type}>{type}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

const WritingSection: React.FC = () => (
  <section className={styles.section}>
    <SectionHeader num="05 — WORDS" title="Writing & community" />
    <div className={styles.grid}>
      {writingItems.map((w) => <WritingCard key={w.title} {...w} />)}
    </div>
  </section>
);

export default WritingSection;