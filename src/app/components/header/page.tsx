// components/Header.js

import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1><i>Z</i>'s Site </h1>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
