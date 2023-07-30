import Link from "next/link";
import type { FC } from "react";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const FourOhFour: FC = () => {
  return (
    <Main
      institute="htwr"
      meta={
        <Meta
          title="404 Dirk sucht weiter - HTWR"
          description="Hier gibt es nichts zu sehen"
        ></Meta>
      }
    >
      <div>
        <h1 className="text-[10rem] font-semibold">404</h1>
        <span>
          Keine Sorge ich seh das du hier warst. Ich füg die bestimmt bald hinzu
        </span>
        <p>
          <Link href={"/"}>Aber nun zurück!</Link>
        </p>
      </div>
    </Main>
  );
};

export default FourOhFour;
