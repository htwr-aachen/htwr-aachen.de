import { FileQuestion, Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { APIURL } from "@/config/app";
import urlJoin from "@/lib/url";
import {
  type Panikzettel,
  APPLICATION_AREA_SUBJECT,
  COMPULSORY_ELECTIVE_SUBJECT,
  COMPULSORY_SUBJECT,
} from "@/models/panikzettel";

import { PANIKZETTEL_EMAIL, PANIKZETTEL_REPO_URL } from "./config";
import PanikzettelPage from "./page-anim/panikzettel-page";
import SkewedPanikzettelFrontpage from "./page-anim/skewed-animation";
import PanikzettelSearch from "./search";
import PanikzettelSelection from "./selection";
import PanikzettelTitleAnim from "./title";

async function getData(): Promise<Panikzettel[]> {
  const res = await fetch(urlJoin(APIURL, "/panikzettel"), {
    next: {
      revalidate: 60 * 15,
    },
  });
  if (!res.ok) {
    return [];
  }
  try {
    return await res.json();
  } catch (_err) {
    return [];
  }
}

function filterPanikzettel(panikzettel: Panikzettel[], semester: number) {
  return panikzettel.filter((x) => {
    return x.type === COMPULSORY_SUBJECT && x.semester === semester;
  });
}

export const metadata: Metadata = {
  title: "Panikzettel",
  description:
    "Die neue ultimative Panikzettelsammlung. Ein erweiterter weiterhin gepflegter Klon der originalen Seite",
};

export default async function Page() {
  const panikzettel = await getData();

  return (
    <div className={"w-screen"}>
      <Alert className="mx-auto mt-12 w-4/6">
        <Info className="size-4" />
        <AlertTitle>Achtung! Fertig! Fork!</AlertTitle>
        <AlertDescription>
          Dies ist weiterhin ein Fork des nun ungepflegten Repositories von{" "}
          <a
            className="no-b text-foreground inline underline"
            href="https://panikzettel.philworld.de"
          >
            philworld.de
          </a>
          . Das neue Repository befindet sich{" "}
          <a
            className="no-b text-foreground underline"
            href={PANIKZETTEL_REPO_URL}
          >
            hier
          </a>
          .<br /> Bei Fragen, Feedback und Beschwerden bitte an{" "}
          <a
            className="no-b text-foreground underline"
            href={`mailto:${PANIKZETTEL_EMAIL}`}
          >
            {PANIKZETTEL_EMAIL}
          </a>
        </AlertDescription>
      </Alert>
      <PanikzettelSearch panikzettel={panikzettel || []} />
      <PanikzettelTitleAnim />
      <div className="relative flex justify-center">
        <SkewedPanikzettelFrontpage>
          <PanikzettelPage>
            {[1, 2, 3, 4, 5, 6].map((i) => {
              return (
                <PanikzettelSelection
                  key={i}
                  title={`${i}. Semester`}
                  selection={filterPanikzettel(panikzettel, i)}
                />
              );
            })}
            <hr className="border border-dashed border-black/50 bg-none md:col-span-2" />
            <PanikzettelSelection
              title="Wahlpflichfächer"
              selection={panikzettel.filter(
                (x) => x.type === COMPULSORY_ELECTIVE_SUBJECT,
              )}
            />
            <PanikzettelSelection
              title="Anwendungsfächer"
              selection={panikzettel.filter(
                (x) => x.type === APPLICATION_AREA_SUBJECT,
              )}
            />
          </PanikzettelPage>
        </SkewedPanikzettelFrontpage>
      </div>
      <svg
        role="img"
        aria-label="Document with Questionmark"
        className="h-[150px] w-screen -translate-y-3 fill-white"
        preserveAspectRatio="none"
        viewBox="0 0 1920 350"
      >
        <path d="M 1920,0 1380.2201,158.73457 1343.4624,30.641294 934.85444,266.96729 883.31522,37.415096 312.94679,322.66254 211.46135,75.046817 0,311.04763 V 0 Z" />
      </svg>
      <div className="max-w-prose px-4 py-24 md:mx-auto">
        <Alert className="mb-7">
          <FileQuestion className="mr-2 size-5" />
          <AlertTitle>Mitmachen?!</AlertTitle>
          <AlertDescription>
            Schau mal bei dem{" "}
            <a href="https://git.rwth-aachen.de/jonas.max.schneider/panikzettel">
              Repository
            </a>{" "}
            oder der <Link href="/docs/panikzettel">Dokumenation</Link> vorbei.
          </AlertDescription>
        </Alert>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold">
          Updates & Neuigkeiten
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Neue UI</li>
        </ul>
      </div>
    </div>
  );
}
