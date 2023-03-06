import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { SCILConfig, SCILNavbarConfig } from "@/layouts/configs";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/layouts/rwth/Main";
import { getAllDocsFromDir } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../studium";

const klausurPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "scil",
  "klausuren"
);

type Document = {
  name: string;
  url: string;
  year: number;
};

type KlausurenProps = {
  klausuren: Document[];
};

export async function getStaticProps() {
  return {
    props: {
      klausuren: await getAllDocsFromDir(
        klausurPath,
        "/teaching-assets/scil/klausuren",
        true
      ),
    },
  };
}

const Klausuren: FC<KlausurenProps> = ({ klausuren }) => {
  return (
    <Main
      meta={
        <Meta
          title="SCIL@HTWR-Klausuren"
          description="Klausurensammlung ist vielleicht bissle copyright technisch schwierig, aber für buk lohnt es sich... naja"
        ></Meta>
      }
      {...SCILConfig}
      navbarConfig={SCILNavbarConfig}
    >
      <div className="px-2">
        <HeadLine title="Klausuren" />
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 lg:m-0">
            <span>
              Wenn jemand weitere hat:{" "}
              <a href="mailto:jonas.max.schneider@gmail.com">
                jonas.max.schneider@gmail.com
              </a>
            </span>

            <ul className="ml-8 mt-8 list-disc">
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
          </div>
          <div>
            <MaterialienSchnellzugriff />
          </div>
        </div>
      </div>
    </Main>
  );
};
export default Klausuren;
