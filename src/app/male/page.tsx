import type { Metadata } from "next";

import { MaterialienSchnellzugriff } from "./Schnellzugriff";

export const metadata: Metadata = {
  description: "MALE content",
  alternates: {
    canonical: "/male",
  },
};

export default function IndexPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl">
        Mit einer Vorlesung von drei Lehrstühlen macht man es mir durchaus
        schwerer ein Clone zu machen : &#060;. Naja deswegen hier erstmal ein
        Generisches Template.
      </h1>

      <p className="mb-8 text-lg">
        Das jetzt doof mit dem neuen Fach. Viel anbieten kann ich hier auch
        nicht. Ich weiß auch gar nicht ob ich eine Zusammenfassung schreibe, da
        ich ja schon am{" "}
        <a href="https://panikzettel.htwr-aachen.de">Panikzettel</a> arbeite.
        Falls wer also Lust auf Zusammenfassung schreiben hat. Einfach einen
        Fork machen und unter /teachings/male/[name] Markdown schreiben :)
      </p>

      <MaterialienSchnellzugriff />
    </div>
  );
}
