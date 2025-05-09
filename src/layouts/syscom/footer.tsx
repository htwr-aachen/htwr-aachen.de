"use client";
import { BannerNotifyContext } from "@/components/banner-provider";
import InstituteSwitches from "@/components/InstituteSwitches";
import { Institutes } from "@/config/institutes";
import Link from "next/link";
import { useContext } from "react";

export function SysComFooter(props: { institute: Institutes }) {
  const { setShow } = useContext(BannerNotifyContext);
  return (
    <footer className="mt-8 flex w-full items-center justify-center border-t-1 border-t-black/50 bg-white pt-16 pb-16 text-black">
      <InstituteSwitches institute={props.institute} />
      <div className="text-center">
        <Link href={"/blog"} className="text-inherit hover:border-b-1">
          Blog
        </Link>
        {" & "}
        <button
          className="cursor-pointer hover:border-b-1"
          onClick={() => {
            setShow(true);
          }}
        >
          Benachrichtigungen aktivieren
        </button>
        {" & "}
        <Link href={"/impressum"} className="text-inherit hover:border-b-1">
          Impressum
        </Link>{" "}
        &{" "}
        <Link href={"/datenschutz"} className="text-inherit hover:border-b-1">
          Datenschutz
        </Link>{" "}
        & Bitte alles mit Humor nehmen.
        <br />
        Gebt gerne Feedback:{" "}
        <a
          className="text-inherit underline"
          href="mailto:feedback@htwr-aachen.de"
        >
          feedback@htwr-aachen.de
        </a>
      </div>
    </footer>
  );
}
