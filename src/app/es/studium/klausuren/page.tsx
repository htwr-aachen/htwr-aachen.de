import type { Metadata } from "next";
import Link from "next/link";

import { getProtectedDownloads } from "@/lib/documents";

export const metadata: Metadata = {
  title: "Klausuren",
  description:
    "Klausurensammlung ist vielleicht bissle copyright technisch schwierig... naja",
  alternates: {
    canonical: "/es/studium/klausuren",
  },
};

export default async function Page() {
  const klausuren = await getProtectedDownloads("swt");
  return (
    <div>
      <h1 className="font-roboto text-4xl font-light" id="klausuren">
        Klausuren
      </h1>
      <span>
        Wenn jemand weitere hat:{" "}
        <a href="mailto:jonas.max.schneider@gmail.com">
          jonas.max.schneider@gmail.com
        </a>
      </span>

      <p className="my-4">
        Es gibt ein Master-Fach Model Based <b>Software Engineering</b>, also
        bei Klausuren auf den Namen achten! (Ist mir selber passiert ups)
      </p>

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

      <span className="mt-5 block">
        Aufgaben gibts <Link href={"/es/aufgaben"}>hier</Link> und
        Zusammenfassungen <Link href={"/es/teachings"}>hier.</Link>
      </span>
    </div>
  );
}
