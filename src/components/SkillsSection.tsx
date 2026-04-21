import React from 'react';
import { skillColumns } from '../data';
import SectionHeader from './SectionHeader';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => (
  <section id="skills">
    <SectionHeader num="02 — CAPABILITIES" title="Skills & tools" />
    <div className={styles.grid}>
      {skillColumns.map((col) => (
        <div key={col.title} className={styles.col}>
          <div className={styles.colTitle}>{col.title}</div>
          {col.items.map((item) => <div key={item} className={styles.item}>{item}</div>)}
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;