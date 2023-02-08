import type { GetStaticProps } from "next";
import Link from "next/link";
import { join } from "path";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import type { TeachingMeta } from "@/lib/teachings";
import { getAllTeachings } from "@/lib/teachings";
import { Main } from "@/templates/es/Main";

export const TeachingsDirectory = join(process.cwd(), "src", "teachings", "es");

type TeachingsProps = {
  docs: TeachingMeta[];
};

export const getStaticProps: GetStaticProps = async () => {
  const docs = await getAllTeachings(TeachingsDirectory);

  return {
    props: {
      docs,
    },
  };
};

const Teachings: FC<TeachingsProps> = ({ docs }) => {
  return (
    <Main
      meta={
        <Meta
          title="ES@HTWR-Teachings"
          description="Eine schlechte Sammlung von schlechten Zusammenfassungen"
        ></Meta>
      }
    >
      <h1 className="font-roboto text-4xl font-light" id="aufgaben">
        Aufgaben + Eigenlösungen
      </h1>
      <span>
        Wenn jemand irgendwas falsches entdeckt (kann schon gut sein) meldet
        euch (oder korrigiert es selber{" "}
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

      <h2 className="mt-4 mb-2 font-roboto text-xl font-medium">
        Erklärungen in ihrem eigenen Stil
      </h2>

      <p className="mb-2 text-sm">
        Wie zur Hölle bekomme ich aus SWT bitte irgendwas "witziges" heraus??
      </p>

      <ul className="ml-8 list-disc">
        {docs.map((teaching) => {
          return (
            <li key={teaching.slug}>
              <Link
                className="font-roboto"
                href={`/es/teachings/${teaching.slug}`}
              >
                {teaching.meta.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Main>
  );
};

export default Teachings;
