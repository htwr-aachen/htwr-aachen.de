import Link from "next/link";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import type { TeachingMeta } from "@/lib/teachings";
import { getAllTeachings } from "@/lib/teachings";
import { Main } from "@/templates/Main";

export async function getStaticProps() {
  const docs = await getAllTeachings();
  return {
    props: {
      docs,
    },
  };
}

type TeachingProps = {
  docs: TeachingMeta[];
};

const Teaching: FC<TeachingProps> = ({ docs }) => {
  return (
    <Main
      meta={
        <Meta
          title="SysCom Teachings"
          description="Eine Sammlung von Lernhilfen, Aufgaben und sonstiges vorallem für DatKom"
        />
      }
    >
      <h1>Liste von Hilfen:</h1>

      <ul className="ml-8 list-disc">
        {docs.map((teaching) => {
          return (
            <li key={teaching.slug}>
              <Link href={`/teachings/${teaching.slug}`}>
                {teaching.meta.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Main>
  );
};

export default Teaching;
