import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';

import styles from './VerticalNavigationBar.module.css';

const VerticalNavigationBar = props => {
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
            <NavigationItem iconType="perm_identity" itemName="About" link="/"/>
            <NavigationItem iconType="view_comfy" itemName="Work" link="/work"/>
            <NavigationItem iconType="speaker_notes" itemName="Contact" link="/contact"/>  
        </div>
    );
}

export default VerticalNavigationBar;