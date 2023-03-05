import Link from "next/link";
import type { FC } from "react";

import type { InstituteLink } from "@/models/layout";

type InstituteSwitchesProps = {
  links: InstituteLink[];
};

type InstituteSwitchProps = InstituteLink & {
  right?: boolean;
};

const InstituteSwitch: FC<InstituteSwitchProps> = ({ url, name, right }) => {
  return (
    <div
      className={`bottom-10 my-3 justify-self-center ${
        right ? "lg:justify-self-end" : "lg:justify-self-start"
      }`}
    >
      <Link
        href={url || "/"}
        className="pointer-events-auto transform-gpu rounded-md bg-black py-2 px-3 text-white transition-transform hover:scale-105 hover:border-b-0"
      >
        {!right ? "<" : ""} Zur {name} Website {right ? ">" : ""}
      </Link>
    </div>
  );
};

export { InstituteSwitch };

const InstituteSwitches: FC<InstituteSwitchesProps> = ({ links }) => {
  return (
    <div className="pointer-events-none left-0 grid w-full grid-cols-1 grid-rows-2 lg:fixed lg:bottom-10 lg:grid-cols-2 lg:grid-rows-1 lg:px-4">
      {links && links[0] && links[0].url ? (
        <InstituteSwitch {...links[0]} right={false} />
      ) : (
        <></>
      )}
      {links && links[1] && links[1].url ? (
        <InstituteSwitch {...links[1]} right={false} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default InstituteSwitches;
