import Link from "next/link";
import type { FC } from "react";

import type { Roomconfig } from "@/components/Roomfinder";
import { Roomfinder } from "@/components/Roomfinder";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

export const SWTRaumconfig: Roomconfig[] = [
  { name: "CARL H01", minNum: 0 },
  { name: "CARL H02", minNum: 433719 },
  { name: "TEMP1", minNum: 434450 },
  { name: "TEMP2", minNum: 435001 },
  { minNum: 450073, name: "error" },
];

const index: FC = () => {
  return (
    <Main
      meta={<Meta title="ES@HTWR" description="Engineering Software"></Meta>}
    >
      <h1 className="text-5xl font-light">Chair of Engineering Software</h1>

      <p>Rumpe wartet schon</p>

      <h1 className="my-4 rounded bg-gray-200 px-3 py-2">
        Viel Erfolg bei der Klausur morgen. 🍀
      </h1>

      <Roomfinder config={SWTRaumconfig} />

      <div className="mt-24 grid grid-rows-[auto_auto] md:grid-cols-2 md:grid-rows-none">
        <div className="grid justify-center">
          <img
            src="https://www.se-rwth.de/assets/img/staff/rumpe.jpeg"
            alt="Bernhard Rumpe"
          ></img>
          <span className="block w-[200px] text-center">
            &copy;{" "}
            <a href="https://www.se-rwth.de/staff/Bernhard.Rumpe/">
              https://www.se-rwth.de/staff/Bernhard.Rumpe/
            </a>
          </span>
        </div>
        <div className="mt-5 grid items-start justify-center md:mt-0 md:items-center">
          <p className="h-min text-center align-middle">
            "Habe ich euch eigentlich schonmal von{" "}
            <Link href="/es/klausuren">Klausuren</Link>,{" "}
            <Link href={"/es/teachings"}>dummen Zusammenfassungen</Link> und{" "}
            <Link href="/es/aufgaben">Aufgaben</Link> erzählt..."
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 text-center">
        <h2 className="mb-2 text-2xl font-medium">Sponsored By:</h2>
        <ul className="grid grid-cols-3 items-center justify-center gap-4 gap-y-12">
          <li>
            <img
              alt="VW"
              src="/assets/es/automobilindustrie/volkswagen.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Audi"
              src="/assets/es/automobilindustrie/audi.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Mercedes Benz"
              src="/assets/es/automobilindustrie/mercedes.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Porsche"
              src="/assets/es/automobilindustrie/porsche.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Opel"
              src="/assets/es/automobilindustrie/opel.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Ford"
              src="/assets/es/automobilindustrie/ford.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
        </ul>
      </div>
    </Main>
  );
};

export default index;
