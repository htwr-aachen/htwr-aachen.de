import Image from "next/image";
import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/syscom/Main";

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
            src="/syscom/wehrle.jpg"
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
          <Link href={"https://se.htwr-aachen.de"}>se.htwr-aachen.de</Link>{" "}
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
        <iframe
          src="https://open.spotify.com/embed/track/72FWIzbWGeZ8w0QsiVJTUo?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </Main>
  );
};

export default Index;
