import Link from "next/link";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { WSIConfig } from "@/layouts/configs";
import { Meta } from "@/layouts/Meta";
import { WSINavbar } from "@/layouts/rwth/instituteConfig";
import { Main } from "@/layouts/rwth/Main";
import { getProtectedDownloads } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../studium";

type KlausurenProps = {
  klausuren: string[];
};

export async function getStaticProps() {
  return {
    props: {
      klausuren: await getProtectedDownloads("stocha"),
    },
    revalidate: 60,
  };
}

const Klausuren: FC<KlausurenProps> = ({ klausuren }) => {
  return (
    <Main
      meta={
        <Meta
          title="WSI@HTWR-Klausuren"
          description="Da Klausuren immer problematisch zu verteilen sind werde ich da 100% sichere Captchas einbauen."
        ></Meta>
      }
      {...WSIConfig}
      navbarConfig={WSINavbar}
    >
      <div className="px-2">
        <HeadLine title="Klausuren" />
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 lg:m-0">
            <span>
              Es gibt fast keine Klausuren für Stocha. Wenn jemand weitere hat:{" "}
              <a href="mailto:jonas.max.schneider@gmail.com">
                jonas.max.schneider@gmail.com
              </a>
              . Ich werde sie dann natürlich anonym hier hochladen.
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
