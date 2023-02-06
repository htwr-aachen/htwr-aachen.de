import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect, useState } from "react";

export type LinkType = {
  href: string;
  name: string;
};

type NavlinkProps = {
  display: LinkType;
  links?: LinkType[];
};

const Navlink: FC<NavlinkProps> = ({ links, display }) => {
  const router = useRouter();

  const [isDropdown, setIsDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    if (links) {
      setIsDropdown(links.length > 0);

      if (links.length === 0) {
        setIsActive(router.pathname.startsWith(display.href));
      }
    }
  }, [links, router.pathname]);

  return (
    <li className="p-[.5rem 1rem] mr-4 text-center text-base text-black">
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
            type="button"
            className={"after-icon transition-colors hover:text-blue-400"}
            onClick={() => {
              setIsActive((x) => !x);
              setDropdownActive((x) => !x);
            }}
          >
            {display.name}
          </button>
          <div
            className={
              dropdownActive
                ? "visible absolute rounded-md border-[1px] border-gray-300 bg-white"
                : "visible hidden"
            }
          >
            <ul>
              {links?.map((link, index) => (
                <li key={index} className="py-1 no-underline">
                  <Link
                    href={link.href}
                    style={{ textDecoration: "none !important" }}
                    className=" px-10 text-black no-underline transition-colors hover:text-blue-400"
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
