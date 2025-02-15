import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { VerticalNavigationBar } from './components/Navigation/VerticalNavigationBar/VerticalNavigationBar';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

import styles from './App.module.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className={styles.App}>
              <VerticalNavigationBar />
              <Outlet />
            </div>
          }
        >
          <Route path="/" Component={AboutPage} />
          <Route path="/projects" Component={ProjectsPage} />
          <Route path="/contact" Component={ContactPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
