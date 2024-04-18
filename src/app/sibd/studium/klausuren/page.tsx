import type { Metadata } from "next";
import Link from "next/link";

import { HeadLine } from "@/components/rwth/headline";
import { ExamNotice } from "@/components/scrap/ExamNotice";
import { getProtectedDownloads } from "@/lib/exams";

import { SIBDSchnellzugriff } from "../../schnellzugriff";

export const metadata: Metadata = {
  title: "Klausuren",
  description:
    "Da Klausuren immer problematisch zu verteilen sind werde ich da 100% sichere Captchas einbauen.",
  alternates: {
    canonical: "/sibd/studium/klausuren",
  },
};

export default async function Page() {
  const exams = await getProtectedDownloads("dbis");
  return (
    <div>
      <div className="px-2">
        <HeadLine title="Klausuren" />
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 lg:m-0">
            <ExamNotice></ExamNotice>

            <ul className="ml-8 mt-8 list-disc">
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
          </div>
          <div>
            <SIBDSchnellzugriff />
          </div>
        </div>
      </div>
    </div>
  );
}
