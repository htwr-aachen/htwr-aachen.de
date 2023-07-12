import type { GetStaticProps } from "next";
import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { TeachingList } from "@/components/TeachingList";
import { WSIConfig } from "@/layouts/configs";
import { Meta } from "@/layouts/Meta";
import { WSINavbar } from "@/layouts/rwth/instituteConfig";
import { Main } from "@/layouts/rwth/Main";
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
          title="WSI@HTWR-Teachings"
          description="Eine schlechte Sammlung von schlechten Zusammenfassungen für BuK"
        ></Meta>
      }
      {...WSIConfig}
      navbarConfig={WSINavbar}
    >
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

            <ul className="list-disc px-4 pt-8 lg:pl-8">
              <TeachingList
                urlPrefix="/wsi/studium/teachings"
                teachingList={docs}
              />
            </ul>
          </div>
          <MaterialienSchnellzugriff />
        </div>
      </div>
    </Main>
  );
};

export default Teachings;
