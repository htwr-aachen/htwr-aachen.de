import moment from "moment";
import Link from "next/link";
import type { FC } from "react";
import { useEffect, useState } from "react";

import type { TeachingMeta } from "@/lib/teachings";

type TeachingsListDateProps = {
  date: string;
};

const opacityValues = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3];

const TeachingsListDate: FC<TeachingsListDateProps> = ({ date }) => {
  const [opacity, setOpacity] = useState(0.65);

  useEffect(() => {
    if (date === "") return;
    const dateParsed = moment(date, "DD/MM/YYYY");
    const now = moment();
    const diff = now.diff(dateParsed, "days");

    // calculate opacity from difference of days
    setOpacity(opacityValues[diff] || 0.3);
  }, [date]);

  useEffect(() => {});

  return date === "" ? (
    <></>
  ) : (
    <span className="mr-2 text-sm" style={{ opacity }}>
      Aktualisiert: {date}
    </span>
  );
};

type TeachingListProps = {
  // without trailing slash
  urlPrefix: string;
  teachingList: TeachingMeta[];
};

const TeachingList: FC<TeachingListProps> = (props) => {
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

export { TeachingList };
