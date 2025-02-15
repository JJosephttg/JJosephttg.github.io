import { NavigationItem } from '../NavigationItem/NavigationItem';

import styles from './VerticalNavigationBar.module.css';

export function VerticalNavigationBar() {
  return (
    <div className={styles.NavigationContainer}>
      <h1 className={styles.NavigationMenuTitle}>Menu</h1>
      <div className={styles.NavigationDivider} />
      <NavigationItem iconType="perm_identity" itemName="About" link="/" />
      <NavigationItem
        iconType="view_comfy"
        itemName="Projects"
        link="/projects"
      />
      <NavigationItem
        iconType="speaker_notes"
        itemName="Contact"
        link="/contact"
      />
    </div>
  );
}
