import React from 'react';
import { tickerItems } from '../data';
import styles from './Ticker.module.css';

const Ticker: React.FC = () => {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className={styles.item}>{item}</span>
            <span className={styles.sep}>·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;