import Link from "next/link";
import type { FC } from "react";

import type { TeachingMeta } from "@/lib/teachings";

import { TeachingsListDate } from "./Date";

type TeachingListProps = {
  // without trailing slash
  urlPrefix: string;
  teachingList: TeachingMeta[];
};

export const TeachingList: FC<TeachingListProps> = (props) => {
  return (
    <ul className="mt-8">
      {props.teachingList.map((teaching) => {
        return (
          <li key={teaching.slug} className="my-2 grid lg:grid-cols-[auto_1fr]">
            <div className="grid items-center">
              <Link
                className="grid items-center justify-center rounded bg-[#eee] px-2 py-1 font-roboto hover:border-b-0 hover:bg-[#ddd]"
                href={`${props.urlPrefix.trimEnd()}/${teaching.slug}`}
              >
                {teaching.meta.title}
              </Link>
            </div>
            <div className="ml-2 flex items-center">
              <TeachingsListDate date={teaching.meta.date || ""} />
              <ul className="flex flex-wrap">
                {teaching.meta.tags?.map((tag) => {
                  return (
                    <li key={tag}>
                      <span className="mr-1 whitespace-nowrap rounded-md bg-[#eee] px-1 py-[2px] text-sm opacity-50">
                        {tag}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
