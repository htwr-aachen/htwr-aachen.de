import type { Metadata } from "next";

import BasicSubjectInfo from "@/components/documents/basic-subject-info";
import { SubjectDocumentList } from "@/components/documents/list";

export const metadata: Metadata = {
  title: "Aufgaben",
  description:
    "Aufgabensammlung falls man schon alle Klausuren durchgemacht hat...",
  alternates: {
    canonical: "/scil/buk/materials",
  },
};

export default async function Page() {
  return (
    <div className="px-2">
      <div className="mx-2 my-4 lg:m-0">
        <BasicSubjectInfo subject="buk" />
        <SubjectDocumentList rename subject="buk" />
      </div>
    </div>
  );
}
