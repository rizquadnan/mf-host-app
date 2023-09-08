import Head from 'next/head'
import { Inter } from 'next/font/google'

import HostAppTitle from '@/component/HostAppTitle'
import { RemoteLoader } from '@/component/RemoteLoader';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <h1>Next Js Microfrontend</h1>
        <div>
          <h2>Local Component</h2>
          <HostAppTitle />
        </div>
        <div>
          <h2>Remote Component - From remote-one</h2>
          <RemoteLoader
            remote={{
              scope: "remote-one",
              module: "./RemoteOneTitle",
            }}
          />
        </div>
        <div>
          <h2>Remote Component That Has Render Error - From remote-one</h2>
          <RemoteLoader
            remote={{
              scope: "remote-one",
              module: "./ComponentWithRenderError",
            }}
          />
        </div>
        <div>
          <h2>Remote Component That Has Handler Error - From remote-one</h2>
          <RemoteLoader
            remote={{
              scope: "remote-one",
              module: "./ComponentWithHandlerError",
            }}
          />
        </div>
      </main>
    </>
  );
}