import Head from "next/head";

export default function SYSCOMHead() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        href={`/assets/syscom/apple-touch-icon.png`}
        key="apple"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/assets/syscom/favicon.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/assets/syscom/favicon-16x16.png`}
        key="icon16"
      />
      <link rel="icon" href={`/assets/syscom/favicon.ico`} key="favicon" />
      <link
        rel="icon"
        type="image/png"
        href={`/assets/syscom/favicon.png`}
        sizes="96x96"
      ></link>
    </Head>
  );
}
