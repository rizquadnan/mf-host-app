import { RemoteImporter } from "@/components/RemoteImporter";
import { TUser, getCurrentUser } from "@/features/auth";
import NotAuthenticatedLayout from "@/layouts/NotAuthenticatedLayout";
import { Button, Space, Typography } from "antd";
import React, { ReactElement, useState } from "react";

function TestAuth() {
  const [authAPIRes, setAuthAPIRes] = useState<TUser>();
  const handleCallAuthAPI = async () => {
    try {
      const res = await getCurrentUser();
      setAuthAPIRes(res.data);
    } catch (error) {}
  };

  const handleCallPublicAPI = () => {};
  return (
    <Space direction="vertical">
      <Typography.Title>Test Authentication</Typography.Title>
      <div>
        <Typography.Title level={2}>On Host App</Typography.Title>
        <Space direction="vertical">
          <Button onClick={handleCallAuthAPI}>Call Authenticated API</Button>
          {authAPIRes ? <div>{JSON.stringify(authAPIRes)}</div> : null}
        </Space>

        <Space direction="vertical">
          <Button>Call public API</Button>
        </Space>
      </div>

      <div>
        <Typography.Title level={2}>On Remote One App</Typography.Title>
        <RemoteImporter
          key={1}
          remote={{
            module: "./RemoteOneTestAuth",
            scope: "remote-one",
          }}
        />
      </div>

      <div>
        <Typography.Title level={2}>On Remote Two App</Typography.Title>
        <RemoteImporter
          key={2}
          remote={{
            module: "./RemoteTwoTestAuth",
            scope: "remote-two",
          }}
        />
      </div>
    </Space>
  );
}

TestAuth.withLayout = (page: ReactElement) => {
  return <NotAuthenticatedLayout>{page}</NotAuthenticatedLayout>;
};

export default TestAuth;
