import Head from "next/head";
import { Inter } from "next/font/google";

import HostAppTitle from "@/components/HostAppTitle";
import { RemoteImporter } from "@/components/RemoteImporter";

const inter = Inter({ subsets: ["latin"] });
import { Space, Typography } from "antd";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { ReactElement } from "react";
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
          <Space direction="vertical" size="middle">
            <Title level={2}>Remote Components From remote-one</Title>
            <div>
              <Title level={3}>Title</Title>
              <RemoteImporter
                remote={{
                  scope: "remote-one",
                  module: "./RemoteOneTitle",
                }}
              />
            </div>
            <div>
              <Title level={3}>Remote Component That Has Render Error</Title>
              <RemoteImporter
                remote={{
                  scope: "remote-one",
                  module: "./ComponentWithRenderError",
                }}
              />
            </div>
            <div>
              <Title level={3}>Remote Component That Has Handler Error</Title>
              <RemoteImporter
                remote={{
                  scope: "remote-one",
                  module: "./ComponentWithHandlerError",
                }}
              />
            </div>
          </Space>
          <Space direction="vertical" size="middle">
            <Title level={2}>Remote Components From remote-two</Title>
            <div>
              <Title level={3}>Title</Title>
              <RemoteImporter
                remote={{
                  scope: "remote-two",
                  module: "./RemoteTwoTitle",
                }}
              />
            </div>
            <div>
              <Title level={3}>Remote Component That Has Render Error</Title>
              <RemoteImporter
                remote={{
                  scope: "remote-two",
                  module: "./ComponentWithRenderError",
                }}
              />
            </div>
            <div>
              <Title level={3}>Remote Component That Has Handler Error</Title>
              <RemoteImporter
                remote={{
                  scope: "remote-two",
                  module: "./ComponentWithHandlerError",
                }}
              />
            </div>
          </Space>
        </Space>
      </main>
    </>
  );
}

Home.withLayout = (page: ReactElement) => {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};
