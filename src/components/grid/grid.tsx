import React from 'react';

import styles from './grid.module.css';

export interface Props {
  size: number;
  step?: number;
  onSizeChange(size: number): void;
}

export function Grid({size}: Props) {
  return (
    <div
      className={styles.Grid}
      style={
        {
          '--grid-size': `${size}px`,
        } as React.CSSProperties
      }
    />
  );
}