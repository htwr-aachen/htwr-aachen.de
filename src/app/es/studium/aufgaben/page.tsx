import type { Metadata } from "next";
import Link from "next/link";
import { join } from "path";

import { getAllDocsFromDir } from "@/lib/documents";

const aufgabenPath = join(
  process.cwd(),
  "public",
  "teaching-assets",
  "es",
  "aufgaben"
);

export const metadata: Metadata = {
  title: "Aufgaben",
  description: "Aufgabensammlung plus unsere (schlechten) Lösungen",
};

export default async function Page() {
  const aufgaben = await getAllDocsFromDir(
    aufgabenPath,
    "/teaching-assets/es/aufgaben",
    true
  );

  return (
    <div>
      <h1 className="font-roboto text-4xl font-light" id="aufgaben">
        Aufgaben + Eigenlösungen
      </h1>
      <span>
        Wenn jemand bessere Lösugen abgeben will:{" "}
        <a
          target={"_blank"}
          href="mailto:jonas.max.schneider@gmail.com"
          rel="noreferrer"
        >
          jonas.max.schneider@gmail.com
        </a>{" "}
        oder Discord:{" "}
        <a
          target={"_blank"}
          href="https://discordapp.com/users/317018058428514314"
          rel="noreferrer"
        >
          Jonsch318#4006
        </a>
      </span>

      <ul className="ml-8 mt-8 list-disc">
        {aufgaben.map((aufgabe) => {
          return (
            <li key={aufgabe.name}>
              <Link href={aufgabe.url} target={"_blank"}>
                {aufgabe.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <span className="mt-5 block">
        Klausuren gibts <Link href={"/es/klausuren"}>hier</Link> und
        Zusammenfassungen <Link href={"/es/teachings"}>hier.</Link>
      </span>
    </div>
  );
}
