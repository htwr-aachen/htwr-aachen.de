import type { Metadata } from "next";
import Link from "next/link";
import { join } from "path";

import { ExamNotice } from "@/components/scrap/ExamNotice";
import TeachingList from "@/components/teachings/List";
import { getAllDocsFromDir, getProtectedDownloads } from "@/lib/documents";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "syscom",
  "aufgaben"
);

export const metadata: Metadata = {
  title: "Alles rund um datkom",
  description: "Gern geschehen",
  alternates: {
    canonical: "/syscom/studium/teachings",
  },
};

export default async function Page() {
  const aufgaben = await getAllDocsFromDir(
    aufgabenPath,
    "/teaching-assets/syscom/afugaben"
  );

  const klausuren = await getProtectedDownloads("datkom");

  return (
    <div>
      <h1>Liste von Hilfen:</h1>

      <p>
        Wehrle einer beschwert sich über Rechtschreib- und Grammatikfehler! Fix
        die{" "}
        <Link href={"https://github.com/jonsch318/htwr-aachen.de"}>
          https://github.com/jonsch318/htwr-aachen.de
        </Link>{" "}
        selber.{" "}
      </p>

      <p>
        <Link
          href={"https://fastupload.io/Q3atHhGZ7nBCyde/file"}
          target={"_blank"}
        >
          Zusammengesetzte Vorlesungsfolien (fastupload kostet mich nichts)
        </Link>{" "}
        <br />
        <Link
          href={"/teaching-assets/syscom/folien-combined.pdf"}
          target={"_blank"}
        >
          Zusammengesetzte Vorlesungsfolien (45Mb jedes mal :[...)
        </Link>
      </p>

      <p>Erklärungen in ihrem eigenen Stil</p>

      <TeachingList subject="datkom" />

      <ExamNotice></ExamNotice>
      <ul className="ml-8 list-disc">
        {klausuren.map((klausur) => {
          return (
            <li key={klausur}>
              <Link
                href={{
                  pathname: "/protected-download",
                  query: { file: klausur },
                }}
                target="_blank"
              >
                {klausur}
              </Link>
            </li>
          );
        })}
      </ul>

      <h2 id="aufgaben">Und weil es möglich ist auch alle Aufgabenblätter</h2>

      <ul className="ml-8 list-disc">
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

      <ul className="ml-8 list-disc">
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
    </div>
  );
}
