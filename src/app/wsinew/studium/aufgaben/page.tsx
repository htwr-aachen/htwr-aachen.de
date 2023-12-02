import Link from "next/link";
import { join } from "path";

import { HeadLine } from "@/components/rwth/headline";
import { getAllDocsFromDir } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../../Schnellzugriff";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "wsi",
  "aufgaben"
);

export default async function AufgabenPage() {
  const aufgaben = await getAllDocsFromDir(
    aufgabenPath,
    "/teaching-assets/wsi/aufgaben",
    true
  );
  const sonstiges = await getAllDocsFromDir(
    join(process.cwd(), "public", "teaching-assets", "wsi", "uebungen"),
    "/teaching-assets/wsi/uebungen",
    true,
    false
  );
  return (
    <div className="px-2">
      <HeadLine>Aufgaben</HeadLine>
      <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
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
        <div>
          <MaterialienSchnellzugriff />
        </div>
      </div>
    </div>
  );
}
