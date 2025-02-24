import type { FC } from "react";

import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";

export const MaterialienSchnellzugriff: FC = () => {
  return (
    <div className="max-h-410">
      <Schnellzugriff title="Materialien">
        <Schnellzugrifflink href="/male/teachings">
          Zusammenfassungen
        </Schnellzugrifflink>
        <Schnellzugrifflink href="/male/material">
          Material oder so
        </Schnellzugrifflink>
      </Schnellzugriff>
    </div>
  );
};
