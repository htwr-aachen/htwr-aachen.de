import Head from "next/head";

export function HTWRHead() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/assets/rwth/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/assets/rwth/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/assets/rwth/favicon/favicon-16x16.png`}
      />
      <link rel="manifest" href="/assets/rwth/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href={`/assets/rwth/favicon/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <link rel="shortcut icon" href={`/assets/rwth/favicon/favicon.ico`} />
      <meta name="apple-mobile-web-app-title" content="htwr-aachen" />
      <meta name="application-name" content="htwr-aachen" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content={`/assets/rwth/favicon/browserconfig.xml`}
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
