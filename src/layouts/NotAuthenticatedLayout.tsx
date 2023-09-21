import React, { ReactNode } from "react";
import LayoutBase from "./LayoutBase";

type NotAuthenticatedLayoutProps = {
  children: ReactNode;
};
const NotAuthenticatedLayout = (props: NotAuthenticatedLayoutProps) => {
  return <LayoutBase isAuthenticated={false}>{props.children}</LayoutBase>;
};

export default NotAuthenticatedLayout;
