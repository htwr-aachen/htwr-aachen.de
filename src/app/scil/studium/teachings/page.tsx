import type { Metadata } from "next";
import Link from "next/link";
import { join } from "path";

import { HeadLine } from "@/components/rwth/headline";
import SummaryList from "@/components/summaries/list";
import { getAllDocsFromDir } from "@/lib/documents";

import { SCILSchnellzugriff } from "../../schnellzugriff";

export const metadata: Metadata = {
  title: "Zusammenfassungen",
  description: "Eine gute Sammlung von schlechten Zusammenfassungen für BuK",
  alternates: {
    canonical: "/scil/studium/teachings",
  },
};

export default async function Page() {
  const folien = await getAllDocsFromDir(
    join(process.cwd(), "content-assets", "buk", "Folien"),
    "/content-assets/buk/Folien",
    true,
  );
  return (
    <div>
      <div className="px-3">
        <HeadLine title="Vorlesungsmaterialien" />

        <div className="grid grid-flow-row-dense grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_250px] lg:grid-rows-[auto_auto]">
          <div className="">
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
                  href="/content-assets/buk/folien-merged.pdf"
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
                <a target={"_blank"} href="/panikzettel">
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
          </div>
          <div className="my-8 lg:col-span-2">
            <h1 className="mt-4 mb-2 font-sans text-4xl">
              Erklärungen in ihrem eigenen Stil
            </h1>

            <span>
              Wenn jemand irgendwas falsches entdeckt (kann schon gut sein)
              meldet euch (oder korrigiert es selber{" "}
              <a
                target={"_blank"}
                href="https://github.com/jonsch318/htwr-aachen.de"
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

            <ul className="list-disc px-4 pt-8 lg:pl-8">
              <SummaryList subject="buk" />
            </ul>
          </div>
          <SCILSchnellzugriff />
        </div>
      </div>
    </div>
  );
}
