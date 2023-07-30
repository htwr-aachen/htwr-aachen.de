import Link from "next/link";
import type { FC } from "react";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const Contact: FC = () => {
  const meta = (
    <Meta
      title="contact"
      description="Willst Kontakt zu diesem scheiß hier?"
    ></Meta>
  );

  return (
    <Main institute="htwr" meta={meta}>
      <h1 className="font-roboto text-3xl">Kontakt</h1>
      <p>
        Email:{" "}
        <a href="jonas.max.schneider@gmail.com">
          jonas.max.schneider@gmail.com
        </a>{" "}
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
