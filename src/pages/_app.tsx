import { Layout, App as AntdApp } from "antd";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const { Header, Footer, Content } = Layout;

import '@/styles/globals.css'
import { Navbar } from "@/component/Navbar";
import { FooterContent } from "@/component/FooterContent";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AntdApp>
      <Layout
        style={{ background: "transparent", minHeight: "100vh" }}
        className={inter.className}
      >
        <Header style={{ background: "transparent", padding: "0px" }}>
          <Navbar />
        </Header>
        <Content style={{ background: "transparent", padding: "24px 50px" }}>
          <Component {...pageProps} />
        </Content>
        <Footer style={{ background: "transparent", padding: "0px" }}>
          <FooterContent />
        </Footer>
      </Layout>
    </AntdApp>
  );
}
