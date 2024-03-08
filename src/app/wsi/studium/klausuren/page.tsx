import type { Metadata } from "next";
import Link from "next/link";

import { HeadLine } from "@/components/rwth/headline";
import { ExamNotice } from "@/components/scrap/ExamNotice";
import { getProtectedDownloads } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../../Schnellzugriff";

export const metadata: Metadata = {
  title: "Klausuren",
  description: "Klausurensammlung für Stocha",
  alternates: {
    canonical: "/wsi/studium/klausuren",
  },
};

export default async function KlausurenPage() {
  const klausuren = await getProtectedDownloads("stocha");

  return (
    <div className="px-2">
      <HeadLine title="Klausuren" />
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
        <div>
          <MaterialienSchnellzugriff />
        </div>
      </div>
    </div>
  );
}
