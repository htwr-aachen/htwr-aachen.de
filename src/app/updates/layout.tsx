import type { ReactNode } from "react";

import { Main } from "@/layouts/rwth/Main";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Main institute="htwr">
      <div className="prose prose-stone lg:prose-lg">{children}</div>
    </Main>
  );
}
