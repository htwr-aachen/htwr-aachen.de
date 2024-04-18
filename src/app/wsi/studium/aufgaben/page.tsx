import type { Metadata } from "next";

import BasicSubjectInfo, {
  LinkCard,
} from "@/components/documents/basic-subject-info";
import { SubjectDocumentList } from "@/components/documents/list";
import { HeadLine } from "@/components/rwth/headline";

import { MaterialienSchnellzugriff } from "../../Schnellzugriff";

export const metadata: Metadata = {
  title: "Aufgaben",
  description: "och nööö",
  alternates: {
    canonical: "/wsi/studium/aufgaben",
  },
};

export default async function AufgabenPage() {
  return (
    <div className="px-2">
      <HeadLine>Aufgaben</HeadLine>
      <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
        <div className="mx-2 my-4 lg:m-0">
          <BasicSubjectInfo subject="stocha">
            <LinkCard
              title="Formelsammlung"
              href="/content-assets/stocha/formelsammlung.pdf"
              description="Ihr werdet die später noch brauchen"
            >
              Kauft euch vielleicht sogar besser das Buch
            </LinkCard>
            <LinkCard
              title="Zusammenfassung"
              href="/content-assets/stocha/zusammenfassung.pdf"
              description="Von Freunden gemacht"
            >
              Wenn ihr das könnt, könnt ihrs
            </LinkCard>
          </BasicSubjectInfo>
          <SubjectDocumentList subject="stocha" />
        </div>
        <div>
          <MaterialienSchnellzugriff />
        </div>
      </div>
    </div>
  );
}
