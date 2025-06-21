"use client";
import { NavbarConfig } from "@/models/layout";
import clsx from "clsx";
import { Menu, Moon, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SysComNav(props: { config: NavbarConfig }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-rwth-bg relative flex h-[75px] items-center justify-center lg:h-[100px]">
      <div className="grid w-full grid-cols-[auto_1fr_auto] items-center lg:max-w-7xl lg:grid-cols-[auto_1fr_auto_auto] lg:content-between">
        <button
          className="hover mr-6 ml-4 cursor-pointer rounded px-2 py-1 lg:hidden"
          onClick={() => setOpen((x) => !x)}
        >
          <Menu className="size-4 text-black" />
        </button>
        <div className="flex flex-row items-center text-[#34495E] lg:pl-4">
          <Link href="/syscom">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 128 128"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-rwth-accent font-[Arial, sans-serif] w-12 text-5xl font-bold"
            >
              <g>
                <path d="M128,16C128,7.163 120.837,0 112,0L16,0C7.163,0 0,7.163 0,16L0,112C0,120.837 7.163,128 16,128L112,128C120.837,128 128,120.837 128,112L128,16ZM123,16L123,112C123,118.075 118.075,123 112,123L16,123C9.925,123 5,118.075 5,112L5,16C5,9.925 9.925,5 16,5L112,5C118.075,5 123,9.925 123,16Z" />
                <path d="M128,64L0,64L0,112C-0,116.243 1.686,120.313 4.686,123.314C7.687,126.314 11.757,128 16,128C40.592,128 87.408,128 112,128C116.243,128 120.313,126.314 123.314,123.314C126.314,120.313 128,116.243 128,112C128,93.043 128,64 128,64ZM35.923,100.016L41.986,101.982C41.056,105.438 39.511,108.005 37.349,109.683C35.187,111.36 32.444,112.199 29.12,112.199C25.007,112.199 21.627,110.763 18.979,107.89C16.332,105.017 15.008,101.089 15.008,96.106C15.008,90.835 16.339,86.742 19.001,83.826C21.663,80.909 25.162,79.451 29.5,79.451C33.289,79.451 36.366,80.596 38.732,82.886C40.141,84.24 41.197,86.184 41.901,88.718L35.711,90.231C35.345,88.589 34.581,87.293 33.419,86.342C32.257,85.392 30.845,84.917 29.183,84.917C26.888,84.917 25.025,85.759 23.596,87.444C22.166,89.129 21.451,91.858 21.451,95.631C21.451,99.634 22.155,102.486 23.564,104.185C24.972,105.884 26.803,106.734 29.057,106.734C30.719,106.734 32.148,106.194 33.345,105.114C34.542,104.034 35.401,102.335 35.923,100.016ZM46.084,96.02C46.084,92.794 46.556,90.087 47.5,87.898C48.204,86.285 49.165,84.837 50.383,83.556C51.602,82.274 52.936,81.324 54.387,80.704C56.316,79.869 58.542,79.451 61.063,79.451C65.626,79.451 69.277,80.899 72.017,83.793C74.756,86.688 76.126,90.713 76.126,95.869C76.126,100.981 74.766,104.981 72.048,107.868C69.33,110.756 65.696,112.199 61.147,112.199C56.542,112.199 52.88,110.763 50.162,107.89C47.443,105.017 46.084,101.06 46.084,96.02ZM80.921,111.659L80.921,79.991L90.28,79.991L95.9,101.593L101.456,79.991L110.836,79.991L110.836,111.659L105.026,111.659L105.026,86.731L98.878,111.659L92.857,111.659L86.731,86.731L86.731,111.659L80.921,111.659ZM52.528,95.804C52.528,99.39 53.338,102.108 54.957,103.958C56.577,105.809 58.633,106.734 61.126,106.734C63.619,106.734 65.665,105.816 67.263,103.98C68.862,102.144 69.661,99.39 69.661,95.717C69.661,92.088 68.883,89.381 67.327,87.595C65.77,85.809 63.703,84.917 61.126,84.917C58.549,84.917 56.471,85.82 54.894,87.628C53.316,89.435 52.528,92.16 52.528,95.804Z" />
                <g transform="matrix(0.877028,0,0,0.896765,5.58433,-52.3325)">
                  <text x="10.56px" y="111.328px">
                    S
                  </text>
                </g>
                <g transform="matrix(0.877028,0,0,0.896765,76.2111,-52.3325)">
                  <text x="10.56px" y="111.328px">
                    S
                  </text>
                </g>
                <g transform="matrix(0.877028,0,0,0.896765,39.9542,-52.0629)">
                  <text x="10.56px" y="111.328px">
                    Y
                  </text>
                </g>
              </g>
            </svg>
          </Link>
          <div className="bg-rwth-accent mx-3 h-12 w-[1px]"></div>
          <Link href="/">
            <img
              src="/assets/rwth/banner.svg"
              className="h-10"
              alt="HTWR Logo"
            />
          </Link>
        </div>
        <div className="hidden w-full justify-end text-[#34495E] lg:flex">
          <ul className="inline-flex h-12 flex-row items-center justify-items-end">
            {props.config.linkElements.map((link) => {
              return (
                <li
                  key={link.name}
                  className="hover:bg-rwth-accent mx-2 rounded px-2 py-1 text-inherit hover:text-white"
                >
                  <Link {...link} className="text-inherit no-underline">
                    {link.children}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row items-center">
          <span className="hover:bg-rwth-accent mx-2 flex h-8 items-center rounded px-2 py-1 text-[#34495E] hover:text-white">
            <Search className="size-4" />
          </span>
          <span className="hover:bg-rwth-accent text-[] mx-2 flex h-8 items-center rounded px-2 py-1 text-[#34495E] hover:text-white">
            <Moon className="size-4" />
          </span>
        </div>
      </div>
      <div
        className={clsx(
          "absolute top-[75px] left-0 z-50 w-full justify-end bg-white text-[#34495E]",
          open ? "block" : "hidden",
        )}
      >
        <div>
          <ul className="flex-col items-center justify-items-end">
            {props.config.linkElements.map((link) => {
              return (
                <li
                  key={link.name}
                  className="w-full rounded px-4 py-3 text-inherit"
                >
                  <Link
                    {...link}
                    className="block w-full text-inherit no-underline"
                  >
                    {link.children}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
