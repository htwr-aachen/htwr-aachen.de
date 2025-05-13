import type { FC } from "react";

import {
  Schnellzugriff,
  SchnellzugriffLink,
} from "@/components/rwth/schnellzugriff";

export const MaterialienSchnellzugriff: FC = () => {
  return (
    <div className="max-h-410">
      <Schnellzugriff title="Materialien">
        <SchnellzugriffLink href="/male/teachings">
          Zusammenfassungen
        </SchnellzugriffLink>
        <SchnellzugriffLink href="/male/material">
          Material oder so
        </SchnellzugriffLink>
      </Schnellzugriff>
    </div>
  );
};
