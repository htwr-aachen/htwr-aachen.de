// dringends umbennen

import Link from "next/link";

import type { Panikzettel } from "@/models/panikzettel";

export default function PanikzettelSelection({
  title,
  selection,
}: {
  selection: Panikzettel[];
  title: string;
}) {
  return (
    <div className="w-full rounded-lg border border-black/30">
      <h3 className="p-4 text-lg font-bold">{title}</h3>
      <hr className="border-black/30" />
      <ul className="my-6 ml-6 list-disc px-4 pb-4 [&>li]:mt-2">
        {selection.map((x) => {
          return (
            <li key={x.name}>
              <Link href={x.url}>{x.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
