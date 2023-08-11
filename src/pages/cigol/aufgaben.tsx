import Link from "next/link";
import { join } from "path";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import type { Document } from "@/lib/documents";
import { getAllDocsFromDir } from "@/lib/documents";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "cigol",
  "malo",
  "aufgaben"
);

type AufgabenProps = {
  aufgaben: Document[];
  sonstiges: Document[];
};

export async function getStaticProps() {
  return {
    props: {
      aufgaben: await getAllDocsFromDir(
        aufgabenPath,
        "/teaching-assets/cigol/malo/aufgaben",
        false
      ),
      sonstiges: await getAllDocsFromDir(
        join(
          process.cwd(),
          "public",
          "teaching-assets",
          "cigol",
          "malo",
          "uebungen"
        ),
        "/teaching-assets/cigol/malo/uebungen",
        false
      ),
    },
  };
}

export default function AufgabenPage({ aufgaben, sonstiges }: AufgabenProps) {
  return (
    <Main
      institute="cigol"
      meta={
        <Meta
          title="Aufgaben - CIGOL@HTWR"
          description="MALO ist toller"
        ></Meta>
      }
    >
      <div className="px-2">
        <h1 className="my-2 font-sans text-4xl font-bold">MALO Aufgaben</h1>
        <div className="">
          <h1 className="my-4 text-xl font-medium underline">
            Ich sammle noch keine Sorge
          </h1>

          <div className="mx-2 my-4 lg:m-0">
            <h1 className="my-4 font-sans text-xl font-medium">
              Tutoriumsaufgaben und Lösungen
            </h1>
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
            <h1 className="my-4 font-sans text-xl font-medium">
              Globs und Übungen aus früheren Jahren
            </h1>
            <ul className="ml-8 mt-8 list-disc">
              {sonstiges.map((aufgabe) => {
                return (
                  <li key={aufgabe.name}>
                    <Link href={aufgabe.url} target={"_blank"}>
                      {aufgabe.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
}
