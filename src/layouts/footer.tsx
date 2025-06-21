"use client";

import Link from "next/link";
import { ComponentProps, ReactNode, useContext } from "react";

import { BannerNotifyContext } from "@/components/banner-provider";
import InstituteSwitches from "@/components/InstituteSwitches";
import { RealInstituteConfig } from "@/config/institutes";
import { Institute } from "@/models/institutes";
import { findAssociatedSubjects } from "@/lib/subjects";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useActiveInstitute } from "@/hooks/layout";

function FooterList({ children }: { children: ReactNode }) {
  return (
    <ul className="flex flex-col gap-6 text-2xl font-medium">{children}</ul>
  );
}

function FooterListItem({ children, ...props }: ComponentProps<"li">) {
  return <li {...props}>{children}</li>;
}

function FooterHeading({ children }: { children: ReactNode }) {
  return <h3 className="mb-6 text-3xl font-light">{children}</h3>;
}

export default function Footer() {
  const { setShow } = useContext(BannerNotifyContext);
  const institute = useActiveInstitute();
  return (
    <footer className="bg-cms-bg text-cms-bg-text cms px-12 pb-12">
      <div className="border-b-1 border-black py-20">
        <InstituteSwitches institute={institute} />
      </div>
      <div className="grid grid-cols-1 gap-x-3 gap-y-12 border-t-1 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <FooterHeading>HTWR</FooterHeading>
          <FooterList>
            <FooterListItem>
              <Link href={"/blog"} className="no-b text-inherit">
                Blog
              </Link>
            </FooterListItem>
            <FooterListItem>
              <button
                className="cursor-pointer text-left"
                onClick={() => {
                  setShow(true);
                }}
              >
                Benachrichtigungen aktivieren
              </button>
            </FooterListItem>
          </FooterList>
        </div>
        <div>
          <FooterHeading>Mithelfen</FooterHeading>
          <FooterList>
            <FooterListItem>
              <span>Diese Seite bearbeiten</span>
            </FooterListItem>
            <FooterListItem>
              <a
                className="text-inherit underline"
                href="mailto:feedback@htwr-aachen.de"
              >
                feedback@htwr-aachen.de
              </a>
            </FooterListItem>
          </FooterList>
        </div>
        <div>
          <FooterHeading>Navigation</FooterHeading>
          <FooterList>
            <FooterListItem>
              <Link href="/" className="no-b text-inherit">
                HTWR Home
              </Link>
            </FooterListItem>
            {Object.values(RealInstituteConfig).map((institute: Institute) => {
              return (
                <FooterListItem key={institute.name}>
                  <Link href={institute.href} className="no-b text-inherit">
                    {institute?.displayName || institute.name} /
                    {findAssociatedSubjects(institute.name).join(", ")}
                  </Link>
                </FooterListItem>
              );
            })}
          </FooterList>
        </div>
        <div>
          <FooterHeading>Rechtliches Gedöns</FooterHeading>
          <FooterList>
            <FooterListItem>
              <Link href={"/impressum"} className="no-b text-inherit">
                Impressum
              </Link>{" "}
            </FooterListItem>
            <FooterListItem>
              <Link href={"/datenschutz"} className="no-b text-inherit">
                Datenschutz
              </Link>{" "}
            </FooterListItem>
            <FooterListItem>Bitte alles mit Humor nehmen.</FooterListItem>
          </FooterList>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <span className="font-light">
          Parodieseite. Alle Angaben ohne Gewähr. Keine Verbindung zur RWTH
          Aachen!
        </span>
        <ul className="flex flex-row items-center justify-items-end justify-self-end">
          <li>
            <a href="https://github.com/htwr-aachen/htwr-aachen.de">
              <SiGithub></SiGithub>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
