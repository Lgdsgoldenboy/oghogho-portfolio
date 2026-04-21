import React from 'react';
import styles from './SectionHeader.module.css';

interface Props { num: string; title: string; }

const SectionHeader: React.FC<Props> = ({ num, title }) => (
  <div className={styles.header}>
    <span className={styles.num}>{num}</span>
    <span className={styles.title}>{title}</span>
  </div>
);

export default SectionHeader;