import Link from "next/link";
import type { ReactNode } from "react";

import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";

export function SwitchBlock(props: { link: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded bg-gray-300 p-12 text-center font-sans text-xl font-medium">
      {props.children}
      <Link
        href={props.link}
        className="no-b mt-4 rounded bg-rwth-accent px-4 py-2 text-sm text-white hover:bg-rwth-accent/75"
      >
        Das hier
      </Link>
    </div>
  );
}

export function Switch() {
  return (
    <div className="mx-4 my-3 grid grid-cols-3 gap-4">
      <SwitchBlock link="/docs/guides/protokollant">
        Klausur Protokollieren
      </SwitchBlock>
      <SwitchBlock link="/docs/guides/rechtschreibpolizei">
        Nur Fehler beheben
      </SwitchBlock>
      <SwitchBlock link="/docs/guides/zusammenfassungen">
        Zusammenfassungen ändern
      </SwitchBlock>
      <SwitchBlock link="/docs/guides/high-performer">
        Neues erschaffen
      </SwitchBlock>
    </div>
  );
}

export function DocsQuickLinks() {
  return (
    <div className="max-h-[410]">
      <Schnellzugriff title="Docs & Guides">
        <Schnellzugrifflink href="/docs">Docs</Schnellzugrifflink>
        <Schnellzugrifflink href="/docs/api">API Docs</Schnellzugrifflink>
        <Schnellzugrifflink href="/docs/guides/rechtschreibpolizei">
          Nur Fehler beheben
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/docs/guides/zusammenfassungen">
          Nur Zusammenfassungen ändern oder neue Themen zu einer bestehenden
          hinzufügen
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/docs/guides/high-performer">
          Neues erschaffen (React/Nextjs)
        </Schnellzugrifflink>
      </Schnellzugriff>
    </div>
  );
}
