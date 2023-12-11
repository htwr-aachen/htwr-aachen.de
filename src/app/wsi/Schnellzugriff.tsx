import type { FC } from "react";

import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";

export const MaterialienSchnellzugriff: FC = () => {
  return (
    <div className="max-h-[410]">
      <Schnellzugriff title="Materialien">
        <Schnellzugrifflink href="/wsi/studium">Studium</Schnellzugrifflink>
        <Schnellzugrifflink href="/wsi/studium/klausuren">
          Klausuren
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/wsi/studium/teachings">
          Zusammenfassungen
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/wsi/studium/aufgaben">
          Aufgaben
        </Schnellzugrifflink>
      </Schnellzugriff>
    </div>
  );
};
