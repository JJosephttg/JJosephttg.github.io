import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import VerticalNavigationBar from './components/Navigation/VerticalNavigationBar/VerticalNavigationBar';
import AboutPage from './containers/AboutPage/AboutPage';
import ProjectsPage from './containers/ProjectsPage/ProjectsPage';
import ContactPage from './containers/ContactPage/ContactPage';

import styles from './App.module.css';

const app = _ => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <VerticalNavigationBar/>
        
        <Route path="/" exact>
          <AboutPage/>
        </Route>
        <Route path="/projects" exact>
          <ProjectsPage/>
        </Route>
        <Route path="/contact" exact>
          <ContactPage/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default app;
