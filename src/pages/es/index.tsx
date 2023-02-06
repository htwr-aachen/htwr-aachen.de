import Link from "next/link";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

const index: FC = () => {
  return (
    <Main
      meta={<Meta title="ES@HTWR" description="Engineering Software"></Meta>}
    >
      <h1 className="text-5xl font-light">Chair of Engineering Software</h1>

      <p>Rumpe wartet schon</p>

      <div className="mt-24 grid grid-cols-2">
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
        <div className="grid items-center justify-center">
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
              src="/es/automobilindustrie/volkswagen.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Audi"
              src="/es/automobilindustrie/audi.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Mercedes Benz"
              src="/es/automobilindustrie/mercedes.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Porsche"
              src="/es/automobilindustrie/porsche.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Opel"
              src="/es/automobilindustrie/opel.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
          <li>
            <img
              alt="Ford"
              src="/es/automobilindustrie/ford.svg"
              className="mx-auto h-[50px]"
            ></img>
          </li>
        </ul>
      </div>
    </Main>
  );
};

export default index;
