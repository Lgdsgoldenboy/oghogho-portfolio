import React from 'react';
import { contactLinks } from '../data';
import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => (
  <section id="contact" className={styles.section}>
    <div>
      <div className={styles.big}>Let's make<br />something<br /><em>great.</em></div>
      <p className={styles.sub}>Open to remote internships, freelance projects, and collaborations worldwide. Based in Nigeria — working globally. Drop me a message and I'll get back to you.</p>
    </div>
    <div className={styles.linksCol}>
      {contactLinks.map((cl) => (
        <a key={cl.label} className={styles.link} href={cl.href} target={cl.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
          {cl.label} <span>{cl.symbol}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ContactSection;