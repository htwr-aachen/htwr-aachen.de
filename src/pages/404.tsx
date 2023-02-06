import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

const FourOhFour = () => {
  return (
    <Main meta={<Meta title="404 Dirk sucht weiter"></Meta>}>
      <div>
        <h1 className="text-[10rem] font-semibold">404</h1>
        <span>
          Keine Sorge ich seh das du hier warst. Ich füg die bestimmt bald hinzu
        </span>
        <p>
          <Link href={"/syscom/"}>Aber nun zurück!</Link>
        </p>
      </div>
    </Main>
  );
};

export default FourOhFour;
