import Image from "next/image";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/scil/Main";

const SCIL: FC = () => {
  return (
    <Main meta={<Meta title="SCIL@HTWR"></Meta>}>
      <h1 className="text-3xl font-bold">Vorbereitung für BUK</h1>

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
    </Main>
  );
};

export default SCIL;
