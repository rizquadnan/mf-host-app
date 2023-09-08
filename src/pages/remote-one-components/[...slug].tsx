import { RemoteImporter } from "@/component/RemoteImporter";
import { Space, Typography } from "antd";
import { useRouter } from "next/router";
import React from "react";

const { Title } = Typography;
const Page = () => {
  const router = useRouter();

  return (
    <Space direction="vertical" size="middle">
      <Title>Dynamic Page Remote One Components</Title>
      <p>
        This test loading remote app from dynamic page.{" "}
        <span style={{ color: "blue", fontWeight: 600 }}>
          Slug: {router.query.slug}
        </span>
      </p>
      <Space direction="vertical">
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
    </Space>
  );
};

export default Page;
