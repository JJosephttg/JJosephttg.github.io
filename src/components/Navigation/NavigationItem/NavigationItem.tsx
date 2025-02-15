import { useLocation, Link } from 'react-router-dom';

import styles from './NavigationItem.module.css';

type Props = {
  link: string;
  iconType: string;
  itemName: string;
};

export function NavigationItem({ link, iconType, itemName }: Props) {
  const location = useLocation();

  let navItemStyle = [styles.NavItem];
  if (location.pathname === link) navItemStyle.push(styles.CurrentPage);

  return (
    <Link style={{ textDecoration: 'none' }} to={link}>
      <div className={navItemStyle.join(' ')}>
        <i className={['material-icons', styles.NavItemImage].join(' ')}>
          {iconType}
        </i>
        <p className={styles.NavText}>{itemName}</p>
      </div>
    </Link>
  );
}
