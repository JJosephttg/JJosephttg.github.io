import React from 'react';

import ProfileLogo from '../ProfileLogo/ProfileLogo';
import NavigationItem from '../NavigationItem/NavigationItem';

import profilePic from '../../assets/PortfolioSelfPic.jpg';

import styles from './VerticalNavigationBar.module.css';

const VerticalNavigationBar = _ => {
    return (
        <div className={styles.NavigationContainer}>
            <div className={styles.MenuButtonContainer}>
                <i className={["material-icons", styles.MenuButton].join(' ')}>menu</i>
                <svg width="40" height="40">
                    <circle className={styles.OutlineCircle} r="19" cx="20" cy="20" fill="transparent"/>
                    <circle className={styles.ProgressCircle} r="19" cx="20" cy="20" fill="transparent"/>
                </svg> 
            </div>
            <div className={styles.NavigationDivider} />
            <NavigationItem active iconType="perm_identity" itemName="About"/>
            <NavigationItem iconType="view_comfy" itemName="Work"/>
            <NavigationItem iconType="speaker_notes" itemName="Contact"/>  
        </div>
    );
}

export default VerticalNavigationBar;