import React from "react";

import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

import { MaterialienSchnellzugriff } from "..";

export default function ISBDPage() {
  return (
    <Main
      institute="isbd"
      meta={<Meta title="ISBD@HTWR" description="DBIS ist toll"></Meta>}
    >
      <HeadLine>DBIS :(</HeadLine>

      <MaterialienSchnellzugriff />
    </Main>
  );
}
