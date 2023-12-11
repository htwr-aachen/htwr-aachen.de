import Link from "next/link";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Syscom - Das besser ComSys"
          description="Für alle die nichts besseres zu tun haben als Datcom zu lernen"
        />
      }
      institute="syscom"
    >
      <h1 className="font-sans text-3xl font-bold"> Was suchst du hier? </h1>
      <Link href={"/syscom/"}>Geh zurück zur den Lösungen</Link>
      <span>
        fallst du mir Vorschläge geben willst gerne an{" "}
        <a href="jonas.max.schneider@gmail.com">
          jonas.max.schneider@gmail.com
        </a>
      </span>
    </Main>
  );
};

export default Index;
