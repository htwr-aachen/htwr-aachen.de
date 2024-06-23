import type { Metadata } from "next";
import Image from "next/image";

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
      <Image
        src="/content-assets/deddebme/other/suffering-psp.gif"
        alt="POV: PSP"
        width={200}
        height={100}
      />
      <SummaryList subject="psp" />
    </div>
  );
}
