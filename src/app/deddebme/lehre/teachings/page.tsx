import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";
import TeachingList from "@/components/teachings/List";

export const metadata: Metadata = {
  title: "Zusammenfassungen",
  description: "Kreativ sein ist schon anstregend",
  alternates: {
    canonical: "/deddebme/lehre/teachings",
  },
};

export default async function Teachings() {
  return (
    <div>
      <HeadLine>Zusammenfasungen</HeadLine>
      <TeachingList subject="psp" />
    </div>
  );
}
