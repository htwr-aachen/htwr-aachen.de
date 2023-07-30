import Link from "next/link";
import type { FC } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";
import type { Institutes } from "@/models/institutes";

type FooterProps = {
  institute: Institutes;
};

const Footer: FC<FooterProps> = ({ institute }) => {
  return (
    <footer className="inset-x-0 mx-auto h-[220px] w-full border-t-1 bg-[#333] py-12 text-white lg:max-w-[1280px]">
      <InstituteSwitches institute={institute} />
      <div className="py-12 text-center">
        <Link href={"/updates"} className="text-white">
          Updates
        </Link>
        {" & "}
        <Link href={"/impressum"} className="text-white">
          Impressum
        </Link>{" "}
        &{" "}
        <Link href={"/datenschutz"} className="text-white">
          Datenschutz
        </Link>{" "}
        & Bitte alles mit Humor nehmen.
      </div>
    </footer>
  );
};

export default Footer;
