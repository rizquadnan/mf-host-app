import dynamic, { DynamicOptionsLoadingProps } from "next/dynamic";
import React from "react";

import { useRemoteUrl } from "@/utils/useRemoteUrl";
import { loadModule } from "@/utils/loadRemote";
import { getRemoteUrlFromEnv } from "@/utils/getRemoteUrlFromEnv";

type TRemote = {
  scope: string;
  module: string;
};

type TRemoteLoader = {
  remote: TRemote;
  loadingComponent?:
    | ((loadingProps: DynamicOptionsLoadingProps) => JSX.Element | null)
    | undefined;
  errorComponent?: React.ReactNode;
};
export const RemoteLoader = (props: TRemoteLoader) => {
  const remoteUrl = getRemoteUrlFromEnv(props.remote.scope);

  const { isReady, isFailed } = useRemoteUrl(remoteUrl);

  if (isFailed) {
    return (
      props.errorComponent ?? (
        <p>Something went wrong loading the remote file</p>
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

  return <RemoteComponent />;
};
