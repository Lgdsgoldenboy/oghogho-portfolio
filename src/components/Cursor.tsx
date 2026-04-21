import React from 'react';
import { useCursor } from '../hooks/useCursor';
import styles from './Cursor.module.css';

const Cursor: React.FC = () => {
  const { curRef, ringRef } = useCursor();
  return (
    <>
      <div ref={curRef} className={styles.cursor} />
      <div ref={ringRef} className={styles.cursorRing} />
    </>
  );
};

export default Cursor;