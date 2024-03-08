import type { Metadata } from "next";
import Link from "next/link";

import { ExamNotice } from "@/components/scrap/ExamNotice";
import { getProtectedDownloads } from "@/lib/documents";

export const metadata: Metadata = {
  title: "Klausuren",
  description:
    "Da Klausuren immer problematisch zu verteilen sind werde ich da 100% sichere Captchas einbauen.",
  alternates: {
    canonical: "/cigol/studium/klausuren",
  },
};

export default async function Page() {
  const klausuren = await getProtectedDownloads("malo");

  return (
    <div>
      <div className="px-2">
        <h1 className="my-2 font-sans text-4xl font-bold">MALO Klausuren</h1>

        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 lg:m-0">
            <ExamNotice></ExamNotice>
            <ul className="ml-8 mt-8 list-disc">
              {klausuren.map((klausur) => {
                return (
                  <li key={klausur}>
                    <Link
                      href={{
                        pathname: "/protected-download",
                        query: { file: klausur },
                      }}
                      target="_blank"
                    >
                      {klausur}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
