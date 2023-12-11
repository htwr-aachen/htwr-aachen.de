import type { Metadata } from "next";
import Link from "next/link";
import { join } from "path";

import { HeadLine } from "@/components/rwth/headline";
import { getAllDocsFromDir } from "@/lib/documents";

import { SIBDSchnellzugriff } from "../../schnellzugriff";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "sibd",
  "dbis",
  "aufgaben"
);

export const metadata: Metadata = {
  title: "Aufgaben",
  description: "DBIS Aufgaben machen Spaß haha",
};

export default async function Page() {
  const aufgaben = await getAllDocsFromDir(
    aufgabenPath,
    "/teaching-assets/sibd/dbis/aufgaben",
    false
  );
  const sonstiges = await getAllDocsFromDir(
    join(
      process.cwd(),
      "public",
      "teaching-assets",
      "sibd",
      "uebungen",
      "dbis"
    ),
    "/teaching-assets/sibd/dbis/uebungen",
    false
  );

  return (
    <div>
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
            <SIBDSchnellzugriff />
          </div>
        </div>
      </div>
    </div>
  );
}
