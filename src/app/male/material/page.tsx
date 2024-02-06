import type { Metadata } from "next";
import Link from "next/link";
import { join } from "path";

import { HeadLine } from "@/components/rwth/headline";
import { getAllDocsFromDir } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../Schnellzugriff";

async function getData() {
  const folien = getAllDocsFromDir(
    join(process.cwd(), "public", "teaching-assets", "male", "folien"),
    "/teaching-assets/male/folien",
    false
  );
  const aufgaben = getAllDocsFromDir(
    join(process.cwd(), "public", "teaching-assets", "male", "aufgaben"),
    "/teaching-assets/male/folien",
    false
  );

  return {
    folien: await folien,
    aufgaben: await aufgaben,
  };
}

export const metadata: Metadata = {
  title: "Material",
  description:
    "KI, Blockchain, Digital Transformation, Web 4.0, 5G, AGI, Smart City",
  alternates: {
    canonical: "/male/material",
  },
};

export default async function TeachingsPage() {
  const { folien, aufgaben } = await getData();

  return (
    <div className="px-3">
      <HeadLine title="Vorlesungsmaterialien" />

      <div className="grid grid-flow-row-dense grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_250px] lg:grid-rows-[auto_auto]">
        <div className="">
          <h1 className="font-sans text-4xl font-light" id="folien-merge">
            Vorlesungsfolien / Script
          </h1>

          <p className="my-2">It's stocha time.</p>

          <ul className="my-2 ml-8 list-disc">
            <li>
              <a
                target={"_blank"}
                href="/teaching-assets/male/folien-merged.pdf"
              >
                Folienmerge
              </a>
            </li>
            <li>
              <a target={"_blank"} href="https://panikzettel.htwr-aachen.de">
                Panikzettel
              </a>
            </li>
          </ul>

          <h2 className="font-sans text-4xl font-light" id="folien">
            Alle Folien
          </h2>

          <ul className="my-2 ml-8 list-disc">
            {folien.map((doc) => {
              return (
                <li key={doc.name}>
                  <Link href={doc.url} target={"_blank"}>
                    {doc.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <h2 className="font-sans text-4xl font-light" id="folien">
            Aufgaben
          </h2>

          <ul className="my-2 ml-8 list-disc">
            {aufgaben.map((doc) => {
              return (
                <li key={doc.name}>
                  <Link href={doc.url} target={"_blank"}>
                    {doc.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <MaterialienSchnellzugriff />
      </div>
    </div>
  );
}
