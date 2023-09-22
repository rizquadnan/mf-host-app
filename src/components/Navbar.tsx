import React from 'react'

import styles from "./Navbar.module.css"
import Link from 'next/link';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/auth';
export const Navbar = () => {
  const authStore = useAuthStore()
  const router = useRouter()
  const onLogout = async () => {
    try {
      await authStore.doLogout()
      router.push("/login")
    } catch (error) {
      alert("Failed to logout")
    }
  }
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/dashboard">Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/test-auth">Test Authenticated API Calls</Link>
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
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
}
