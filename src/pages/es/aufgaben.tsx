import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import { getAllDocsFromDir } from "@/lib/documents";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "es",
  "aufgaben"
);

type Document = {
  name: string;
  url: string;
  year: number;
};

type AufgabenProps = {
  aufgaben: Document[];
};

export async function getStaticProps() {
  return {
    props: {
      aufgaben: await getAllDocsFromDir(
        aufgabenPath,
        "/teaching-assets/es/aufgaben",
        true
      ),
    },
  };
}

const Aufgaben: FC<AufgabenProps> = ({ aufgaben }) => {
  return (
    <Main
      meta={
        <Meta
          title="ES@HTWR-Aufgaben"
          description="Aufgabensammlung plus unsere (schlechten) Lösungen"
        ></Meta>
      }
      institute="es"
    >
      <h1 className="font-roboto text-4xl font-light" id="aufgaben">
        Aufgaben + Eigenlösungen
      </h1>
      <span>
        Wenn jemand bessere Lösugen abgeben will:{" "}
        <a
          target={"_blank"}
          href="mailto:jonas.max.schneider@gmail.com"
          rel="noreferrer"
        >
          jonas.max.schneider@gmail.com
        </a>{" "}
        oder Discord:{" "}
        <a
          target={"_blank"}
          href="https://discordapp.com/users/317018058428514314"
          rel="noreferrer"
        >
          Jonsch318#4006
        </a>
      </span>

      <ul className="ml-8 mt-8 list-disc">
        {aufgaben.map((aufgabe) => {
          return (
            <li key={aufgabe.name}>
              <Link href={aufgabe.url} target={"_blank"}>
                {aufgabe.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <span className="mt-5 block">
        Klausuren gibts <Link href={"/es/klausuren"}>hier</Link> und
        Zusammenfassungen <Link href={"/es/teachings"}>hier.</Link>
      </span>
    </Main>
  );
};

export default Aufgaben;
