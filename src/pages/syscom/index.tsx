import { differenceInHours } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/syscom/Main";

const Index = () => {
  const d = -differenceInHours(new Date(2023, 0, 23, 7), new Date());
  const d2 = -differenceInHours(new Date(2023, 0, 30, 7), new Date());

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

      <iframe
        src="https://giphy.com/embed/dSetRSJcR3PGqkvjRg"
        width="200"
        height="150"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>

      <div className="grid grid-cols-2">
        <div>
          <Image
            src="/rwth/wehrle.jpg"
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
        <div>
          "Wenn du vor {d}h angefangen hättest zu lernen, dann hättest du es
          geschafft". Obwohl in {d2}h reicht locker.
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
