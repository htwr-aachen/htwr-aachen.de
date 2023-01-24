import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Syscom - Das besser ComSys"
          description="Für alle die nichts besseres zu tun haben als Datcom zu lernen"
        />
      }
    >
      <h1 className="font-sans text-3xl font-bold"> Was suchst du hier? </h1>
      <Link href={"/"}>Geh zurück zur den Lösungen</Link>
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
