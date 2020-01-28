import React, { useState } from 'react';

import styles from './ProjectItem.module.css';

const ProjectItem = props => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousBtnClicked = _ => {
        if(currentImageIndex === 0) return;
        setCurrentImageIndex(currentImageIndex - 1);
    }

    const nextBtnClicked = _ => {
        if(currentImageIndex >= props.project.pictures.length - 1) return;
        setCurrentImageIndex(currentImageIndex + 1);
    }

    const projectButtonStyle = ["material-icons", styles.ProjectButton].join(' ');
    return (
        <div className={styles.ProjectContainer}>
            <div style={{position: "relative"}}>
                <div style={{backgroundImage: "url(" + props.project.pictures[currentImageIndex]+ ")"}} className={styles.ProjectImage}/>
                <div className={styles.ButtonOverlay}>
                    <button onClick={previousBtnClicked} className={projectButtonStyle}>navigate_before</button>
                    <a target="_blank" href={props.project.repoLink} className={projectButtonStyle}>launch</a>
                    <button onClick={nextBtnClicked} className={projectButtonStyle}>navigate_next</button>
                </div>
            </div>
            <h1 className={styles.ProjectTitle}>{props.project.name}</h1>
            <h1 className={styles.ProjectDesc}>({props.project.languages})</h1>
        </div>
    );
}

export default ProjectItem;