import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";
import TeachingList from "@/components/teachings/List";

import { MaterialienSchnellzugriff } from "../../Schnellzugriff";

export const metadata: Metadata = {
  title: "Zusammenfassungen",
  description: "Kreativ sein ist schon anstregend",
  alternates: {
    canonical: "/cesti/studium/teachings",
  },
};

export default async function Teachings() {
  return (
    <div>
      <HeadLine>Zusammenfasungen</HeadLine>
      <div className="grid grid-flow-row-dense grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_250px] lg:grid-rows-[auto_auto]">
        <TeachingList subject="itsec" />
        <MaterialienSchnellzugriff />
      </div>
    </div>
  );
}
