import Link from "next/link";

import { type SubjectNames } from "@/data/subjects";
import { getTeachingsMetadata } from "@/lib/teaching";
import urlJoin from "@/lib/url";

import { TeachingsListDate } from "./Date";

interface TeachingListProps {
  subject: SubjectNames;
}

export default async function TeachingList(props: TeachingListProps) {
  const teachings = await getTeachingsMetadata(props.subject);
  return (
    <ul className="mt-8">
      {teachings.map((teaching) => {
        const slug = urlJoin(...teaching.slug);
        return (
          <li key={slug} className="my-2 grid lg:grid-cols-[auto_1fr]">
            <div className="grid items-center">
              <Link
                className="grid items-center justify-center rounded bg-[#eee] px-2 py-1 font-roboto hover:border-b-0 hover:bg-[#ddd]"
                href={teaching.url}
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
}
