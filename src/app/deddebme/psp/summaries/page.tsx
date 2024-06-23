import type { Metadata } from "next";

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
      <h1>Tipps & Tricks</h1>
      <SummaryList subject="psp" />
    </div>
  );
}
