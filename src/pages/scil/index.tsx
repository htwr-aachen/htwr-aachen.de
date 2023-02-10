import Image from "next/image";
import type { FC } from "react";

import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/scil/Main";

const SCIL: FC = () => {
  return (
    <Main meta={<Meta title="SCIL@HTWR"></Meta>}>
      <h1 className="text-3xl font-bold">Vorbereitung für BUK</h1>

      <div className="grid grid-cols-[1fr_350px]">
        <div>
          <Image
            src={"/assets/scil/martina_grohe.jpg"}
            width={400}
            height={800}
            alt="Martina Grohe"
            className="mx-auto"
          ></Image>
          <h2 className="text-center font-sans text-xl font-bold">
            Martina Grohe xd
          </h2>
        </div>
        <Schnellzugriff title={"Schnellzugriff"}>
          <Schnellzugrifflink href="/scil/studium">Studium</Schnellzugrifflink>
          <Schnellzugrifflink href="/scil/forschung">
            Forschung
          </Schnellzugrifflink>
          <Schnellzugrifflink href="/scil/lehrstuhl">
            Lehrstuhl
          </Schnellzugrifflink>
        </Schnellzugriff>
      </div>
    </Main>
  );
};

export default SCIL;
