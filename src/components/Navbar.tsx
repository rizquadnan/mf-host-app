import React from 'react'

import styles from "./Navbar.module.css"
import Link from 'next/link';
import { Button } from 'antd';
import { logout } from '@/features/auth';
import { useRouter } from 'next/router';
export const Navbar = () => {
  const router = useRouter()
  const onLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (error) {
      alert("Failed to logout")
    }
  }
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
        <li className={styles.listItem}>
          <Link href="/remote-two-components/two">
            DynamicPageTest/remote-two/two
          </Link>
        </li>
      </ul>
      <Button onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}
