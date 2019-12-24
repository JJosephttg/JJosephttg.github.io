import React from 'react';

import styles from './NavigationItem.module.css';

const NavigationItem = props => {
    return (
        <div className={styles.NavItem}>
            <i className={["material-icons", styles.NavItemImage].join(' ')}>{props.iconType}</i>
            <p className={styles.NavText}>{props.itemName}</p>
        </div>
    );
}

export default NavigationItem;