import format from "date-fns/format";
import localFont from "next/font/local";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const lmsans = localFont({
  src: [
    {
      path: "./lmsans10-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./lmsans10-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lmsans",
});

export default function PanikzettelPage({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "md:min-h-[1020px] h-full md:min-w-[750px] max-w-[100vw] md:w-auto w-screen md:auto bg-white rounded-lg",
        lmsans.variable
      )}
    >
      <div className="header grid justify-center gap-8 pt-20 text-center">
        <Link
          href="/panikzettel"
          className="font-mono font-medium text-[#013220] underline"
        >
          panikzettel.htwr-aachen.de
        </Link>
        <h1 className="font-lmsans text-3xl font-bold text-black">
          Panikzettel Überblick
        </h1>
        <span className="font-lmsans text-lg font-normal text-black">
          Version 1 | {format(new Date(), "dd.MM.yyyy")}
        </span>
        <span className="font-lmserif text-sm text-black">Jonas Schneider</span>
      </div>
      <div className="grid w-full gap-10 px-4 py-12 font-lmsans text-black md:mx-auto md:max-w-[calc((2*65ch)+2.5rem)] md:grid-cols-2 md:justify-evenly">
        {children}
      </div>
    </div>
  );
}
