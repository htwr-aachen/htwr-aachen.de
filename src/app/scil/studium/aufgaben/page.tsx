import type { Metadata } from "next";
import Link from "next/link";
import { join } from "path";

import { HeadLine } from "@/components/rwth/headline";
import { getAllDocsFromDir } from "@/lib/documents";

import { SCILSchnellzugriff } from "../../schnellzugriff";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "scil",
  "aufgaben"
);

export const metadata: Metadata = {
  title: "Aufgaben",
  description:
    "Aufgabensammlung falls man schon alle Klausuren durchgemacht hat...",
};

export default async function Page() {
  const aufgaben = await getAllDocsFromDir(
    aufgabenPath,
    "/teaching-assets/scil/aufgaben",
    true
  );
  const sonstiges = await getAllDocsFromDir(
    join(process.cwd(), "public", "teaching-assets", "scil", "uebungen"),
    "/teaching-assets/scil/uebungen",
    true
  );
  return (
    <div>
      <div className="px-2">
        <HeadLine>Aufgaben</HeadLine>
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 my-4 lg:m-0">
            <h1 className="my-4 font-sans text-xl font-medium">
              2022 Aufgaben und Lösungen
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
              Sonstige Übungen aus früheren Jahren
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
            <SCILSchnellzugriff />
          </div>
        </div>
      </div>
    </div>
  );
}
