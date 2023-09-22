import { RemoteImporter } from "@/components/RemoteImporter";
import { TUser, getCurrentUser } from "@/features/auth";
import { hello } from "@/features/hello";
import { THelloResponse } from "@/features/hello/type";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import NotAuthenticatedLayout from "@/layouts/NotAuthenticatedLayout";
import { Button, Space, Typography } from "antd";
import React, { ReactElement, useState } from "react";

function TestAuth() {
  const [authAPIRes, setAuthAPIRes] = useState<TUser>();
  const [publicAPIRes, setPublicAPIRes] = useState<THelloResponse>()
  const handleCallAuthAPI = async () => {
    try {
      const res = await getCurrentUser();
      setAuthAPIRes(res.data);
    } catch (error) {
      alert("Failed to get current user")
    }
  };

  const handleCallPublicAPI = async () => {
    try {
      const res = await hello();
      setPublicAPIRes(res.data)
    } catch (error) {
      alert("Failed to call public api")
    }
  };

  return (
    <Space direction="vertical">
      <Typography.Title>Test Authentication</Typography.Title>
      <Space direction="vertical">
        <Typography.Title level={2}>On Host App</Typography.Title>
        <Space direction="vertical">
          <Button onClick={handleCallAuthAPI}>Call Authenticated API</Button>
          {authAPIRes ? <pre>{JSON.stringify(authAPIRes)}</pre> : null}
        </Space>

        <Space direction="vertical">
          <Button onClick={handleCallPublicAPI}>Call public API</Button>
          {publicAPIRes ? <pre>{JSON.stringify(publicAPIRes)}</pre> : null}
        </Space>
      </Space>

      <Space direction="vertical">
        <Typography.Title level={2}>On Remote One App</Typography.Title>
        <RemoteImporter
          key={1}
          remote={{
            module: "./RemoteOneTestAuth",
            scope: "remote-one",
          }}
        />
      </Space>

      <Space direction="vertical">
        <Typography.Title level={2}>On Remote Two App</Typography.Title>
        <RemoteImporter
          key={2}
          remote={{
            module: "./RemoteTwoTestAuth",
            scope: "remote-two",
          }}
        />
      </Space>
    </Space>
  );
}

TestAuth.withLayout = (page: ReactElement) => {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

TestAuth.isProtected = true

export default TestAuth;
