import React from "react";

import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

import { MaterialienSchnellzugriff } from "..";

export default function sibdPage() {
  return (
    <Main
      institute="sibd"
      meta={<Meta title="SIBD@HTWR" description="DBIS ist toll"></Meta>}
    >
      <HeadLine>DBIS :(</HeadLine>

      <MaterialienSchnellzugriff />
    </Main>
  );
}
