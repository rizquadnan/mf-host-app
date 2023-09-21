import React from 'react'
import { Layout as AntdLayout } from "antd";
import { Inter } from 'next/font/google'

import { Navbar } from "@/components/Navbar";
import { FooterContent } from "@/components/FooterContent";

const { Header, Footer, Content } = AntdLayout;
const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode,
  isAuthenticated: boolean
}
const LayoutBase = (props: LayoutProps) => {
  return (
    <AntdLayout
      style={{ background: "transparent", minHeight: "100vh" }}
      className={inter.className}
    >
      {props.isAuthenticated ? (
        <Header style={{ background: "transparent", padding: "0px" }}>
          <Navbar />
        </Header>
      ) : null}

      <Content style={{ background: "transparent", padding: "24px 50px" }}>
        {props.children}
      </Content>
      
      <Footer style={{ background: "transparent", padding: "0px" }}>
        <FooterContent />
      </Footer>
    </AntdLayout>
  );
}

export default LayoutBase;