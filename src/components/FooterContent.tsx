import React from 'react'

import styles from "./FooterContent.module.css"
import { Typography } from 'antd';
export const FooterContent = () => {
  return (
    <div className={styles.wrapper}>
      <Typography.Paragraph style={{ color: "white", margin: 0}}>Made With Love By: @rizquadnan</Typography.Paragraph>
    </div>
  );
}
