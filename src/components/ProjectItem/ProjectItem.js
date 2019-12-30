import React, { useState } from 'react';

import styles from './ProjectItem.module.css';

const ProjectItem = props => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigationClickedHandler = isNext => {
        setCurrentImageIndex(currentImageIndex + (isNext === true ? 1 : -1));
    }

    const projectButtonStyle = ["material-icons", styles.ProjectButton].join(' ');
    return (
        <div className={styles.ProjectContainer}>
            <div style={{position: "relative"}}>
                <div style={{backgroundImage: props.project.pictures[currentImageIndex]}} className={styles.ProjectImage}/>
                <div className={styles.ButtonOverlay}>
                    <button className={projectButtonStyle}>navigate_before</button>
                    <button style={{fontSize: "1.2rem"}} className={projectButtonStyle}>launch</button>
                    <button className={projectButtonStyle}>navigate_next</button>
                </div>
            </div>
            <h1 className={styles.ProjectTitle}>{props.project.name}</h1>
            <h1 className={styles.ProjectDesc}>({props.project.languages})</h1>
        </div>
    );
}

export default ProjectItem;