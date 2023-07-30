import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const Research = () => {
  return (
    <Main
      meta={
        <Meta title="SysCom Research" description="SysCom Research blablabla" />
      }
      institute="syscom"
    >
      <h1>Leer :/</h1>
      <iframe
        allow="fullscreen"
        frameBorder="0"
        src="https://giphy.com/embed/B0qMsfOnowZWcFkWEj/video"
        width="480"
      ></iframe>
    </Main>
  );
};

export default Research;
