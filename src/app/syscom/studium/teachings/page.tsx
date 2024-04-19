import type { Metadata } from "next";
import Link from "next/link";

import BasicSubjectInfo from "@/components/documents/basic-subject-info";
import { SubjectDocumentList } from "@/components/documents/list";
import { ExamNotice } from "@/components/scrap/ExamNotice";
import SummaryList from "@/components/summaries/list";
import { getProtectedDownloads } from "@/lib/exams";

export const metadata: Metadata = {
  title: "Alles rund um datkom",
  description: "Gern geschehen",
  alternates: {
    canonical: "/syscom/studium/teachings",
  },
};

export default async function Page() {
  const exams = await getProtectedDownloads("datkom");

  return (
    <div>
      <BasicSubjectInfo subject="datkom" />
      <p>
        Wehrle einer beschwert sich über Rechtschreib- und Grammatikfehler! Fix
        die{" "}
        <Link href={"https://github.com/htwr-aachen/htwr-aachen.de"}>
          https://github.com/htwr-aachen/htwr-aachen.de
        </Link>{" "}
        selber.{" "}
      </p>

      <h2 className="my-6 text-2xl font-semibold">
        Vielleicht nützliche Zusammenfassungen in ihrem eigenen Stil
      </h2>

      <SummaryList subject="datkom" />

      <ExamNotice></ExamNotice>

      <ul className="ml-8 list-disc">
        {exams.map((exam) => {
          return (
            <li key={exam}>
              <Link
                href={{
                  pathname: "/protected-download",
                  query: { file: exam },
                }}
                target="_blank"
              >
                {exam}
              </Link>
            </li>
          );
        })}
      </ul>

      <h2 className="my-6 text-2xl font-semibold">
        Und weil es möglich ist auch alle Aufgabenblätter
      </h2>
      <SubjectDocumentList subject="datkom" />
    </div>
  );
}
