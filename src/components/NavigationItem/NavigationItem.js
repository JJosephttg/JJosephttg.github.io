import React from 'react';

import styles from './NavigationItem.module.css';

const NavigationItem = props => {
    let navItemStyle = [styles.NavItem];
    if(props.active) navItemStyle.push(styles.CurrentPage);
    return (
        <div className={navItemStyle.join(' ')}>
            <i className={["material-icons", styles.NavItemImage].join(' ')}>{props.iconType}</i>
            <p className={styles.NavText}>{props.itemName}</p>
        </div>
    );
}

export default NavigationItem;