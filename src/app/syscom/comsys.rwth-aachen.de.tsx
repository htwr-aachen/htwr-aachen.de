import type { Metadata } from "next";
import Link from "next/link";

import { Main } from "@/layouts/rwth/Main";

export const metadata: Metadata = {
  title: "Syscom - Danke für die Domain",
  description: "Datkom ist ein gutes Fach",
};

const Index = () => {
  return (
    <Main institute="syscom">
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
