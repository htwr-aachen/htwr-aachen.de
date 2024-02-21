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
      <p>
        Email: <a href="contact@htwr-aachen.de">contact@htwr-aachen.de</a>{" "}
        <br></br>
        Discord:{" "}
        <a
          target={"_blank"}
          href="https://discordapp.com/users/317018058428514314"
          rel="noreferrer"
        >
          Jonsch318#4006
        </a>
      </p>

      <h2 className="font-roboto text-2xl">Impressum</h2>
      <Link href="/impressum">hier.</Link>
    </Main>
  );
};

export default Contact;
