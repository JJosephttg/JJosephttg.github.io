import React from 'react';

import styles from './ProfileLogo.module.css';

import logo from '../../assets/PortfolioSelfPic.jpg';

const ProfileLogo = props => {
    const sizeStyle = {
        height: props.size, 
        width: props.size, 
        backgroundImage: `url(${logo})`,
    };

    return (
        <div className={[styles.LogoImage, props.className].join(" ")} style={sizeStyle}/>
    );
}

export default ProfileLogo;