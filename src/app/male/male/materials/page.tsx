import type { Metadata } from "next";

import BasicSubjectInfo from "@/components/documents/basic-subject-info";
import { SubjectDocumentList } from "@/components/documents/list";
import { HeadLine } from "@/components/rwth/headline";

import { MaterialienSchnellzugriff } from "../../Schnellzugriff";

export const metadata: Metadata = {
  title: "Material",
  description:
    "KI, Blockchain, Digital Transformation, Web 4.0, 5G, AGI, Smart City",
  alternates: {
    canonical: "/male/material",
  },
};

export default async function TeachingsPage() {
  return (
    <div className="px-3">
      <HeadLine title="Vorlesungsmaterialien" />

      <div className="grid grid-flow-row-dense grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_250px] lg:grid-rows-[auto_auto]">
        <div className="">
          <BasicSubjectInfo subject="male" />
          <SubjectDocumentList subject="male" />
        </div>
        <MaterialienSchnellzugriff />
      </div>
    </div>
  );
}
