import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Main } from "@/layouts/rwth/Main";

import { institute } from "./config";
import { navbar } from "./navbar";

export const metadata: Metadata = {
  title: {
    template: "%s - CESTI@HTWR",
    default: "CESTIHTWR",
  },
};
export default function CESTILayout(props: { children: ReactNode }) {
  return (
    <Main institute={institute} navbar={navbar}>
      {props.children}
    </Main>
  );
}
