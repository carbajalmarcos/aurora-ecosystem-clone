import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: ADD TITLE IMAGE */}
        <title>Aurora</title>
        <meta name="description" content="Aurora Ecosystem clone" />
      </Head>
      {/* //TODO : TENEMOS QUE SACAR ESTE MAIN */}
      <main className="relative antialiased bg-aurora-black">
          <Component {...pageProps} />
      </main>
    </>
  );
}
