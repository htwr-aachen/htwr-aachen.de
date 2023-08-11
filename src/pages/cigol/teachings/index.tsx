import type { GetStaticProps } from "next";
import { join } from "path";
import type { FC } from "react";

import { TeachingList } from "@/components/TeachingList";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import type { TeachingMeta } from "@/lib/teachings";
import { getAllTeachings } from "@/lib/teachings";
import { DefaultTeachingDir } from "@/utils/TeachingConfig";

export const TeachingsDirectory = join(DefaultTeachingDir, "cigol");

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
      institute="cigol"
      meta={
        <Meta
          title="CIGOL@HTWR-Teachings"
          description="Es ex. eine Sammlung für alle Malo/(Mathematische Logik) Sachen, aber die hier ist es bestimmt nicht"
        ></Meta>
      }
    >
      <h1 className="font-sans text-4xl font-light" id="aufgaben">
        Vorlesungsfolien / Script
      </h1>

      <ul className="my-2 ml-8 list-disc">
        <li>
          <a target={"_blank"} href="/teaching-assets/cigol/malo/script_23.pdf">
            Script 2023
          </a>
        </li>
        <li>
          <a target={"_blank"} href="/teaching-assets/cigol/malo/script_18.pdf">
            Script 2018 (ist größtenteils gleich)
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            href="https://panikzettel.philworld.de/malo.pdf"
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
          <a
            target={"_blank"}
            href="/teaching-assets/cigol/malo/panikzettel.pdf"
          >
            hier.
          </a>
          )
        </li>
        <li>
          <a
            href="https://video.fsmpi.rwth-aachen.de/23ss-malo"
            target={"_blank"}
            rel="noreferrer"
          >
            Video AG 2023 (selbst aufgenommen)
          </a>
        </li>
        <li>
          <a
            href="https://video.fsmpi.rwth-aachen.de/17ss-malo"
            target={"_blank"}
            rel="noreferrer"
          >
            Video AG 2017
          </a>
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
          jonsch318
        </a>
      </span>

      <p className="my-4">
        Malo ist so kindlich einfach, da muss man auch den richtigen Flair für
        die Titel haben. Ich sammel hier gerne Tips wenn ich die mitbekomme.
      </p>

      <TeachingList urlPrefix="/cigol/teachings" teachingList={docs} />
    </Main>
  );
};

export default Teachings;
