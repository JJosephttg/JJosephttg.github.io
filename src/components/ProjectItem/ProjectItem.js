import React, { useState } from 'react';

import styles from './ProjectItem.module.css';

const ProjectItem = props => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPrevDisabled, setIsPrevDisabled] = useState(currentImageIndex === 0);
    const [isNextDisabled, setIsNextDisabled] = useState(currentImageIndex >= props.project.pictures.length-1);

    const updateIsDisabledButtons = index => {
        //console.log("Current Image Index: " + index);
        if(index === 0) setIsPrevDisabled(true);
        else setIsPrevDisabled(false);

        if(index >= props.project.pictures.length - 1) setIsNextDisabled(true);
        else setIsNextDisabled(false);
    }

    const previousBtnClicked = _ => {
        if(currentImageIndex === 0) return;

        var index = currentImageIndex - 1;
        setCurrentImageIndex(index);
        updateIsDisabledButtons(index);
    }

    const nextBtnClicked = _ => {
        if(currentImageIndex >= props.project.pictures.length - 1) return;

        var index = currentImageIndex + 1;
        setCurrentImageIndex(index);
        updateIsDisabledButtons(index);
    }

    const projectButtonStyleArr = ["material-icons", styles.ProjectButton];

    let nextProjectButtonStyle;
    let prevProjectButtonStyle = nextProjectButtonStyle = projectButtonStyleArr.join(' ');

    if(isNextDisabled) nextProjectButtonStyle = [...projectButtonStyleArr, styles.disabled].join(' ');
    if(isPrevDisabled) prevProjectButtonStyle = [...projectButtonStyleArr, styles.disabled].join(' ');
    
    return (
        <div className={styles.ProjectContainer}>
            <div style={{position: "relative"}}>
                <div style={{backgroundImage: "url(" + props.project.pictures[currentImageIndex]+ ")"}} className={styles.ProjectImage}/>
                <div className={styles.ButtonOverlay}>
                    <button disabled={isPrevDisabled} onClick={previousBtnClicked} className={prevProjectButtonStyle}>navigate_before</button>
                    <a rel="noopener noreferrer" target="_blank" className={styles.SourceLink} href={props.project.repoLink}><button className={projectButtonStyleArr.join(' ')}>launch</button></a>
                    <button disabled={isNextDisabled} onClick={nextBtnClicked} className={nextProjectButtonStyle}>navigate_next</button>
                </div>
            </div>
            <h1 className={styles.ProjectTitle}>{props.project.name}</h1>
            <h1 className={styles.ProjectDesc}>({props.project.languages})</h1>
        </div>
    );
}

export default ProjectItem;