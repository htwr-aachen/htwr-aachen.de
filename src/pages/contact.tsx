import type { GetServerSideProps } from "next";
import Link from "next/link";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { SubStyling } from "@/lib/style";
import CombinedMain from "@/templates/CombinedMain";

type ContactProps = {
  styling: SubStyling;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      styling: (query.institute as SubStyling) || SubStyling.None,
    },
  };
};

const Contact: FC<ContactProps> = ({ styling }) => {
  const meta = (
    <Meta
      title="contact"
      description="Willst Kontakt zu diesem scheiß hier?"
    ></Meta>
  );

  return (
    <CombinedMain styling={styling} meta={meta}>
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
    </CombinedMain>
  );
};

export default Contact;
