import type { FC } from "react";

import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";

export const MaterialienSchnellzugriff: FC = () => {
  return (
    <div className="max-h-410">
      <Schnellzugriff title="Materialien">
        <Schnellzugrifflink href="/cesti/studium//teachings">
          Zusammenfassungen
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/cesti/studium/material">
          Material oder so
        </Schnellzugrifflink>
      </Schnellzugriff>
    </div>
  );
};
