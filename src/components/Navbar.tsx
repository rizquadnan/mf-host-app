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
          <Link href="/remote-one-components/one">
            DynamicPageTest/remote-one/one
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/remote-one-components/two">
            DynamicPageTest/remote-one/two
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/remote-two-components/one">
            DynamicPageTest/remote-two/one
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/remote-two-components/two">
            DynamicPageTest/remote-two/two
          </Link>
        </li>
      </ul>
    </div>
  );
}
