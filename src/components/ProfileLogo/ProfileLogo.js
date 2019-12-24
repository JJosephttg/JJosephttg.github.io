import React from 'react';

import styles from './ProfileLogo.module.css';

const ProfileLogo = props => {
    const sizeStyle = {
        height: props.size, 
        width: props.size, 
        backgroundImage: `url(${props.source})`,
    };

    return (
        <div className={[styles.LogoImage, props.className].join(" ")} style={sizeStyle}/>
    );
}

export default ProfileLogo;