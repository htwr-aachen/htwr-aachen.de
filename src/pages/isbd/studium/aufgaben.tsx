import Link from "next/link";
import { join } from "path";

import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import type { Document } from "@/lib/documents";
import { getAllDocsFromDir } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "..";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "isbd",
  "dbis",
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
        "/teaching-assets/isbd/dbis/aufgaben",
        false
      ),
      sonstiges: await getAllDocsFromDir(
        join(
          process.cwd(),
          "public",
          "teaching-assets",
          "isbd",
          "uebungen",
          "dbis"
        ),
        "/teaching-assets/isbd/dbis/uebungen",
        false
      ),
    },
  };
}

export default function AufgabenPage({ aufgaben, sonstiges }: AufgabenProps) {
  return (
    <Main
      institute="isbd"
      meta={<Meta title="ISBD@HTWR" description="DBIS ist toll"></Meta>}
    >
      <div className="px-2">
        <HeadLine>DBIS Aufgaben</HeadLine>
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 my-4 lg:m-0">
            <h1 className="my-4 font-sans text-xl font-medium">
              Tutoriumsaufgaben und Lösungen gibt leider kaum welche
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
          <div>
            <MaterialienSchnellzugriff />
          </div>
        </div>
      </div>
    </Main>
  );
}
