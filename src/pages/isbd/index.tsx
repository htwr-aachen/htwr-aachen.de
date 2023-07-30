import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

export const MaterialienSchnellzugriff: FC = () => {
  return (
    <div className="max-h-[410]">
      <Schnellzugriff title="Materialien">
        <Schnellzugrifflink href="/isbd/studium">Studium</Schnellzugrifflink>
        <Schnellzugrifflink href="/isbd/studium/klausuren">
          Klausuren
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/isbd/studium/teachings">
          Zusammenfassungen
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/isbd/studium/aufgaben">
          Aufgaben
        </Schnellzugrifflink>
      </Schnellzugriff>
    </div>
  );
};

export default function ISBDPage() {
  return (
    <Main
      institute="isbd"
      meta={<Meta title="ISBD@HTWR" description="DBIS ist toll"></Meta>}
    >
      <HeadLine>DBIS :(</HeadLine>

      <MaterialienSchnellzugriff />
    </Main>
  );
}
