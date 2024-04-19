import type { Metadata } from "next";

import { SubjectDocumentList } from "@/components/documents/list";

export const metadata: Metadata = {
  title: "Aufgaben",
  description: "Malo macht spass",
  alternates: {
    canonical: "/cigol/studium/aufgaben",
  },
};

export default async function AufgabenPage() {
  return (
    <div>
      <div className="px-2">
        <h1 className="my-2 font-sans text-4xl font-bold">MALO Aufgaben</h1>
        <SubjectDocumentList subject="malo" />
      </div>
    </div>
  );
}
