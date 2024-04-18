import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";
import SummaryList from "@/components/summaries/list";

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
      <SummaryList subject="psp" />
    </div>
  );
}
