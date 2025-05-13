import type { FC } from "react";

import {
  Schnellzugriff,
  SchnellzugriffLink,
} from "@/components/rwth/schnellzugriff";

export const SIBDSchnellzugriff: FC = () => {
  return (
    <div className="max-h-410">
      <Schnellzugriff title="Materialien">
        <SchnellzugriffLink href="/sibd/studium">Studium</SchnellzugriffLink>
        <SchnellzugriffLink href="/sibd/studium/klausuren">
          Klausuren
        </SchnellzugriffLink>
        <SchnellzugriffLink href="/sibd/studium/teachings">
          Zusammenfassungen
        </SchnellzugriffLink>
        <SchnellzugriffLink href="/sibd/studium/aufgaben">
          Aufgaben
        </SchnellzugriffLink>
        <SchnellzugriffLink href="/sibd/scheduler">
          Scheduler Recovery Solver
        </SchnellzugriffLink>
      </Schnellzugriff>
    </div>
  );
};
