import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

const Klausuren: FC = () => {
  return (
    <Main
      meta={
        <Meta
          title="klausuren"
          description="Klausurensammlung ist vielleicht bissle copywright technisch schwierig... naja"
        ></Meta>
      }
    >
      <h1 className="font-roboto text-4xl font-light">Klausuren</h1>
      <span>
        Wenn jemand weitere hat:{" "}
        <a href="mailto:jonas.max.schneider@gmail.com">
          jonas.max.schneider@gmail.com
        </a>
      </span>
    </Main>
  );
};
export default Klausuren;
