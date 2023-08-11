import Link from "next/link";
import type { FC } from "react";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const CIGOLMain: FC = () => {
  return (
    <Main
      institute="cigol"
      meta={<Meta title="IGM - Informatische Grundlagen der Mathematik"></Meta>}
    >
      <h1 className="font-sans text-4xl font-semibold">Jetzt wird malochet</h1>

      <ul className="mx-10 my-4 list-disc text-xl [&>li]:py-1">
        <li>
          <Link href={"/cigol/teachings"}>Zusammenfassungen wie immer</Link>
        </li>
        <li>
          <Link href={"/cigol/aufgaben"}>Aufgaben wie immer</Link>
        </li>
        <li>
          <Link href={"/cigol/klausuren"}>
            Endlich wieder Klausuren seit 1995
          </Link>
        </li>
      </ul>
    </Main>
  );
};

export default CIGOLMain;
