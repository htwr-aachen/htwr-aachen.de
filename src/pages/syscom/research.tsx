import { Meta } from "@/layouts/Meta";
import { Main } from "@/layouts/syscom/Main";

const Research = () => {
  return (
    <Main
      meta={
        <Meta title="SysCom Research" description="SysCom Research blablabla" />
      }
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
