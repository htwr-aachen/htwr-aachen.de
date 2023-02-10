import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/scil/Main";

const Studium: FC = () => {
  return (
    <Main
      meta={
        <Meta title="SCIL@HTWR - Studium" description="Studium für BUK"></Meta>
      }
    >
      <div>
        <HeadLine title="Studium" />
        <p>Jaja hier kommt bald was für BuK.</p>
      </div>
    </Main>
  );
};

export default Studium;
