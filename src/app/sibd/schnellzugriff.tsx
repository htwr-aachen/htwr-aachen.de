import type { FC } from "react";

import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";

export const SIBDSchnellzugriff: FC = () => {
  return (
    <div className="max-h-410">
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
