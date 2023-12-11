import Link from "next/link";
import type { ReactNode } from "react";

import { HeadLine } from "@/components/rwth/headline";
import urlJoin from "@/lib/url";
import { BaseURL } from "@/utils/AppConfig";

import type { Panikzettel } from "../api/panikzettel/route";

async function getData(): Promise<Panikzettel[]> {
  const res = await fetch(urlJoin(BaseURL, "/api/panikzettel"), {
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
}

function Panikzettellist(props: {
  panikzettel: Panikzettel[];
  children?: ReactNode;
}) {
  if (props.panikzettel.length < 1) {
    return <></>;
  }
  return (
    <div>
      <span>{props.children}</span>
      <ul className="list-disc md:ml-20">
        {props.panikzettel.map((p) => (
          <li key={p.id}>
            <a href={p.url}>{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pflichfächer(props: { panikzettel: Panikzettel[] }) {
  return (
    <div>
      <h2 className="text-2xl">Pflichtfächer</h2>
      <div className="grid grid-rows-6 md:grid-cols-3 md:grid-rows-2">
        <Panikzettellist
          panikzettel={props.panikzettel.filter((x) => x.semester === 1)}
        >
          1. Semester
        </Panikzettellist>
        <Panikzettellist
          panikzettel={props.panikzettel.filter((x) => x.semester === 2)}
        >
          2. Semester
        </Panikzettellist>
        <Panikzettellist
          panikzettel={props.panikzettel.filter((x) => x.semester === 3)}
        >
          3. Semester
        </Panikzettellist>
        <Panikzettellist
          panikzettel={props.panikzettel.filter((x) => x.semester === 4)}
        >
          4. Semester
        </Panikzettellist>
        <Panikzettellist
          panikzettel={props.panikzettel.filter((x) => x.semester === 5)}
        >
          5. Semester
        </Panikzettellist>
        <Panikzettellist
          panikzettel={props.panikzettel.filter((x) => x.semester === 6)}
        >
          6. Semester
        </Panikzettellist>
      </div>
    </div>
  );
}

export default async function Page() {
  const panikzettel = await getData();
  return (
    <div className="mx-6">
      <HeadLine>Panikzettel</HeadLine>
      <Link
        className="absolute right-5 top-5 rounded bg-rwth-warn2 px-6 py-3 transition-colors hover:bg-rwth-warn"
        href={"/"}
      >
        Zurück zu HTWR
      </Link>
      <Pflichfächer panikzettel={panikzettel.filter((x) => x.type === "pf")} />

      <hr className="black my-4 border-2" />
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h2>Wahlpflichfächer</h2>
          <Panikzettellist
            panikzettel={panikzettel.filter((x) => x.type === "wpf")}
          />
        </div>
        <div>
          <h2>Anwendungsfächer</h2>
          <Panikzettellist
            panikzettel={panikzettel.filter((x) => x.type === "af")}
          />
        </div>
      </div>
    </div>
  );
}
