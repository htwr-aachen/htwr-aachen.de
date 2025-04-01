import type { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syscom - Das besser ComSys",
  description: "Für alle die nichts besseres zu tun haben als DatKom zu lernen",
  alternates: {
    canonical: "/syscom",
  },
};

export default function Page() {
  return (
    <div>
      <h2 className="my-4 font-semibold">
        Für DatKom lernt es sich bestimmt besser nach dem ihr die{" "}
        <Link href={"/syscom/studium/teachings"}>SysCom Zusammenfassungen</Link>{" "}
        gesehen habt
      </h2>
      <div className="grid grid-cols-2">
        <div>
          <ExportedImage
            src="/assets/syscom/wehrle.jpg"
            width={150}
            height={150}
            alt={"Prof. Dr.-Ing. Klaus Wehrle"}
          />
          <span className="text-xs">
            Credit ©{" "}
            <Link href="https://www.comsys.rwth-aachen.de/team/klaus-wehrle">
              https://www.comsys.rwth-aachen.de/team/klaus-wehrle
            </Link>
          </span>
        </div>

        <div className="grid items-center">
          <img
            src={
              "https://media.tenor.com/d06PZzULbPMAAAAC/good-luck-minion.gif"
            }
            alt="Good Luck Minion"
          />
        </div>
      </div>
      <p className="my-6 text-center font-bold">
        Okay aber ernsthaft,{" "}
        <Link className="underline" href={"/syscom/teaching"}>
          hier
        </Link>{" "}
        gibts was nettes.
      </p>
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
    </div>
  );
}
