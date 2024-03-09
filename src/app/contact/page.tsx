import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

import Main from "@/layouts/Main";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "überleg nochmal ob du wirklich stress willst",
};

const Contact: FC = () => {
  return (
    <Main institute="htwr">
      <h1 className="font-roboto text-3xl">Kontakt</h1>
      <ul className="ml-6 list-disc">
        <li>
          GPG Key Fingerprint:{" "}
          <code>4F31D404DB9306B9E8682BED1B95684041835F5F</code>
        </li>
        <li>
          <a href="https://keys.openpgp.org/search?q=4F31D404DB9306B9E8682BED1B95684041835F5F">
            GPG-Keyserver entry
          </a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:contact@htwr-aachen.de">contact@htwr-aachen.de</a>
        </li>
        <li>
          Discord:{" "}
          <a
            target={"_blank"}
            href="https://discordapp.com/users/317018058428514314"
            rel="noreferrer"
          >
            Jonsch318#4006
          </a>
        </li>
      </ul>

      <h2 className="font-roboto text-2xl">Impressum</h2>
      <Link href="/impressum" className="ml-6">
        hier.
      </Link>
    </Main>
  );
};

export default Contact;
