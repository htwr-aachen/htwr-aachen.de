import type { Metadata } from "next";
import Link from "next/link";

import { Roomfinder } from "@/components/Roomfinder";

import { MALOPT1_ROOMCONFIG } from "./rooms";

export const metadata: Metadata = {
  description: "Informatische Grundlagen der Mathematik",
  alternates: {
    canonical: "/cigol",
  },
};

export default function CIGOLPage() {
  return (
    <div>
      <h1 className="font-sans text-4xl font-semibold">Jetzt wird malochet</h1>

      <Roomfinder config={MALOPT1_ROOMCONFIG} />

      <ul className="mx-10 my-4 list-disc text-xl [&>li]:py-1">
        <li>
          <Link href={"/cigol/studium/teachings"}>
            Zusammenfassungen wie immer
          </Link>
        </li>
        <li>
          <Link href={"/cigol/aufgaben"}>Aufgaben wie immer</Link>
        </li>
        <li>
          <Link href={"/cigol/klausuren"}>
            Endlich wieder Klausuren seit 1995
          </Link>
        </li>
      </ul>
    </div>
  );
}
