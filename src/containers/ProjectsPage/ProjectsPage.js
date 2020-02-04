import React, { Fragment } from 'react';

import ProjectItem from '../../components/ProjectItem/ProjectItem';

import styles from './ProjectsPage.module.css';

const ProjectsPage = _ => {
    return (
        <Fragment>
            <h1 className={styles.Title}>Projects</h1>
            <div className={styles.Divider}/>
            <div className={styles.ProjectsContainer}>
                { projects.map(item => <ProjectItem project={item} key={item.id} />) }
            </div>
        </Fragment>
    );
}

const projects = [
    {
        id: 1,
        name: "Geometry Dash C# Remake",
        pictures: [
            require("../../assets/GeometryDash1.png"), 
            require("../../assets/GeometryDash2.png"), 
            require("../../assets/GeometryDash3.png")
        ],
        repoLink: "https://github.com/JJosephttg/GeometryDash",
        languages: "C#, WPF"
    },
    {
        id: 2,
        name: "My Portfolio",
        pictures: [
            require("../../assets/PortfolioProject1.png")
        ],
        repoLink: "https://github.com/JJosephttg/JJosephttg.github.io",
        languages: "React/JS, HTML, CSS"
    },
    {
        id: 3,
        name: "NuGet Package Manager Remake/Alternative",
        pictures: [
            require("../../assets/NuGetAlt1.png")
        ],
        repoLink: "https://github.com/JJosephttg/NuGetPackageExplorerAlternative",
        languages: "C#, WPF"
    },
    {
        id: 4,
        name: "Mass Email Parser",
        pictures: [
            require("../../assets/WebScraper1.png")
        ],
        repoLink: "https://github.com/JJosephttg/Mass-Email-Parser",
        languages: "Windows PowerShell"
    }
];

export default ProjectsPage;