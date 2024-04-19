import type { Metadata } from "next";

import BasicSubjectInfo from "@/components/documents/basic-subject-info";
import { SubjectDocumentList } from "@/components/documents/list";

import { SCILSchnellzugriff } from "../../schnellzugriff";

export const metadata: Metadata = {
  title: "Aufgaben",
  description:
    "Aufgabensammlung falls man schon alle Klausuren durchgemacht hat...",
  alternates: {
    canonical: "/scil/studium/aufgaben",
  },
};

export default async function Page() {
  return (
    <div>
      <div className="px-2">
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 my-4 lg:m-0">
            <BasicSubjectInfo subject="buk" />
            <SubjectDocumentList rename subject="buk" />
          </div>
          <div>
            <SCILSchnellzugriff />
          </div>
        </div>
      </div>
    </div>
  );
}
