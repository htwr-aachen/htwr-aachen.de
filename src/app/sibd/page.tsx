import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";

import { SIBDSchnellzugriff } from "./schnellzugriff";

export const metadata: Metadata = {
  description: "DBIS ist toll. Habt angst vor dem Fach",
};

export default function sibdPage() {
  return (
    <div>
      <HeadLine>DBIS :(</HeadLine>

      <SIBDSchnellzugriff />
    </div>
  );
}
