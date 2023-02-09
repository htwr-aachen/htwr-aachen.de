import Link from "next/link";
import type { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="scil font-roboto">
      {props.meta}

      <div className="container mx-auto max-w-[1000px] py-12 px-8 lg:px-0">
        {props.children}
      </div>
      <div className="mt-12 border-t-1 bg-[#333] py-12 text-center text-white">
        <Link href={"/impressum"}>Impressum</Link> & Bitte alles mit Humor
        nehmen.
      </div>
      <div className="text-red fixed bottom-10 left-10 text-red-500">
        <Link href="/es" className="text-red-500">
          &lt; Zur ES/SWT Website
        </Link>
      </div>
    </div>
  );
};

export { Main };
