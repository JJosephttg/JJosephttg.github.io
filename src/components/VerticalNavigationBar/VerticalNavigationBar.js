import React from 'react';

import ProfileLogo from '../ProfileLogo/ProfileLogo';

import styles from './VerticalNavigationBar.module.css';

const VerticalNavigationBar = _ => {
    return (
        <div className={styles.NavigationContainer}>
            <ProfileLogo className={styles.ProfileLogo} size="55px"/>
            <div className={styles.NavigationDivider} />
        </div>
    );
}

export default VerticalNavigationBar;