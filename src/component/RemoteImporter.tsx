import dynamic, { DynamicOptionsLoadingProps } from "next/dynamic";
import React, { useState } from "react";

import { useRemoteUrl } from "@/utils/useRemoteUrl";
import { loadModule } from "@/utils/loadRemote";
import { getRemoteUrlFromEnv } from "@/utils/getRemoteUrlFromEnv";
import { Button, Space } from "antd";

type TRemote = {
  scope: string;
  module: string;
};

type TErrorComponent = {
  reload: () => void
}

type TRemoteImporter = {
  remote: TRemote;
  loadingComponent?:
    | ((loadingProps: DynamicOptionsLoadingProps) => JSX.Element | null)
    | undefined;
  errorComponent?: (props: TErrorComponent) => React.ReactNode;
};
export const RemoteImporter = (props: TRemoteImporter) => {
  const [remoteKey, setRemoteKey] = useState(0)

  const remoteUrl = getRemoteUrlFromEnv(props.remote.scope);

  const { isReady, isFailed } = useRemoteUrl({ url: remoteUrl, rerunKey: remoteKey });

  const handleReloadComponent = () => setRemoteKey(prev => prev + 1)

  if (isFailed) {
    return (
      props.errorComponent ? props.errorComponent({ reload: handleReloadComponent }) : (
        <Space direction="vertical">
          <p>Something went wrong loading the remote file</p>
          <Button onClick={handleReloadComponent}>
            Click here to try reload
          </Button>
        </Space>
      )
    );
  }

  const LoadingComponent = props.loadingComponent
    ? props.loadingComponent
    : () => <div>Loading...</div>;

  if (!isReady) {
    return <LoadingComponent />;
  }

  const RemoteComponent = dynamic(
    () => loadModule(remoteUrl, props.remote.scope, props.remote.module),
    {
      loading: LoadingComponent,
    }
  );

  return <RemoteComponent key={remoteKey} />;
};
