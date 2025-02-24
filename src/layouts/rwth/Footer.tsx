"use client";

import Link from "next/link";
import { type FC, useContext } from "react";

import { BannerNotifyContext } from "@/components/banner-provider";
import InstituteSwitches from "@/components/InstituteSwitches";
import type { Institutes } from "@/config/institutes";

type FooterProps = {
  institute: Institutes;
};

const Footer: FC<FooterProps> = ({ institute }) => {
  const { setShow } = useContext(BannerNotifyContext);
  return (
    <footer className="inset-x-0 mx-auto h-[220px] w-full border-t-1 bg-[#333] py-12 text-white lg:max-w-(--breakpoint-xl)">
      <InstituteSwitches institute={institute} />
      <div className="py-12 text-center">
        <Link href={"/updates"} className="text-white hover:border-b-1">
          Updates
        </Link>
        {" & "}
        <button
          className="hover:border-b-1"
          onClick={() => {
            setShow(true);
          }}
        >
          Benachrichtigungen aktivieren
        </button>
        {" & "}
        <Link href={"/impressum"} className="text-white hover:border-b-1">
          Impressum
        </Link>{" "}
        &{" "}
        <Link href={"/datenschutz"} className="text-white hover:border-b-1">
          Datenschutz
        </Link>{" "}
        & Bitte alles mit Humor nehmen.
        <br />
        Gebt gerne Feedback:{" "}
        <a
          className="text-white underline"
          href="mailto:feedback@htwr-aachen.de"
        >
          feedback@htwr-aachen.de
        </a>
      </div>
    </footer>
  );
};

export default Footer;
