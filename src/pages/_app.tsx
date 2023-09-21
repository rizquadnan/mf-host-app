import type { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

import { Protected, RedirectIfDoneAuth } from "@/features/auth";
import '@/styles/globals.css'

type NextPageExtended = NextPage & {
  withLayout?: (page: ReactElement) => ReactNode;
  isProtected?: boolean;
  redirectIfDoneAuth?: boolean;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageExtended;
};
function App({ Component, pageProps }: AppPropsWithLayout) {
  const withLayout = Component.withLayout ?? ((page) => page);
  const isProtected = Component.isProtected ?? false;
  const redirectIfDoneAuth = Component.redirectIfDoneAuth ?? false;

  const pageContent = withLayout(<Component {...pageProps} />);

  return (
    <>
      <Head>
        <title>Microfrontend Host App</title>
        <meta name="description" content="Proof of concept for Next.js microfrontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {isProtected ? (
          <Protected>{pageContent}</Protected>
        ) : redirectIfDoneAuth ? (
          <RedirectIfDoneAuth>{pageContent}</RedirectIfDoneAuth>
        ) : (
          pageContent
        )}
      </>
    </>
  );
}

// App.getInitialProps = async ({ Component, ctx }: any) => {
//   let pageProps = { profile: {} };
//   let { token } = parseCookies(ctx);

//   if (!token) {
//     destroyCookie(ctx, "token");
//   } else {
//     const res = await axios.get(`${process.env.API_SOURCE}/profiles`, {
//       withCredentials: true,
//       headers: { Cookie: `token=${token}` },
//     });
//     pageProps.profile = await res.data?.data;
//     if (Component.getServerSideProps) {
//       pageProps = await Component.getServerSideProps(ctx);
//     }
//   }
//   return { pageProps };
// };

export default App;
