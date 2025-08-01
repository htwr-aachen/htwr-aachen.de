"use client";

import { LinkElement } from "@/models/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, RefObject } from "react";
import { useEffect, useRef, useState } from "react";

type NavlinkProps = {
  display: LinkElement;
  links?: LinkElement[];
  isDropped?: boolean;
  dropdownNumber?: number;
  dropdownCallback?: (_dropdownNumber: number) => void;
};

function useOutsideAlerter(
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
}

const Navlink: FC<NavlinkProps> = ({
  links,
  display,
  isDropped,
  dropdownNumber,
  dropdownCallback,
}) => {
  const pathname = usePathname();
  const ref = useRef<HTMLButtonElement>(null);

  const [isDropdown, setIsDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(isDropped);

  useOutsideAlerter(ref, () => {
    if (dropdownActive && dropdownCallback) {
      dropdownCallback(dropdownNumber || 0);
    }
  });

  useEffect(() => {
    if (links) {
      setIsDropdown(links.length > 0);

      if (links.length === 0) {
        setIsActive(pathname?.startsWith(display.href.toString()) || false);
      }
    }
  }, [display.href, links, pathname]);

  useEffect(() => {
    setDropdownActive(isDropped);
  }, [isDropped]);

  return (
    <li className="p-[.5rem 1rem] my-2 mr-4 cursor-pointer text-right text-base text-black lg:my-0 lg:text-center">
      {!isDropdown ? (
        <Link
          href={display.href || "/es"}
          className={`transition-colors hover:text-blue-400 ${
            isActive ? "font-bold text-blue-500" : "font-normal text-black"
          }`}
        >
          {display.name}
        </Link>
      ) : (
        <div>
          <button
            ref={ref}
            type="button"
            className={
              "after-icon cursor-pointer transition-colors hover:text-blue-400"
            }
            onClick={() => {
              setIsActive((x) => !x);
              if (dropdownCallback) dropdownCallback(dropdownNumber || 0);
              else setDropdownActive((x) => !x);
            }}
          >
            {display.name}
          </button>
          <div
            className={
              dropdownActive
                ? "visible absolute right-2 rounded-md rounded-tl-none border-1 border-black/50 bg-white lg:right-auto"
                : "visible hidden"
            }
          >
            <ul>
              {links?.map((link, index) => (
                <li key={index} className="py-1 no-underline">
                  <Link
                    href={link.href}
                    style={{ textDecoration: "none !important" }}
                    className="px-10 text-black no-underline transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default Navlink;
