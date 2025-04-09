import type { Metadata } from "next";

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
      <h1>PSP</h1>
      <img
        src="/content-assets/deddebme/other/suffering-psp.gif"
        alt="POV: PSP"
      />
      <SummaryList subject="psp" />
    </div>
  );
}
