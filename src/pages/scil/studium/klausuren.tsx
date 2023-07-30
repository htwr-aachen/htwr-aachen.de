import Link from "next/link";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import { getProtectedDownloads } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../studium";

type KlausurenProps = {
  klausuren: string[];
};

export async function getStaticProps() {
  return {
    props: {
      klausuren: await getProtectedDownloads("buk"),
    },
  };
}

const Klausuren: FC<KlausurenProps> = ({ klausuren }) => {
  return (
    <Main
      institute="scil"
      meta={
        <Meta
          title="SCIL@HTWR-Klausuren"
          description="Klausurensammlung ist vielleicht bissle copyright technisch schwierig, aber für buk lohnt es sich... naja"
        ></Meta>
      }
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
                  <li key={klausur}>
                    <Link
                      href={{
                        pathname: "/proc-download",
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
