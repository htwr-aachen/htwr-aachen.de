import type { ReactNode } from "react";

import Main from "@/layouts/Main";

export default function CESTILayout(props: { children: ReactNode }) {
  return <Main institute="cesti">{props.children}</Main>;
}
