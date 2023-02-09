import { readdir } from "fs/promises";
import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import type { TeachingMeta } from "@/lib/teachings";
import { getAllTeachings } from "@/lib/teachings";
import { Main } from "@/templates/syscom/Main";

type Document = {
  name: string;
  url: string;
};

const klausurPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "syscom",
  "klausuren"
);
const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "syscom",
  "aufgaben"
);

export const TeachingsDirectory = join(
  process.cwd(),
  "src",
  "teachings",
  "syscom"
);

export async function getStaticProps() {
  let err = false;
  let klausuren: Document[] = [];
  try {
    const klausurFiles = await readdir(klausurPath, {});
    klausuren = klausurFiles.map((file) => {
      return {
        name: file
          .replace(".pdf", "")
          .replaceAll("ss", "Sommersemester")
          .replaceAll("ws", "Wintersemester")
          .replaceAll("wdh", "Wiederholungsklausur")
          .replaceAll("lsg", "mit-Lösungen"),
        url: `/teaching-assets/syscom/klausuren/${file}`,
      };
    });
  } catch (error) {
    err = true;
  }

  let aufgaben: Document[] = [];
  try {
    const aufgabenFiles = await readdir(aufgabenPath, {});
    aufgaben = aufgabenFiles.map((file) => {
      return {
        name: file.replace(".pdf", ""),
        url: `/teaching-assets/syscom/aufgaben/${file}`,
      };
    });
  } catch (error) {
    err = true;
  }

  const docs = await getAllTeachings(TeachingsDirectory);
  return {
    props: {
      docs,
      klausuren,
      aufgaben,
    },
    notFound: err,
  };
}

type TeachingProps = {
  docs: TeachingMeta[];
  klausuren: Document[];
  aufgaben: Document[];
};

const Teaching: FC<TeachingProps> = ({ docs, klausuren, aufgaben }) => {
  return (
    <Main
      meta={
        <Meta
          title="SysCom Teachings"
          description="Eine Sammlung von Lernhilfen, Aufgaben und sonstiges vorallem für DatKom"
        />
      }
    >
      <h1>Liste von Hilfen:</h1>

      <p>
        Wehrle einer beschwert sich über Rechtschreib- und Grammatikfehler! Fix
        die{" "}
        <Link href={"https://github.com/JohnnyS318/htwr-aachen.de"}>
          https://github.com/JohnnyS318/htwr-aachen.de
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

      <ul className="ml-8 list-disc">
        {docs.map((teaching) => {
          return (
            <li key={teaching.slug}>
              <Link href={`/syscom/teachings/${teaching.slug}`}>
                {teaching.meta.fullTitle}
              </Link>
            </li>
          );
        })}
      </ul>

      <h2 id="klausuren">
        So jetzt gibts noch Klausuren zum Download (alle die ich gefunden habe)
        schickt <Link href={"/syscom/contact"}>mir</Link> gerne mehr.
      </h2>
      <ul className="ml-8 list-disc">
        {klausuren.map((klausur) => {
          return (
            <li key={klausur.name}>
              <Link href={klausur.url} target={"_blank"}>
                {klausur.name}
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

      <h2 id="klausuren">
        So jetzt gibts noch Klausuren zum Download (alle die ich gefunden habe)
        schickt <Link href={"/syscom/contact"}>mir</Link> gerne mehr.
      </h2>
      <ul className="ml-8 list-disc">
        {klausuren.map((klausur) => {
          return (
            <li key={klausur.name}>
              <Link href={klausur.url} target={"_blank"}>
                {klausur.name}
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
    </Main>
  );
};

export default Teaching;
