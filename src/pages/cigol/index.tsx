import type { FC } from "react";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const CIGOLMain: FC = () => {
  return (
    <Main
      institute="cigol"
      meta={<Meta title="IGM - Informatische Grundlagen der Mathematik"></Meta>}
    >
      <h1 className="font-sans text-4xl font-semibold">
        Jaja hier kommt bald MaLo content...
      </h1>
    </Main>
  );
};

export default CIGOLMain;
