import { format } from "date-fns";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function PanikzettelPage({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "md:auto h-full w-screen max-w-[100vw] rounded-t-lg bg-white md:min-h-[1020px] md:w-auto md:min-w-[750px]",
        lmsans.variable,
      )}
    >
      <div className="header grid justify-center gap-8 pt-20 text-center">
        <Link
          href="/panikzettel"
          className="font-mono font-medium text-[#013220] underline"
        >
          htwr-aachen.de/panikzettel
        </Link>
        <h1 className="font-sans text-3xl font-bold text-black">
          Panikzettel Überblick
        </h1>
        <span className="font-sans text-lg font-normal text-black">
          Version 1 | {format(new Date(), "dd.MM.yyyy")}
        </span>
        <span className="font-serif text-sm text-black">Jonas Schneider</span>
        <span className="font-serif text-sm text-black">
          🟢 neuer als 2 Jahre, 🟡 neuer als 4 Jahre, 🔴 vertrau Bruder
        </span>
      </div>
      <div className="grid w-full gap-10 px-4 py-12 font-sans text-black md:mx-auto md:max-w-[calc((2*65ch)+2.5rem)] md:grid-cols-2 md:justify-evenly">
        {children}
      </div>
    </div>
  );
}
