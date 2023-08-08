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
        <Schnellzugrifflink href="/sibd/studium">Studium</Schnellzugrifflink>
        <Schnellzugrifflink href="/sibd/studium/klausuren">
          Klausuren
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/sibd/studium/teachings">
          Zusammenfassungen
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/sibd/studium/aufgaben">
          Aufgaben
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/sibd/scheduler">
          Scheduler Recovery Solver
        </Schnellzugrifflink>
      </Schnellzugriff>
    </div>
  );
};

export default function sibdPage() {
  return (
    <Main
      institute="sibd"
      meta={<Meta title="SIBD@HTWR" description="DBIS ist toll"></Meta>}
    >
      <HeadLine>DBIS :(</HeadLine>

      <MaterialienSchnellzugriff />
    </Main>
  );
}
