import type { FC } from "react";

import {
  Schnellzugriff,
  SchnellzugriffLink,
} from "@/components/rwth/schnellzugriff";

export const MaterialienSchnellzugriff: FC = () => {
  return (
    <div className="max-h-410">
      <Schnellzugriff title="Materialien">
        <SchnellzugriffLink href="/wsi/stocha">Stocha</SchnellzugriffLink>
        <SchnellzugriffLink href="/wsi/stocha/summaries">
          Zusammenfassungen
        </SchnellzugriffLink>
        <SchnellzugriffLink href="/wsi/stocha/materials">
          Aufgaben
        </SchnellzugriffLink>
      </Schnellzugriff>
    </div>
  );
};
