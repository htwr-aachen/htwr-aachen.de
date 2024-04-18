import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";
import SummaryList from "@/components/summaries/list";

export const metadata: Metadata = {
  title: "Keine Ahnung",
  description: "Kreativ sein ist schon anstregend",
  alternates: {
    canonical: "/deddebme/lehre",
  },
};

export default async function Page() {
  return (
    <div>
      <HeadLine>Lehre</HeadLine>
      <SummaryList subject="psp" />
    </div>
  );
}
