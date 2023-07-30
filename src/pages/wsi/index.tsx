import type { FC } from "react";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

import { MaterialienSchnellzugriff } from "./studium";

const WSIIndexPage: FC = () => {
  return (
    <Main institute="wsi" meta={<Meta title="WSI - Stocha"></Meta>}>
      <h1 className="text-2xl">
        Ich bin zu faul um mich von der WSI Webseite zu "inspirieren" somit gibt
        es jetzt das Standard HTWR Layout :)
      </h1>

      <MaterialienSchnellzugriff />
    </Main>
  );
};

export default WSIIndexPage;
