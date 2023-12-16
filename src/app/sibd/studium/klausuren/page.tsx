import type { Metadata } from "next";
import Link from "next/link";

import { HeadLine } from "@/components/rwth/headline";
import { getProtectedDownloads } from "@/lib/documents";

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
  const klausuren = await getProtectedDownloads("dbis");
  return (
    <div>
      <div className="px-2">
        <HeadLine title="Klausuren" />
        <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
          <div className="mx-2 lg:m-0">
            <span>
              Hat wer Klausuren für DBIS?. Wenn ja:{" "}
              <a href="mailto:jonas.max.schneider@gmail.com">
                jonas.max.schneider@gmail.com
              </a>
            </span>

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
            <SIBDSchnellzugriff />
          </div>
        </div>
      </div>
    </div>
  );
}
