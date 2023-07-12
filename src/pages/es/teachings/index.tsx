import type { GetStaticProps } from "next";
import { join } from "path";
import type { FC } from "react";

import { Roomfinder } from "@/components/Roomfinder";
import { TeachingList } from "@/components/TeachingList";
import { Meta } from "@/layouts/Meta";
import type { TeachingMeta } from "@/lib/teachings";
import { getAllTeachings } from "@/lib/teachings";
import { Main } from "@/templates/es/Main";
import { DefaultTeachingDir } from "@/utils/TeachingConfig";

import { SWTRaumconfig } from "..";

export const TeachingsDirectory = join(DefaultTeachingDir, "es");

type TeachingsProps = {
  docs: TeachingMeta[];
};

export const getStaticProps: GetStaticProps = async () => {
  const docs = await getAllTeachings(TeachingsDirectory);

  return {
    props: {
      docs,
    },
  };
};

const Teachings: FC<TeachingsProps> = ({ docs }) => {
  return (
    <Main
      meta={
        <Meta
          title="ES@HTWR-Teachings"
          description="Eine schlechte Sammlung von schlechten Zusammenfassungen"
        ></Meta>
      }
    >
      <h1 className="my-4 rounded bg-gray-200 px-3 py-2">
        Viel Reichtum bei der Klausur morgen. Vergesst den Master nicht sonst
        wird's nichts, aber keine Promotion!🍀
      </h1>

      <Roomfinder config={SWTRaumconfig} />

      <h1 className="font-sans text-4xl font-light" id="aufgaben">
        Vorlesungsfolien / Script
      </h1>

      <p className="my-2">
        Ich finde die Folien von SWT echt unübersichtlich, aber trotzdem hier
        ist der Folienmerge von SWT SS2022/2023:
      </p>

      <ul className="my-2 ml-8 list-disc">
        <li>
          <a target={"_blank"} href="/teaching-assets/es/folien-merged.pdf">
            Folienmerge
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            href="https://panikzettel.philworld.de/swt.pdf"
            rel="noreferrer"
          >
            Panikzettel
          </a>{" "}
          (ich will{" "}
          <a
            target={"_blank"}
            href="https://panikzettel.philworld.de/"
            rel="noreferrer"
          >
            philworld.de
          </a>{" "}
          nicht die views klauen, aber selbst gehostet gibts{" "}
          <a target={"_blank"} href="/teaching-assets/es/panikzettel.pdf">
            hier.
          </a>
          )
        </li>
      </ul>

      <h1 className="mb-2 mt-4 font-sans text-4xl">
        Erklärungen in ihrem eigenen Stil
      </h1>

      <span>
        Wenn jemand irgendwas falsches entdeckt (kann schon gut sein) meldet
        euch (oder korrigiert es selber{" "}
        <a
          target={"_blank"}
          href="https://github.com/JohnnyS318/htwr-aachen.de"
          rel="noreferrer"
        >
          hier.
        </a>
        ):{" "}
        <a
          target={"_blank"}
          href="mailto:jonas.max.schneider@gmail.com"
          rel="noreferrer"
        >
          jonas.max.schneider@gmail.com
        </a>{" "}
        oder Discord:{" "}
        <a
          target={"_blank"}
          href="https://discordapp.com/users/317018058428514314"
          rel="noreferrer"
        >
          Jonsch318#4006
        </a>
      </span>

      <p className="my-4">
        Wie zur Hölle bekomme ich aus SWT bitte irgendwas "witziges" heraus??
        <br />
        Ich probiere hier eher durch alle Diagrammtypen durchzugehen, da dass
        eigentlich das wichtige ist. Ein paar Wissensfragen sind aber auch dabei
        (es gibt meistens eine Allgemeinwissen Frage).
      </p>

      <TeachingList urlPrefix="/es/teachings" teachingList={docs} />
    </Main>
  );
};

export default Teachings;
