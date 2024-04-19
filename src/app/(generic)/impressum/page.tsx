import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Main } from "@/layouts/rwth/Main";

export const metadata: Metadata = {
  title: "Wehe einer schickt mir nen Brief - Impressum",
  description: "Nichts zu sehen hier ist nur rechtlich notwendig",
};

const Impressum: FC = () => {
  return (
    <Main institute="htwr">
      <div className="prose">
        <h1>Impressum</h1>

        <Alert>
          <AlertTitle>🤔 Tatsächlich Interesant</AlertTitle>
          <AlertDescription>
            Da ich hiermit kein Finanziellen Absichten verfolge und auch keine
            Gewinne erziele (mit Werbung oder sonstigem) bräuchte ich vermutlich
            kein Impressum. Andererseits erreiche ich mittlerweile einenen
            "bedeutsamen Personenkreis" weswegen ich vielleicht doch wieder eins
            bräuchte... (und habe eventuell redaktionellen/journalistischen
            Inhalt)
          </AlertDescription>
        </Alert>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG (Warum brauche ich das??)</h2>
        <p>
          Jonas Max Schneider
          <br />
          Mostardstr. 22
          <br />
          52062 Aachen
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:contact@htwr-aachen.de">contact@htwr-aachen.de</a>{" "}
          <br />
          Discord: <code>jonsch318</code> (gemäß TMG muss ich nicht zwingend
          meine Telefonnummer doxen, da ich auf Discord/E-Mail umgehend
          antworte)
        </p>

        <h2>Redaktionell verantwortlich</h2>
        <p>Jonas Schneider</p>
      </div>

      <h1>Datenschutz</h1>
      <Link href="/datenschutz">hier.</Link>

      <p></p>

      <p className="mt-8">
        Wehe einer schickt mir nen Brief
        <br />
        <img
          src="https://media.tenor.com/8Rknmx3LiaQAAAAd/stoppt-mobbing-carsten-stahl.gif"
          alt="Carsten Stahl"
        />
      </p>
    </Main>
  );
};

export default Impressum;
