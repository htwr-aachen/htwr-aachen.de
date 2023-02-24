import { motion } from "framer-motion";
import Link from "next/link";
import type { FC, ReactNode } from "react";

type FakultätsNavProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

type FakultätsNavLinkProps = {
  children: ReactNode;
  href: string;
  subElement?: ReactNode;
};
const FakultätsNavLink: FC<FakultätsNavLinkProps> = (props) => {
  return (
    <li className="w-full border-t-1 border-dotted border-white/50 last:border-b-1">
      <Link
        href={props.href}
        className="m-0 flex w-full px-4 py-2 text-sm font-medium text-white hover:border-b-0 hover:bg-white/10 lg:px-0"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 50 50"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          className="mr-2 mt-1 hidden h-[13px] w-auto lg:block"
        >
          <circle cx="25" cy="25" r="25" className="fill-white" />
          <g
            transform="matrix(1,0,0,1,0.205391,-7.10543e-15)"
            className="fill-rwth-accent"
          >
            <g transform="matrix(0.648283,0.648283,-1.01556,1.01556,11.4889,-15.3974)">
              <rect x="22.721" y="7.831" width="27.279" height="4.557" />
            </g>
            <g transform="matrix(0.648283,-0.648283,1.01556,1.01556,-9.04382,44.8647)">
              <rect x="22.721" y="7.831" width="27.279" height="4.557" />
            </g>
          </g>
        </svg>
        <div className="block">
          {props.children}
          {props.subElement && (
            <span className="block font-sans text-sm font-thin text-white lg:mb-3">
              {props.subElement}
            </span>
          )}
        </div>
        <div className="ml-auto mr-3 grid items-center justify-end lg:hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 50 50"
            version="1.1"
            className="h-[13px] fill-white "
          >
            <g transform="matrix(-0.574927,0.574927,-0.653001,-0.653001,67.8709,13.3023)">
              <path d="M45.386,12.257C45.386,12.113 45.322,11.975 45.206,11.874C45.091,11.772 44.934,11.715 44.771,11.715C42.745,11.715 36.294,11.715 34.268,11.715C34.104,11.715 33.948,11.772 33.833,11.874C33.717,11.975 33.653,12.113 33.653,12.257C33.653,16.559 33.653,45.156 33.653,49.459C33.653,49.602 33.717,49.74 33.833,49.841C33.948,49.943 34.104,50 34.268,50C36.294,50 42.745,50 44.771,50C44.934,50 45.091,49.943 45.206,49.841C45.322,49.74 45.386,49.602 45.386,49.459C45.386,45.156 45.386,16.559 45.386,12.257Z" />
            </g>
            <g transform="matrix(0.574927,0.574927,-0.653001,0.653001,22.4293,-8.7439)">
              <path d="M45.386,12.257C45.386,12.113 45.322,11.975 45.206,11.874C45.091,11.772 44.934,11.715 44.771,11.715C42.745,11.715 36.294,11.715 34.268,11.715C34.104,11.715 33.948,11.772 33.833,11.874C33.717,11.975 33.653,12.113 33.653,12.257C33.653,16.559 33.653,45.156 33.653,49.459C33.653,49.602 33.717,49.74 33.833,49.841C33.948,49.943 34.104,50 34.268,50C36.294,50 42.745,50 44.771,50C44.934,50 45.091,49.943 45.206,49.841C45.322,49.74 45.386,49.602 45.386,49.459C45.386,45.156 45.386,16.559 45.386,12.257Z" />
            </g>
          </svg>
        </div>
      </Link>
    </li>
  );
};

type FakultätsNavHeadingProps = {
  children: ReactNode;
};
const FakultätsNavHeading: FC<FakultätsNavHeadingProps> = ({ children }) => {
  return (
    <h3 className="grid items-center justify-start bg-white/10 py-2 px-3 text-sm font-bold uppercase lg:bg-transparent lg:px-0 lg:pb-3 lg:text-lg">
      {children}
    </h3>
  );
};

