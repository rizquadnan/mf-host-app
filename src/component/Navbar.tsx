import React from 'react'

import styles from "./Navbar.module.css"
import Link from 'next/link';
export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">Dynamic Page</Link>
        </li>
      </ul>
    </div>
  );
}
