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
        pictures: [],
        repoLink: "",
        languages: "C#, WPF"
    },
    {
        id: 2,
        name: "My Portfolio",
        pictures: [],
        repoLink: "",
        languages: "React/JS, HTML, CSS"
    }
];

export default ProjectsPage;