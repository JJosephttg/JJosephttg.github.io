import React, { useState } from 'react';

import styles from './ProjectItem.module.css';

type Props = {
  project: {
    name: string;
    pictures: string[];
    repoLink: string;
    languages: string;
  };
};

export function ProjectItem({ project }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(currentImageIndex === 0);
  const [isNextDisabled, setIsNextDisabled] = useState(
    currentImageIndex >= project.pictures.length - 1,
  );

  const projectButtonStyleArr = ['material-icons', styles.ProjectButton];

  let nextProjectButtonStyle;
  let prevProjectButtonStyle = (nextProjectButtonStyle =
    projectButtonStyleArr.join(' '));

  if (isNextDisabled)
    nextProjectButtonStyle = [...projectButtonStyleArr, styles.disabled].join(
      ' ',
    );
  if (isPrevDisabled)
    prevProjectButtonStyle = [...projectButtonStyleArr, styles.disabled].join(
      ' ',
    );

  return (
    <div className={styles.ProjectContainer}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            backgroundImage: 'url(' + project.pictures[currentImageIndex] + ')',
          }}
          className={styles.ProjectImage}
        />
        <div className={styles.ButtonOverlay}>
          <button
            disabled={isPrevDisabled}
            onClick={previousBtnClicked}
            className={prevProjectButtonStyle}
          >
            navigate_before
          </button>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={styles.SourceLink}
            href={project.repoLink}
          >
            <button className={projectButtonStyleArr.join(' ')}>launch</button>
          </a>
          <button
            disabled={isNextDisabled}
            onClick={nextBtnClicked}
            className={nextProjectButtonStyle}
          >
            navigate_next
          </button>
        </div>
      </div>
      <h1 className={styles.ProjectTitle}>{project.name}</h1>
      <h1 className={styles.ProjectDesc}>({project.languages})</h1>
    </div>
  );

  function updateIsDisabledButtons(index: number) {
    if (index === 0) setIsPrevDisabled(true);
    else setIsPrevDisabled(false);

    if (index >= project.pictures.length - 1) setIsNextDisabled(true);
    else setIsNextDisabled(false);
  }

  function previousBtnClicked() {
    if (currentImageIndex === 0) return;

    const index = currentImageIndex - 1;
    setCurrentImageIndex(index);
    updateIsDisabledButtons(index);
  }

  function nextBtnClicked() {
    if (currentImageIndex >= project.pictures.length - 1) return;

    const index = currentImageIndex + 1;
    setCurrentImageIndex(index);
    updateIsDisabledButtons(index);
  }
}

export default ProjectItem;
