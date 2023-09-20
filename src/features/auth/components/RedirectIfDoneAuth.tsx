import { useAuthStoreCSR } from "@/stores/auth";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { getAuthStatus } from "../utils";
import { Spin } from "@/components/Spin";

import styles from "./style.module.css";

type TRedirectIfAuthenticated = {
  children: ReactNode;
  authorizedRedirectUrl?: string;
  loadingState?: ReactNode;
};
export const RedirectIfDoneAuth = (props: TRedirectIfAuthenticated) => {
  const authStore = useAuthStoreCSR();

  const router = useRouter();
  useEffect(() => {
    if (!router || !authStore) return;

    if (getAuthStatus(authStore) === "authenticated") {
      // router.push(props.authorizedRedirectUrl ?? "/");
      return;
    }
  }, [router, authStore, props.authorizedRedirectUrl]);

  if (authStore && getAuthStatus(authStore) === "not-authenticated") {
    return <>{props.children}</>;
  }

  return <></>;
};
