import Link from "next/link";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { SubStyling } from "@/lib/style";
import Main from "@/templates/CombinedMain";

const FourOhFour: FC = () => {
  return (
    <Main
      styling={SubStyling.None}
      meta={<Meta title="404 Dirk sucht weiter"></Meta>}
    >
      <div>
        <h1 className="text-[10rem] font-semibold">404</h1>
        <span>
          Keine Sorge ich seh das du hier warst. Ich füg die bestimmt bald hinzu
        </span>
        <p>
          <Link href={"/es/"}>Aber nun zurück!</Link>
        </p>
      </div>
    </Main>
  );
};

export default FourOhFour;
