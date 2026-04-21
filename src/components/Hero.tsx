import React, { useEffect, useRef } from 'react';
import { stats } from '../data';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const footRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      eyebrowRef.current?.classList.add(styles.in);
      setTimeout(() => h1Ref.current?.classList.add(styles.in), 120);
      setTimeout(() => footRef.current?.classList.add(styles.in), 280);
      setTimeout(() => statsRef.current?.classList.add(styles.in), 450);
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero} id="top">
      <div className={styles.bgText}>FRONTEND</div>
      <div className={styles.heroTop}>
        <div className={styles.heroTopLabel}>
          Based in Nigeria<br />Open to remote<br />React · TS · Firebase
        </div>
      </div>
      <div ref={eyebrowRef} className={styles.eyebrow}>
        FRONTEND ENGINEER · CREATIVE TECHNOLOGIST · 2025
      </div>
      <h1 ref={h1Ref} className={styles.h1}>
        Building <em>bold</em><br />interfaces for<br />the modern web.
      </h1>
      <div ref={footRef} className={styles.foot}>
        <p className={styles.desc}>
          React · TypeScript · Firebase · Tailwind —<br />
          crafting responsive, scalable products that<br />
          <span>feel as good as they look.</span>
        </p>
        <div className={styles.actions}>
          <a href="#work" className={styles.btnOutline}>View my work ↓</a>
          <a href="mailto:oghoghoorieno@gmail.com" className={styles.btnSolid}>Get in touch</a>
        </div>
      </div>
      <div ref={statsRef} className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statN}>{s.value}</div>
            <div className={styles.statL}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;