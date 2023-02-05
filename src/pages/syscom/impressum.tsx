import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/syscom/Main";

const Impressum: FC = () => {
  return (
    <Main
      meta={
        <Meta
          title="Wehe einer schickt mir nen Brief"
          description="Nichts zu sehen hier ist nur rechtlich notwendig"
        ></Meta>
      }
    >
      <div>
        <h1 className="font-sans text-3xl font-bold">Impressum</h1>

        <h2 className="font-sans text-2xl font-bold">
          Angaben gem&auml;&szlig; &sect; 5 TMG
        </h2>
        <p>
          Jonas Max Schneider
          <br />
          Mostardstr. 22
          <br />
          52062 Aachen
        </p>

        <h2 className="font-sans text-2xl font-bold">Kontakt</h2>
        <p>
          Telefon: +4915731086384
          <br />
          Telefax: Wer nutzt fax???
          <br />
          E-Mail: jonas.max.schneider@gmail.com
        </p>

        <h2 className="font-sans text-2xl font-bold">
          Redaktionell verantwortlich
        </h2>
        <p>Jonas Schneider</p>
      </div>
    </Main>
  );
};

export default Impressum;
