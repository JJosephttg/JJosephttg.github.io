import React, { Fragment } from 'react';

import ProfileLogo from '../../components/ProfileLogo/ProfileLogo';

import profilePicture from '../../assets/PortfolioSelfPic.jpg';

import styles from './AboutPage.module.css';

const AboutPage = _ => {
    const currentText = "Click/Hover over one of the highlighted letters in my name to learn more about me!"
    return (
        <Fragment>
            <section>
                <ProfileLogo className={styles.SelfPicture} source={profilePicture} size="10rem"/>
                <h1 className={styles.Title}>Joshua Joseph</h1>
                <div className={styles.Divider} />
                {//<p className={styles.Description}>{currentText}</p>
                }
            </section>   
        </Fragment>
    );
}

export default AboutPage;