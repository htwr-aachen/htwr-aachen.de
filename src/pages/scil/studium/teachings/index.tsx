import type { GetStaticProps } from "next";
import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { Meta } from "@/layouts/Meta";
import type { Document } from "@/lib/documents";
import { getAllDocsFromDir } from "@/lib/documents";
import type { TeachingMeta } from "@/lib/teachings";
import { getAllTeachings } from "@/lib/teachings";
import { Main } from "@/templates/scil/Main";

import { MaterialienSchnellzugriff } from "../../studium";

export const TeachingsDirectory = join(
  process.cwd(),
  "src",
  "teachings",
  "scil"
);

type TeachingsProps = {
  docs: TeachingMeta[];
  folien: Document[];
};

export const getStaticProps: GetStaticProps = async () => {
  const folien = getAllDocsFromDir(
    join(process.cwd(), "public", "teaching-assets", "scil", "folien"),
    "/teaching-assets/scil/folien",
    false
  );

  const docs = getAllTeachings(TeachingsDirectory);

  return {
    props: {
      docs: await docs,
      folien: await folien,
    },
  };
};

const Teachings: FC<TeachingsProps> = ({ docs, folien }) => {
  return (
    <Main
      meta={
        <Meta
          title="SCIL@HTWR-Teachings"
          description="Eine schlechte Sammlung von schlechten Zusammenfassungen für BuK"
        ></Meta>
      }
    >
      <div className="px-3">
        <HeadLine title="Vorlesungsmaterialien" />
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div>
            <h1 className="font-sans text-4xl font-light" id="folien-merge">
              Vorlesungsfolien / Script
            </h1>

            <p className="my-2">
              Die Folien von BuK sind echt nice. Hier ist der Merge
            </p>

            <ul className="my-2 ml-8 list-disc">
              <li>
                <a
                  target={"_blank"}
                  href="/teaching-assets/scil/folien-merged.pdf"
                >
                  Folienmerge
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://panikzettel.philworld.de/buk.pdf"
                  rel="noreferrer"
                >
                  Panikzettel
                </a>{" "}
                (ich will{" "}
                <a
                  target={"_blank"}
                  href="https://panikzettel.philworld.de/"
                  rel="noreferrer"
                >
                  philworld.de
                </a>{" "}
                nicht die views klauen, aber selbst gehostet gibts{" "}
                <a
                  target={"_blank"}
                  href="/teaching-assets/scil/panikzettel.pdf"
                >
                  hier.
                </a>
                )
              </li>
            </ul>

            <h2 className="font-sans text-4xl font-light" id="folien">
              Alle Folien
            </h2>

            <p className="my-2"></p>
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

            <h1 className="mt-4 mb-2 font-sans text-4xl">
              Erklärungen in ihrem eigenen Stil
            </h1>

            <span>
              Wenn jemand irgendwas falsches entdeckt (kann schon gut sein)
              meldet euch (oder korrigiert es selber{" "}
              <a
                target={"_blank"}
                href="https://github.com/JohnnyS318/htwr-aachen.de"
                rel="noreferrer"
              >
                hier.
              </a>
              ):{" "}
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

            <p className="my-4">
              Jetzt wird gebukked.
              <br />
              Ich versuche möglichst Tips zu geben, jedoch ist BuK dann doch
              wohl eher etwas, dass man einfach machen muss. Es werden auch
              weniger Wissenfragen als bei DatKom und SWT dran kommen.
            </p>

            <ul className="ml-8 mt-8 list-disc">
              {docs.map((teaching) => {
                return (
                  <li key={teaching.slug}>
                    <Link
                      className="font-roboto"
                      href={`/scil/studium/teachings/${teaching.slug}`}
                    >
                      {teaching.meta.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <MaterialienSchnellzugriff />
        </div>
      </div>
    </Main>
  );
};

export default Teachings;
