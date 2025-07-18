import type { Metadata } from "next";
import Link from "next/link";

import { ExamNotice } from "@/components/scrap/ExamNotice";
import { getProtectedDownloads } from "@/lib/exams";

export const metadata: Metadata = {
  title: "Klausuren",
  description:
    "Klausurensammlung ist vielleicht bissle copyright technisch schwierig... naja",
  alternates: {
    canonical: "/es/studium/klausuren",
  },
};

export default async function Page() {
  const exams = await getProtectedDownloads("swt");
  return (
    <div>
      <h1 className="text-4xl font-light" id="klausuren">
        Klausuren
      </h1>
      <ExamNotice></ExamNotice>

      <p className="my-4">
        Es gibt ein Master-Fach Model Based <b>Software Engineering</b>, also
        bei Klausuren auf den Namen achten! (Ist mir selber passiert ups)
      </p>

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

      <span className="mt-5 block">
        Aufgaben gibts <Link href={"/es/studium/aufgaben"}>hier</Link> und
        Zusammenfassungen <Link href={"/es/studium/teachings"}>hier.</Link>
      </span>
    </div>
  );
}
