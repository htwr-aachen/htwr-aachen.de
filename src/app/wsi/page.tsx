import type { Metadata } from "next";

import { MaterialienSchnellzugriff } from "./Schnellzugriff";

export const metadata: Metadata = {
  description: "Stocha content",
};

export default function IndexPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl">
        Ich bin zu faul um mich von der WSI Webseite zu "inspirieren" somit gibt
        es jetzt das Standard HTWR Layout :)
      </h1>

      <MaterialienSchnellzugriff />
    </div>
  );
}
