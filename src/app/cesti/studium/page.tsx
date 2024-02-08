import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";
import TeachingList from "@/components/teachings/List";

import { MaterialienSchnellzugriff } from "../Schnellzugriff";

export const metadata: Metadata = {
  title: "Keine Ahnung",
  description: "Kreativ sein ist schon anstregend",
  alternates: {
    canonical: "/cesti/studium",
  },
};

export default async function Page() {
  return (
    <div>
      <HeadLine>Studium</HeadLine>
      <MaterialienSchnellzugriff />
      <TeachingList subject="itsec" />
    </div>
  );
}
