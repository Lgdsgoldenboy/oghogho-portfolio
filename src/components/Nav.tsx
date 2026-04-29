import React, { useState } from 'react';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
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
        <button
          className={`${styles.hamburger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
        <a href="#work" onClick={close}>Work</a>
        <a href="#about" onClick={close}>About</a>
        <a href="#skills" onClick={close}>Skills</a>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#contact" onClick={close}>Contact</a>
        <div className={styles.mobileStatus}>
          <div className={styles.dot} /> Available for work
        </div>
      </div>
    </>
  );
};

export default Nav;