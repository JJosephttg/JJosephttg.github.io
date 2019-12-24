import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import styles from './NavigationItem.module.css';

const NavigationItem = props => {
    let navItemStyle = [styles.NavItem];
    if(props.location.pathname === props.link) navItemStyle.push(styles.CurrentPage);
    return (
        <Link style={{ textDecoration: 'none'}} to={props.link}>
            <div className={navItemStyle.join(' ')}>
                <i className={["material-icons", styles.NavItemImage].join(' ')}>{props.iconType}</i>
                <p className={styles.NavText}>{props.itemName}</p>
            </div>
        </Link>
    );
}

export default withRouter(NavigationItem);