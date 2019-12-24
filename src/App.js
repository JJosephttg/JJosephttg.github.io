import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import VerticalNavigationBar from './components/VerticalNavigationBar/VerticalNavigationBar';

import styles from './App.module.css';

const app = _ => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <VerticalNavigationBar/>
        <Route path="/" exact>
          
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default app;
