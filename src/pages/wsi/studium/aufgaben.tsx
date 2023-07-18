import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { WSIConfig } from "@/layouts/configs";
import { Meta } from "@/layouts/Meta";
import { WSINavbar } from "@/layouts/rwth/instituteConfig";
import { Main } from "@/layouts/rwth/Main";
import type { Document } from "@/lib/documents";
import { getAllDocsFromDir } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../studium";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "wsi",
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
        "/teaching-assets/wsi/aufgaben",
        true
      ),
      sonstiges: await getAllDocsFromDir(
        join(process.cwd(), "public", "teaching-assets", "wsi", "uebungen"),
        "/teaching-assets/wsi/uebungen",
        true, false
      ),
    },
  };
}

const Aufgaben: FC<AufgabenProps> = ({ aufgaben, sonstiges }) => {
  return (
    <Main
      meta={
        <Meta
          title="Aufgaben | WSI@HTWR"
          description="Aufgabensammlung falls man schon alle Klausuren durchgemacht hat..."
        ></Meta>
      }
      {...WSIConfig}
      navbarConfig={WSINavbar}
    >
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
    </Main>
  );
};

export default Aufgaben;
