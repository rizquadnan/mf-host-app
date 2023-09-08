import Head from 'next/head'
import { Inter } from 'next/font/google'

import HostAppTitle from '@/component/HostAppTitle'
import { RemoteImporter } from '@/component/RemoteImporter';

const inter = Inter({ subsets: ['latin'] })
import { Space, Typography } from 'antd';
const { Title } = Typography;
export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Microfrontend</title>
        <meta
          name="description"
          content="Proof of concept of microfrontend using Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Space direction="vertical" size="middle">
          <Title>NextJs Microfrontend</Title>
          <div>
            <Title level={2}>Local Component</Title>
            <HostAppTitle />
          </div>
          <div>
            <Title level={2}>Remote Component - From remote-one</Title>
            <RemoteImporter
              remote={{
                scope: "remote-one",
                module: "./RemoteOneTitle",
              }}
            />
          </div>
          <div>
            <Title level={2}>
              Remote Component That Has Render Error - From remote-one
            </Title>
            <RemoteImporter
              remote={{
                scope: "remote-one",
                module: "./ComponentWithRenderError",
              }}
            />
          </div>
          <div>
            <Title level={2}>
              Remote Component That Has Handler Error - From remote-one
            </Title>
            <RemoteImporter
              remote={{
                scope: "remote-one",
                module: "./ComponentWithHandlerError",
              }}
            />
          </div>
        </Space>
      </main>
    </>
  );
}
