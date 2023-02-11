import { readdir } from "fs/promises";
import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

const klausurPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "es",
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
  let err = false;
  let klausuren: Document[] = [];
  try {
    const klausurFiles = await readdir(klausurPath);
    klausuren = klausurFiles.map((file) => {
      const name = file
        .replace(".pdf", "")
        .replaceAll("ss", "Sommersemester")
        .replaceAll("ws", "Wintersemester")
        .replaceAll("wdh", "Wiederholungsklausur")
        .replaceAll("lsg", "mit-Lösungen");
      return {
        name,
        url: `/teaching-assets/es/klausuren/${file}`,
        year: parseInt(file.substring(2, 4), 10),
      };
    });
  } catch (error) {
    err = true;
  }

  klausuren.sort((a, b) => {
    return a.year > b.year ? -1 : 1;
  });

  return {
    props: {
      klausuren,
    },
    notFound: err,
  };
}

const Klausuren: FC<KlausurenProps> = ({ klausuren }) => {
  return (
    <Main
      meta={
        <Meta
          title="ES@HTWR-Klausuren"
          description="Klausurensammlung ist vielleicht bissle copyright technisch schwierig... naja"
        ></Meta>
      }
    >
      <h1 className="font-roboto text-4xl font-light" id="klausuren">
        Klausuren
      </h1>
      <span>
        Wenn jemand weitere hat:{" "}
        <a href="mailto:jonas.max.schneider@gmail.com">
          jonas.max.schneider@gmail.com
        </a>
      </span>

      <p className="my-4">
        Es gibt ein Master-Fach Model Based <b>Software Engineering</b>, also
        bei Klausuren auf den Namen achten! (Ist mir selber passiert ups)
      </p>

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
        Aufgaben gibts <Link href={"/es/aufgaben"}>hier</Link> und
        Zusammenfassungen <Link href={"/es/teachings"}>hier.</Link>
      </span>
    </Main>
  );
};
export default Klausuren;
