import type { Metadata } from "next";
import Link from "next/link";
import { join } from "path";

import { HeadLine } from "@/components/rwth/headline";
import { getAllDocsFromDir } from "@/lib/documents";

import { MaterialienSchnellzugriff } from "../../Schnellzugriff";

async function getData() {
  const folien = getAllDocsFromDir(
    join(process.cwd(), "public", "teaching-assets", "cesti", "folien"),
    "/teaching-assets/cesti/folien",
    false
  );

  return {
    folien: await folien,
  };
}

export const metadata: Metadata = {
  title: "Material",
  description: "IT-Sicherheit sollte gelernt sein",
  alternates: {
    canonical: "/cesti/studium/material",
  },
};

export default async function TeachingsPage() {
  const { folien } = await getData();

  const pgpMessaage = ` 
-----BEGIN PGP MESSAGE-----

hQIMAwAAAAAAAAAAARAAlStyFfkzGMxRBgq9rgpQ3Y4ldrOBnBnrPUO3/YT8yO85
hWwI6EESGlzocvpT8Y5x75L9AapQlMh1g7C1zT5nZKP5u+kH7un3XlaMJ4+5J6lI
dUDw7IJrpRgpmZfifCaNKweFW3udBz2Duh547nQDxcfrRmsTA5XukaD/LIHuGsXf
RBLX1ABdODSvQNGuNHCrHnV5aW9Yy0ONztQ/PPt1AKUGy6gWF8zRX4cPKWu1+WFN
U0rVY+PdzmmfTWnFedssu7CajSAXcyQ5puIQZCXWM6tzvPbcobydv+UFHat8n2Gq
mtU0a+wkDF79l3bGJbDxh/dJOMrwvWYeOCx8OGVvxN84jsbThyhPq6CPdCihUcx8
2pi13DQOCd1sqgXlyhQ9yEG5PF3dwq6l1+SYCdBo6RNraZq6XYXQAJKoWAiPGvXE
u0jmU6G3GqV8lsDcC63lAMH+tB5RV8dKMU6jcGtLaZ1U9N2rne1WYQegFSBhOlvn
wSILBa3PNVDUO9y0buujZr+opSiR3EDOCcIfNcZyUAT/HxCm17urUnR2ubWqadwj
bblQEC4nm04Hyy4Ra0uTHK27FV+o4l+ueMkkIiwNMUvUSzusNJ/Ra6H3r9ECmeni
kNcjXSz5G+UsFC6kj3jhHef1Bcw7txy+McCKC5ISRPgEf9Ux0tZwA5p322pV9JXS
cgHR2VPoZIPowC6wLqZrVJwWeixuW6VE+VCzot4JrYLuF/VCzHS2oIrry7IPgtQD
N1hmlsm8o4NxIoagr8OKsM96hocGWDWFl7JOltlu5CsGebYp+1P/PhZJNZcUtUzD
aKfIByo25Db3SINj5FU5GuLWAw==
=eZim
-----END PGP MESSAGE-----
    `;

  return (
    <div className="px-3">
      <HeadLine title="Vorlesungsmaterialien" />
      <div className="grid grid-flow-row-dense grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_250px] lg:grid-rows-[auto_auto]">
        <div className="">
          <h1 className="font-sans text-4xl font-light" id="folien-merge">
            Vorlesungsfolien / Script
          </h1>

          <pre className="my-2 whitespace-pre-line">{pgpMessaage}</pre>

          <ul className="my-2 ml-8 list-disc">
            <li>
              <a
                target={"_blank"}
                href="/teaching-assets/cesti/folien-merged.pdf"
              >
                Folienmerge
              </a>
            </li>
            <li>
              <a target={"_blank"} href="https://panikzettel.htwr-aachen.de">
                Panikzettel (Er braucht noch ein bisschen)
              </a>
            </li>
          </ul>

          <h2 className="font-sans text-4xl font-light" id="folien">
            Alle Folien
          </h2>

          <ul className="my-2 ml-8 list-disc">
            {folien.map((doc) => {
              return (
                <li key={doc.name}>
                  <Link href={doc.url} target={"_blank"}>
                    {doc.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <MaterialienSchnellzugriff />
      </div>
    </div>
  );
}
