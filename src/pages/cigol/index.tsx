import Link from "next/link";
import type { FC } from "react";

import type { Roomconfig } from "@/components/Roomfinder";
import { Roomfinder } from "@/components/Roomfinder";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const MALOPT1_ROOMCONFIG: Roomconfig[] = [
  { minNum: 0, name: "C.A.R.L H01 (1385|101)" },
  { minNum: 419200, name: "C.A.R.L H02 (1385|102)" },
  { minNum: 433920, name: "TEMP 1 (1515|001)" },
  { minNum: 434750, name: "TEMP 2 (1515|002)" },
];

const CIGOLMain: FC = () => {
  return (
    <Main
      institute="cigol"
      meta={<Meta title="IGM - Informatische Grundlagen der Mathematik"></Meta>}
    >
      <h1 className="font-sans text-4xl font-semibold">Jetzt wird malochet</h1>

      <Roomfinder config={MALOPT1_ROOMCONFIG} />

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
