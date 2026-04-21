import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <span>© 2026 Oghogho Paul Orieno</span>
    <span>Frontend Engineer · Warri, Nigeria</span>
    <a href="#top">Back to top ↑</a>
  </footer>
);

export default Footer;