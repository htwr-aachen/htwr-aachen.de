import type { GetStaticProps } from "next";
import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import type { Roomconfig } from "@/components/Roomfinder";
import { Roomfinder } from "@/components/Roomfinder";
import { HeadLine } from "@/components/rwth/headline";
import { TeachingList } from "@/components/TeachingList";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import type { Document } from "@/lib/documents";
import { getAllDocsFromDir } from "@/lib/documents";
import type { TeachingMeta } from "@/lib/teachings";
import { getAllTeachings } from "@/lib/teachings";
import { DefaultTeachingDir } from "@/utils/TeachingConfig";

import { MaterialienSchnellzugriff } from "../../studium";

export const TeachingsDirectory = join(DefaultTeachingDir, "wsi");

type TeachingsProps = {
  docs: TeachingMeta[];
  folien: Document[];
};

export const getStaticProps: GetStaticProps = async () => {
  const folien = getAllDocsFromDir(
    join(process.cwd(), "public", "teaching-assets", "wsi", "folien"),
    "/teaching-assets/wsi/folien",
    true
  );

  const docs = getAllTeachings(TeachingsDirectory);

  return {
    props: {
      docs: await docs,
      folien: await folien,
    },
  };
};

const WSIRoomConfig: Roomconfig[] = [
  { minNum: 303417, name: "RWTH ZuseLab C1/C2 (2315|107)" },
  { minNum: 422287, name: "RWTH ZuseLab C3 (2315|211)" },
  { minNum: 433913, name: "Couven-Halle (1072|001)" },
  { minNum: 434419, name: "Sparkassenforum (1040|U234)" },
];

const Teachings: FC<TeachingsProps> = ({ docs, folien }) => {
  return (
    <Main
      meta={
        <Meta
          title="WSI@HTWR-Teachings"
          description="Eine schlechte Sammlung von schlechten Zusammenfassungen für BuK"
        ></Meta>
      }
      institute="wsi"
    >
      <div className="px-3">
        <HeadLine title="Vorlesungsmaterialien" />

        <div>
          <Roomfinder config={WSIRoomConfig} text="STOCHA 1. Termin " />
        </div>

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
                  href="/teaching-assets/wsi/folien-merged.pdf"
                >
                  Folienmerge
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="/teaching-assets/wsi/formelsammlung.pdf"
                >
                  Formelsammlung
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://panikzettel.philworld.de/stocha.pdf"
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
                  href="/teaching-assets/wsi/panikzettel.pdf"
                >
                  hier.
                </a>
                )
              </li>
              <li>
                <b>Top Nachschlagwerk</b> von Tore (
                <a
                  target={"_blank"}
                  href="https://discordapp.com/users/271657367676911623"
                  rel="noreferrer"
                >
                  reinerzufall
                </a>
                ) und Adrian (
                <a
                  target={"_blank"}
                  href="https://discordapp.com/users/480284798028611584"
                  rel="noreferrer"
                >
                  gobidev
                </a>
                ): <br />
                <a
                  href="/teaching-assets/wsi/zusammenfassung.pdf"
                  target="_blank"
                >
                  pdf
                </a>{" "}
                oder{" "}
                <a
                  href="https://typst.app/project/rhyJGOcf8LVWkwKc0fo84Q"
                  target="_blank"
                >
                  typst
                </a>{" "}
                link
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
            <h1 className="mb-2 mt-4 font-sans text-4xl">
              Erklärungen in ihrem eigenen Stil
            </h1>

            <p>
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
                Jonsch318
              </a>
            </p>
            <br />

            <p>
              Es kommt hier noch ein bisschen was aber das dauert, also immer
              mal wieder vorbeischauen
            </p>

            <ul className="list-disc px-4 pt-8 lg:pl-8">
              <TeachingList
                urlPrefix="/wsi/studium/teachings"
                teachingList={docs}
              />
            </ul>
          </div>
          <MaterialienSchnellzugriff />
          di
        </div>
      </div>
    </Main>
  );
};

export default Teachings;