const FakultätsNav: FC<FakultätsNavProps> = ({ setOpen }) => {
  return (
    <motion.div
      key={"FakultätsNav"}
      animate={{ height: "auto" }}
      initial={{ height: "0px" }}
      exit={{ height: "0px" }}
      transition={{ duration: 0.125, ease: "linear" }}
      className={`relative hidden overflow-hidden bg-rwth-accent px-32 text-white lg:block`}
    >
      <div className="relative hidden grid-rows-[auto_1fr] lg:grid ">
        <div className="border-b-4 border-white/10 py-6">
          <span>Sie sind hier:</span>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-0 rounded bg-white/10 px-2 py-1 text-sm hover:bg-black/100"
          >
            Schliessen
          </button>
        </div>
        <div className="grid grid-cols-[1fr_2fr_1fr] py-4">
          <div className="border-r-1 border-white/10 pr-4">
            <FakultätsNavHeading>RWTH</FakultätsNavHeading>
            <ul className="m-0 w-full">
              <FakultätsNavLink href="/">Hauptseite</FakultätsNavLink>
              <FakultätsNavLink href="/moodle">Intranet</FakultätsNavLink>
            </ul>
          </div>
          <div className="px-4">
            <FakultätsNavHeading>Fakultäten und Institute</FakultätsNavHeading>
            <div className="grid grid-cols-2 gap-8">
              <ul className="m-0 w-full">
                <FakultätsNavLink href="/syscom" subElement="DatKom">
                  Syscom (Wehrle)
                </FakultätsNavLink>
                <FakultätsNavLink href="/es" subElement="SWT">
                  ES (Rumpe)
                </FakultätsNavLink>
              </ul>
              <ul className="m-0 w-full">
                <FakultätsNavLink href="/scil" subElement="BuK">
                  SCIL (Grohe)
                </FakultätsNavLink>
              </ul>
              <div className="col-span-2 grid grid-cols-2 border-t-4 border-white/10 pt-6 pb-2">
                <FakultätsNavHeading>Institut suchen</FakultätsNavHeading>
                <div className="grid items-center justify-center">
                  <input
                    className="rounded bg-white/10 px-2 py-1 text-sm"
                    placeholder="Search"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="border-l-1 border-white/10 pl-4">
            <FakultätsNavHeading>Einrichtungen</FakultätsNavHeading>

            <ul className="m-0 w-full">
              <FakultätsNavLink href="/lernräume">Lernräume</FakultätsNavLink>
              <FakultätsNavLink href="/botmein">
                Hochschulsport
              </FakultätsNavLink>
              <FakultätsNavLink href="/getmeoutofhere">
                Exmatrikulieren
              </FakultätsNavLink>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FakultätsNavMobile: FC<FakultätsNavProps> = ({ open, setOpen }) => {
  return (
    <motion.div
      key={"FakultätsNav"}
      className={`fixed top-0 h-full w-[275px] bg-rwth-accent text-white transition-all lg:hidden ${
        open ? "right-0 z-50" : "right-[-300px] -z-50 opacity-0"
      }`}
    >
      <div className="relative">
        <div className="border-y-1 border-dotted border-white/10 p-3">
          <button
            onClick={() => setOpen(false)}
            className="mr-4 rounded bg-white/10 px-2 py-1 text-sm hover:bg-black/100"
          >
            Zurück
          </button>
          <span>Sie sind hier:</span>
        </div>
        <div className="px-3 py-2">
          <input
            className="w-full rounded bg-white/10 px-2 py-1 text-sm"
            placeholder="Search"
          ></input>
        </div>
        <div>
          <div className="">
            <FakultätsNavHeading>Fakultäten und Institute</FakultätsNavHeading>
            <div>
              <ul className="m-0 w-full">
                <FakultätsNavLink href="/syscom" subElement="DatKom">
                  Syscom (Wehrle)
                </FakultätsNavLink>
                <FakultätsNavLink href="/es" subElement="SWT">
                  ES (Rumpe)
                </FakultätsNavLink>
              </ul>
              <ul className="m-0 w-full">
                <FakultätsNavLink href="/scil" subElement="BuK">
                  SCIL (Grohe)
                </FakultätsNavLink>
              </ul>
            </div>
          </div>
          <div className="border-l-1 border-white/10">
            <FakultätsNavHeading>Einrichtungen</FakultätsNavHeading>
            <ul className="m-0 w-full">
              <FakultätsNavLink href="/lernräume">Lernräume</FakultätsNavLink>
              <FakultätsNavLink href="/botmein">
                Hochschulsport
              </FakultätsNavLink>
              <FakultätsNavLink href="/getmeoutofhere">
                Exmatrikulieren
              </FakultätsNavLink>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { FakultätsNav, FakultätsNavMobile };
