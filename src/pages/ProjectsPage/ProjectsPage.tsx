import { Fragment } from 'react';
import appHub1 from '../../assets/AppHub1.jpg';
import appHub2 from '../../assets/AppHub2.jpg';
import geometryDash1 from '../../assets/GeometryDash1.png';
import geometryDash2 from '../../assets/GeometryDash2.png';
import geometryDash3 from '../../assets/GeometryDash3.png';
import portfolioProject1 from '../../assets/PortfolioProject1.png';
import nuGetAlt1 from '../../assets/NuGetAlt1.png';
import webScraper1 from '../../assets/WebScraper1.png';

import { ProjectItem } from '../../components/ProjectItem/ProjectItem';

import styles from './ProjectsPage.module.css';

const projects = [
  {
    name: 'AppHub',
    pictures: [appHub1, appHub2],
    repoLink: 'https://github.com/JJosephttg/AppHub',
    languages: 'React/JS, HTML, CSS, SQLite',
  },
  {
    name: 'Geometry Dash C# Remake',
    pictures: [geometryDash1, geometryDash2, geometryDash3],
    repoLink: 'https://github.com/JJosephttg/GeometryDash',
    languages: 'C#, WPF',
  },
  {
    name: 'My Portfolio',
    pictures: [portfolioProject1],
    repoLink: 'https://github.com/JJosephttg/JJosephttg.github.io',
    languages: 'React/JS, HTML, CSS',
  },
  {
    name: 'NuGet Package Manager Remake/Alternative',
    pictures: [nuGetAlt1],
    repoLink: 'https://github.com/JJosephttg/NuGetPackageExplorerAlternative',
    languages: 'C#, WPF',
  },
  {
    name: 'Mass Email Parser',
    pictures: [webScraper1],
    repoLink: 'https://github.com/JJosephttg/Mass-Email-Parser',
    languages: 'Windows PowerShell',
  },
];

export default function ProjectsPage() {
  return (
    <Fragment>
      <h1 className={styles.Title}>Projects</h1>
      <div className={styles.Divider} />
      <div className={styles.ProjectsContainer}>
        {projects.map((item) => (
          <ProjectItem project={item} key={item.name} />
        ))}
      </div>
    </Fragment>
  );
}
