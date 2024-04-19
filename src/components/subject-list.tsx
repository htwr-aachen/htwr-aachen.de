"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { UrlObject } from "url";

import { type Subjects, SubjectConfig } from "@/config/subjects";
import urlJoin from "@/lib/url";

/**
 * Renders a selection of subjects to navigate to. Functionally adds the subject name to the current path unless overwritten.
 * @param props.subjects - the possible subjects to select
 * @param props.overwritePaths - a Subject(Key)-Url(Value) mapping to overwrite the URL on selection
 */
export function SubjectList({
  subjects,
  overwritePaths,
}: {
  subjects: Subjects[];
  overwritePaths?: Record<Subjects, string | UrlObject>;
}) {
  const pathname = usePathname();
  return (
    <div>
      <p>Fächer zur Auswahl:</p>
      <ul className="ml-6 list-disc [&>li]:my-6">
        {subjects.map((name) => {
          return (
            <li key={name}>
              <Link
                // Check if subject url is overwritten
                href={
                  overwritePaths && name in overwritePaths
                    ? overwritePaths[name]
                    : urlJoin(pathname, name)
                }
              >
                {SubjectConfig[name].displayName ||
                  SubjectConfig[name].fullName ||
                  SubjectConfig[name].name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
