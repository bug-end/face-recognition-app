import React from 'react';
import { Spinner } from '../Spinner/Spinner';

import styles from './LoadingOverlay.module.css';

export const LoadingOverlay = () => {
  return (
    <div className={styles.wrapper}>
      <Spinner />
      <p>Loading data please wait...</p>
    </div>
  );
};
