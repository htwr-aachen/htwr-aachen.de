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
        <Schnellzugrifflink href="/scil/studium">Studium</Schnellzugrifflink>
        <Schnellzugrifflink href="/scil/studium/klausuren">
          Klausuren
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/scil/studium/teachings">
          Zusammenfassungen
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/scil/studium/aufgaben">
          Aufgaben
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/scil/studium/fragen">
          Fragen (bald)
        </Schnellzugrifflink>
      </Schnellzugriff>
    </div>
  );
};

const Studium: FC = () => {
  return (
    <Main
      meta={
        <Meta title="SCIL@HTWR - Studium" description="Studium für BUK"></Meta>
      }
      institute="scil"
    >
      <HeadLine title="Studium" />
      <p className="my-4">Jaja hier kommt bald was für BuK.</p>

      <MaterialienSchnellzugriff />
    </Main>
  );
};

export default Studium;
