import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/scil/Main";

const Studium: FC = () => {
  return (
    <Main
      meta={
        <Meta title="SCIL@HTWR - Studium" description="Studium für BUK"></Meta>
      }
    >
      <HeadLine title="Studium" />
      <p className="my-4">Jaja hier kommt bald was für BuK.</p>

      <Schnellzugriff title="Materialien">
        <Schnellzugrifflink href="/scil/studium/klausuren">
          Klausuren
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/scil/studium/aufgaben">
          Aufgaben (bald)
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/scil/studium/teachings">
          Zusammenfassungen (bald)
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/scil/studium/fragen">
          Fragen (bald)
        </Schnellzugrifflink>
      </Schnellzugriff>
    </Main>
  );
};

export default Studium;
