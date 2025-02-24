import type { Metadata } from "next";
import Link from "next/link";

import { HeadLine } from "@/components/rwth/headline";
import { ExamNotice } from "@/components/scrap/ExamNotice";
import { getProtectedDownloads } from "@/lib/exams";

import { SCILSchnellzugriff } from "../../schnellzugriff";

export const metadata: Metadata = {
  title: "Klausuren",
  description:
    "Klausurensammlung ist vielleicht bissle copyright technisch schwierig, aber für buk lohnt es sich... naja",
  alternates: {
    canonical: "/scil/studium/klausuren",
  },
};

export default async function Page() {
  const exams = await getProtectedDownloads("buk");
  return (
    <div>
      <div className="px-2">
        <HeadLine title="Klausuren" />
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 lg:m-0">
            <ExamNotice></ExamNotice>

            <ul className="mt-8 ml-8 list-disc">
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
            <SCILSchnellzugriff />
          </div>
        </div>
      </div>
    </div>
  );
}
