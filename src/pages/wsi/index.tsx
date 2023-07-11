import type { FC } from "react";

import { WSIConfig } from "@/layouts/configs";
import { Meta } from "@/layouts/Meta";
import { WSINavbar } from "@/layouts/rwth/instituteConfig";
import { Main } from "@/layouts/rwth/Main";

const WSIIndexPage: FC = () => {
  return (
    <Main
      {...WSIConfig}
      meta={<Meta title="WSI"></Meta>}
      navbarConfig={WSINavbar}
    >
      <h1 className="text-2xl">
        Ich bin zu faul um mich von der WSI Webseite zu "inspirieren" somit gibt
        es jetzt das Standard HTWR Layout :)
      </h1>
    </Main>
  );
};

export default WSIIndexPage;
