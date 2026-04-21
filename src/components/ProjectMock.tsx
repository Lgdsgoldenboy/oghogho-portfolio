import React from 'react';
import styles from './ProjectMock.module.css';

export type MockVariant = 'lms' | 'gifts' | 'chatter' | 'getaid' | 'github' | 'dashboard' | 'valentine';

const ProjectMock: React.FC<{ variant: MockVariant }> = ({ variant }) => {
  switch (variant) {
    case 'lms': return (
      <div className={styles.mock}>
        <div className={styles.topbar}><div className={`${styles.dot} ${styles.r}`}/><div className={`${styles.dot} ${styles.y}`}/><div className={`${styles.dot} ${styles.g}`}/></div>
        <div className={`${styles.bar} ${styles.hi}`} style={{width:'75%'}}/>
        <div className={styles.bar} style={{width:'85%'}}/>
        <div className={styles.row} style={{marginTop:12}}>
          <div className={`${styles.card} ${styles.cardHi}`} style={{maxWidth:90,height:60}}/>
          <div className={styles.card} style={{height:60}}/><div className={styles.card} style={{height:60}}/>
        </div>
        <div style={{marginTop:10}}><span className={styles.tag}>LESSON 01</span><span className={styles.tag}>COMPLETE</span></div>
      </div>
    );
    case 'gifts': return (
      <div className={styles.mock}>
        <div className={styles.row} style={{alignItems:'center',marginBottom:14}}>
          <div className={styles.avatar}/><div className={styles.lines}><div className={styles.line}/><div className={`${styles.line} ${styles.lineS}`}/></div>
        </div>
        <div className={`${styles.bar} ${styles.hi}`} style={{width:'60%'}}/>
        <div className={styles.row} style={{marginTop:12,gap:10}}>
          <div className={styles.cardAccentHi}/><div className={styles.cardAccentDim}/><div className={styles.cardAccentDim}/>
        </div>
      </div>
    );
    case 'chatter': return (
      <div className={styles.mock}>
        <div style={{display:'flex',gap:6,marginBottom:12}}>
          <span className={styles.tag}>PUBLISHED</span><span className={styles.tagOutline}>DRAFT</span>
        </div>
        <div className={`${styles.bar} ${styles.hi}`} style={{width:'80%'}}/>
        <div className={styles.bar} style={{width:'65%'}}/><div className={styles.bar} style={{width:'90%'}}/><div className={styles.bar} style={{width:'50%'}}/>
        <div className={styles.row} style={{marginTop:10,alignItems:'center'}}>
          <div className={styles.avatar} style={{width:22,height:22}}/><div className={styles.line} style={{width:80}}/>
        </div>
      </div>
    );
    case 'getaid': return (
      <div className={styles.mock}>
        <div className={styles.topbar}><div className={`${styles.dot} ${styles.r}`}/><div className={`${styles.dot} ${styles.y}`}/><div className={`${styles.dot} ${styles.g}`}/></div>
        <div className={`${styles.bar} ${styles.hi}`} style={{width:'55%'}}/>
        <div className={styles.row} style={{marginTop:12}}>
          <div className={styles.card} style={{height:56}}/><div className={`${styles.card} ${styles.cardHi}`} style={{height:56}}/>
        </div>
        <div className={styles.bar} style={{width:'70%',marginTop:8}}/>
      </div>
    );
    case 'github': return (
      <div className={styles.mock}>
        <div className={styles.searchBar}><div className={styles.line} style={{width:120}}/></div>
        <div className={styles.row} style={{alignItems:'center'}}>
          <div className={styles.avatar} style={{width:36,height:36}}/>
          <div className={styles.lines}><div className={`${styles.line} ${styles.lineAccent}`} style={{width:100}}/><div className={`${styles.line} ${styles.lineS}`}/></div>
        </div>
        <div className={styles.bar} style={{width:'90%',marginTop:10}}/>
      </div>
    );
    case 'dashboard': return (
      <div className={styles.mock} style={{display:'flex',gap:10}}>
        <div className={styles.sidebar}/>
        <div style={{flex:1}}>
          <div className={`${styles.bar} ${styles.hi}`} style={{width:'90%'}}/>
          <div className={styles.row} style={{marginTop:10}}>
            <div className={styles.card} style={{height:44}}/><div className={`${styles.card} ${styles.cardHi}`} style={{height:44}}/>
          </div>
          <div className={styles.bar} style={{width:'75%',marginTop:8}}/><div className={styles.bar} style={{width:'55%'}}/>
        </div>
      </div>
    );
    case 'valentine': return (
      <div className={styles.mock} style={{textAlign:'center',padding:'30px 20px'}}>
        <div className={styles.heartWrap}>
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path d="M11 19C11 19 1 13 1 6C1 3.24 3.24 1 6 1C8.08 1 9.89 2.29 11 4C12.11 2.29 13.92 1 16 1C18.76 1 21 3.24 21 6C21 13 11 19 11 19Z" fill="rgba(255,100,120,0.5)" stroke="rgba(255,100,120,0.8)" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className={`${styles.bar} ${styles.hi}`} style={{width:'70%',margin:'0 auto 6px'}}/>
        <div className={styles.bar} style={{width:'50%',margin:'0 auto'}}/>
      </div>
    );
    default: return null;
  }
};

export default ProjectMock;