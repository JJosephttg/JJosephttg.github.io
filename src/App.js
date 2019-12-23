import React from 'react';

import VerticalNavigationBar from './components/VerticalNavigationBar/VerticalNavigationBar';

import styles from './App.module.css';

const app = _ => {
  return (
    <div className={styles.App}>
      <VerticalNavigationBar/>
    </div>
  );
}

export default app;
