import React from 'react';
import styles from './Nav.module.css';

const Nav: React.FC = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>Oghogho <span>Paul Orieno</span></div>
    <div className={styles.status}><div className={styles.dot} />Available for work</div>
    <div className={styles.links}>
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

export default Nav;