import { readdir } from "fs/promises";
import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/scil/Main";

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
  let klausuren: Document[] = [];
  try {
    const klausurFiles = await readdir(klausurPath);
    klausuren = klausurFiles.map((file) => {
      const name = file
        .replace(".pdf", "")
        .replaceAll("ss", "Sommersemester ")
        .replaceAll("ws", "Wintersemester ")
        .replaceAll("wdh", "Wiederholungsklausur")
        .replaceAll("lsg", "mit-Lösungen")
        .replaceAll("pro", "Probeklausur")
        .replaceAll("-", " ");
      return {
        name,
        url: `/teaching-assets/scil/klausuren/${file}`,
        year: parseInt(file.substring(2, 4), 10),
      };
    });
  } catch (error) {}

  klausuren.sort((a, b) => {
    return a.year > b.year ? -1 : 1;
  });

  return {
    props: {
      klausuren,
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
    >
      <div className="mx-2 lg:m-0">
        <HeadLine title="Klausuren" />
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

        <span className="mt-5 block">
          Aufgaben gibts (bald){" "}
          <Link href={"/scil/studium/aufgaben"}>hier</Link> und
          Zusammenfassungen <Link href={"/scil/studium/teachings"}>hier.</Link>
        </span>
      </div>
    </Main>
  );
};
export default Klausuren;
