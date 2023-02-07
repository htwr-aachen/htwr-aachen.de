import type { GetServerSideProps } from "next";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { SubStyling } from "@/lib/style";
import CombinedMain from "@/templates/CombinedMain";

type ImpressumProps = {
  styling: SubStyling;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      styling: (query.institute as SubStyling) || SubStyling.None,
    },
  };
};

const Impressum: FC<ImpressumProps> = ({ styling }) => {
  return (
    <CombinedMain
      styling={styling}
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
    </CombinedMain>
  );
};

export default Impressum;
