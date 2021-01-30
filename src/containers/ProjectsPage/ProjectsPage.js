import React, { Fragment } from 'react';

import ProjectItem from '../../components/ProjectItem/ProjectItem';

import styles from './ProjectsPage.module.css';

const ProjectsPage = _ => {
    return (
        <Fragment>
            <h1 className={styles.Title}>Projects</h1>
            <div className={styles.Divider}/>
            <div className={styles.ProjectsContainer}>
                { projects.map(item => <ProjectItem project={item} key={item.name} />) }
            </div>
        </Fragment>
    );
}

const projects = [
    {
        name: "AppHub",
        pictures: [
            require("../../assets/AppHub1.jpg"),
            require("../../assets/AppHub2.jpg")
        ],
        repoLink: "https://github.com/JJosephttg/AppHub",
        languages: "React/JS, HTML, CSS, SQLite"
    },
    {
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
        name: "My Portfolio",
        pictures: [
            require("../../assets/PortfolioProject1.png")
        ],
        repoLink: "https://github.com/JJosephttg/JJosephttg.github.io",
        languages: "React/JS, HTML, CSS"
    },
    {
        name: "NuGet Package Manager Remake/Alternative",
        pictures: [
            require("../../assets/NuGetAlt1.png")
        ],
        repoLink: "https://github.com/JJosephttg/NuGetPackageExplorerAlternative",
        languages: "C#, WPF"
    },
    {
        name: "Mass Email Parser",
        pictures: [
            require("../../assets/WebScraper1.png")
        ],
        repoLink: "https://github.com/JJosephttg/Mass-Email-Parser",
        languages: "Windows PowerShell"
    }
];

export default ProjectsPage;