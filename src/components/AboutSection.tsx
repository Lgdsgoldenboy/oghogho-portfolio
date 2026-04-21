import React, { useRef, useEffect } from 'react';
import { facts } from '../data';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add('in'); };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <section id="about" ref={ref} className={`${styles.about} reveal`}>
      <div className={styles.left}>
        <div className={styles.label}>ABOUT ME</div>
        <div className={styles.big}>Frontend engineer,<br /><em>published author,</em><br />community builder.</div>
        <p className={styles.body}>
          I'm Oghogho Paul Orieno — a certified frontend engineer from Warri, Delta State, Nigeria. I build responsive, scalable interfaces using React, TypeScript, and Firebase. I graduated from AltSchool Africa's Frontend Engineering program and have been shipping real products since 2023.
          <br /><br />
          Beyond the screen, I'm a published author, a three-time Circle Lead, and a community champion. I believe great products live at the intersection of technical excellence and human empathy — and that's exactly where I operate. Currently expanding into backend engineering at iQubeLabs.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.imgWrap}>
          <img
            src="https://my-portfolio-gamma-topaz-11.vercel.app/Assets/IMG_2018.jpg"
            alt="Oghogho Paul Orieno"
            onError={(e) => {
              const t = e.currentTarget; t.style.display = 'none';
              const p = t.parentElement;
              if (p) { p.style.background = 'var(--bg2)'; p.style.height = '320px'; p.innerHTML = "<div style='display:flex;align-items:center;justify-content:center;height:320px;font-family:var(--serif);font-size:48px;color:var(--accent)'>O.P.</div>"; }
            }}
          />
        </div>
        <div className={styles.factGrid}>
          {facts.map((f) => (
            <div key={f.key} className={styles.factRow}>
              <span className={styles.factK}>{f.key}</span>
              <span className={styles.factV} style={f.isGreen ? { color: 'var(--green)' } : undefined}>
                {f.href ? <a href={f.href} target={f.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{f.value}</a> : f.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;