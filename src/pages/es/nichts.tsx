import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

const NichtsPage: FC = () => {
  return (
    <Main
      meta={
        <Meta title="Nichts @ ES/HTWR" description="wirklich nichts"></Meta>
      }
    >
      <HeadLine>Also wirklich nichts</HeadLine>
    </Main>
  );
};

export default NichtsPage;
