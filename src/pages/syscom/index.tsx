import Image from "next/image";
import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/layouts/syscom/Main";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Syscom - Das besser ComSys"
          description="Für alle die nichts besseres zu tun haben als DatKom zu lernen"
        />
      }
    >
      <h3>
        Für DatKom lernt es sich bestimmt besser nach dem ihr das{" "}
        <Link href={"/syscom/teaching"}>SysCom Teaching</Link> gesehen habt
      </h3>

      <div className="grid grid-cols-2">
        <div>
          <iframe
            src="https://giphy.com/embed/dSetRSJcR3PGqkvjRg"
            width="200"
            height="150"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <Image
            src="/assets/syscom/wehrle.jpg"
            width={150}
            height={150}
            alt={"Prof. Dr.-Ing. Klaus Wehrle"}
          ></Image>
          <span className="text-xs">
            Credit ©{" "}
            <Link href="https://www.comsys.rwth-aachen.de/team/klaus-wehrle">
              https://www.comsys.rwth-aachen.de/team/klaus-wehrle
            </Link>
          </span>
        </div>
        <p>
          Jetzt ist eh zu spät für DatKom, aber für SWT reicht die Zeit noch.{" "}
          <Link href={"https://es.htwr-aachen.de"}>es.htwr-aachen.de</Link>{" "}
          könnt ihr (gerne) mit helfen zu bauen :D
        </p>

        <h1 className="text-5xl font-semibold">
          Aber erstmal für Datkom viel Erfolg oder viel Glück, je nachdem.🍀
        </h1>

        <div className="grid items-center">
          <img
            src={
              "https://media.tenor.com/d06PZzULbPMAAAAC/good-luck-minion.gif"
            }
            alt="Good Luck Minion"
          />
        </div>
      </div>

      <h1 className="my-6 text-center font-bold">
        Okay aber ernsthaft,{" "}
        <Link className="underline" href={"/syscom/teaching"}>
          hier
        </Link>{" "}
        gibts was nettes.
      </h1>

      <div>
        <h2 className="mb-3 text-center font-medium">
          Und den Vibe nicht vergessen!
        </h2>
        <p className="my-2 text-center">
          <a
            href="https://open.spotify.com/track/72FWIzbWGeZ8w0QsiVJTUo?si=cf0f83ebc2984823"
            className="text-center"
          >
            Datenkommunikation und Sicherheit (ohne Sicherheit)
          </a>
        </p>
      </div>
    </Main>
  );
};

export default Index;
