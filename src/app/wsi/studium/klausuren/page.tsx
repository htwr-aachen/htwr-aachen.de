import type { Metadata } from "next";
import Link from "next/link";

import { HeadLine } from "@/components/rwth/headline";
import { getProtectedDownloads } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../../Schnellzugriff";

export const metadata: Metadata = {
  title: "Klausuren",
  description: "Klausurensammlung für Stocha",
};

export default async function KlausurenPage() {
  const klausuren = await getProtectedDownloads("stocha");

  return (
    <div className="px-2">
      <HeadLine title="Klausuren" />
      <div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
        <div className="mx-2 lg:m-0">
          <span>
            Es gibt fast keine Klausuren für Stocha. Wenn jemand weitere hat:{" "}
            <a href="mailto:jonas.max.schneider@gmail.com">
              jonas.max.schneider@gmail.com
            </a>
            . Ich werde sie dann natürlich anonym hier hochladen.
          </span>

          <ul className="ml-8 mt-8 list-disc">
            {klausuren.map((klausur) => {
              return (
                <li key={klausur}>
                  <Link
                    href={{
                      pathname: "/proc-download",
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
