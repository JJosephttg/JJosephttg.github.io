import React, { useState } from 'react';

import ProfileLogo from '../../components/ProfileLogo/ProfileLogo';

import profilePicture from '../../assets/PortfolioSelfPic.jpg';

import styles from './AboutPage.module.css';

const AboutPage = _ => {
    const [currentText, setCurrentText] = useState("Click/Hover over one of the highlighted letters in my name to learn more about me!");
    
    const wordDescDict = {
        Adaptable: `Adaptable. As a developer, I want to be able to make and maintain a product from the ground
            up. This means being able to adapt to new technologies and languages. I am quick and eager to learn 
            new things and I am always willing to expand upon my existing knowledge to create something exciting
            and new!`,
        Efficient: `Efficient. I am a huge believer of making sure that code I write is as simple and clean as possible. 
            I usually have to rethink a solution a couple times over to make sure that I am organized, 
            efficient in all aspects, and that revisiting it later on won't be a pain to deal with.`,
        Passionate: `Passionate. I love doing what I do! It is nice to be challenged once in a while, 
            and I always put in my best effort when working on a project!`
    }

    const letterClickHandler = (word) => {
        setCurrentText(wordDescDict[word]);
    }

    return (
        <section>
            <ProfileLogo className={styles.SelfPicture} source={profilePicture} size="10rem"/>
            <h1 className={styles.Title}>
                Joshu
                <span className={styles.Letter} onClick={() => letterClickHandler("Adaptable")}>a</span>
                <span> </span>
                Jos
                <span className={styles.Letter} onClick={() => letterClickHandler("Efficient")}>e</span>
                <span className={styles.Letter} onClick={() => letterClickHandler("Passionate")}>p</span>
                h
            </h1>
            <div className={styles.Divider} />
            <p className={styles.Description}>{currentText}</p>
        </section> 
    );
}

export default AboutPage;