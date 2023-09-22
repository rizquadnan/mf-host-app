import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { NotificationProvider } from "./notification-provider";

type TAppProvider = {
  children: ReactNode;
};
export const AppProvider = ({ children }: TAppProvider) => {
  return (

      <ThemeProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </ThemeProvider>
  );
};
