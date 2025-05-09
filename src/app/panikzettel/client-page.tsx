"use client";
import type { Metadata } from "next";
import {
  type Panikzettel,
  APPLICATION_AREA_SUBJECT,
  COMPULSORY_ELECTIVE_SUBJECT,
  COMPULSORY_SUBJECT,
} from "@/models/panikzettel";

import PanikzettelPage from "./page-anim/panikzettel-page";
import SkewedPanikzettelFrontpage from "./page-anim/skewed-animation";
import PanikzettelSelection from "./selection";
import PanikzettelTitleAnim from "./title";
import { usePanikzettel } from "./context";

function filterPanikzettel(panikzettel: Panikzettel[], semester: number) {
  return panikzettel.filter((x) => {
    return x.type === COMPULSORY_SUBJECT && x.semester === semester;
  });
}

function filterOthers(panikzettel: Panikzettel) {
  return !(
    panikzettel.type === COMPULSORY_SUBJECT ||
    panikzettel.type === COMPULSORY_ELECTIVE_SUBJECT ||
    panikzettel.type === APPLICATION_AREA_SUBJECT
  );
}

export const metadata: Metadata = {
  title: "Panikzettel",
  description:
    "Die neue ultimative Panikzettelsammlung. Ein erweiterter weiterhin gepflegter Klon der originalen Seite",
};

export default function Page() {
  const { panikzettel } = usePanikzettel();

  return (
    <>
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
            <hr className="border border-dashed border-black/50 bg-none md:col-span-2" />
            <div className="col-span-2">
              <PanikzettelSelection
                title="Sonstiges"
                selection={panikzettel.filter((x) => filterOthers(x))}
              />
            </div>
          </PanikzettelPage>
        </SkewedPanikzettelFrontpage>
      </div>
    </>
  );
}
