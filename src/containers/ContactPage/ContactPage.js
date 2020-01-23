import React, { Fragment } from 'react';

import styles from './ContactPage.module.css';

const ContactPage = _ => (
    <Fragment>
        <h1 className={styles.Title}>Contact</h1>
        <div className={styles.Divider}/>
        <div className={styles.ContactContainer}>
            <h1>Contact Me!</h1>
            <p>Email: <a className={styles.ContactLink} href="mailto:jjosephttg@gmail.com">jjosephttg@gmail.com</a></p>
            <p>Phone Number: <a className={styles.ContactLink} href="tel:+18108744904">1-810-874-4904</a></p>
        </div>
    </Fragment>
);

export default ContactPage;