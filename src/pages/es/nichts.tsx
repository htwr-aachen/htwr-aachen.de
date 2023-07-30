import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const NichtsPage: FC = () => {
  return (
    <Main
      meta={
        <Meta title="Nichts @ ES/HTWR" description="wirklich nichts"></Meta>
      }
      institute="es"
    >
      <HeadLine>Also wirklich nichts</HeadLine>
    </Main>
  );
};

export default NichtsPage;
