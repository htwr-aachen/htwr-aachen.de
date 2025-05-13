import type { FC } from "react";

import {
  Schnellzugriff,
  SchnellzugriffLink,
} from "@/components/rwth/schnellzugriff";

export const MaterialienSchnellzugriff: FC = () => {
  return (
    <div className="max-h-410">
      <Schnellzugriff title="Materialien">
        <SchnellzugriffLink href="/wsi/studium">Studium</SchnellzugriffLink>
        <SchnellzugriffLink href="/wsi/studium/klausuren">
          Klausuren
        </SchnellzugriffLink>
        <SchnellzugriffLink href="/wsi/studium/teachings">
          Zusammenfassungen
        </SchnellzugriffLink>
        <SchnellzugriffLink href="/wsi/studium/aufgaben">
          Aufgaben
        </SchnellzugriffLink>
      </Schnellzugriff>
    </div>
  );
};
