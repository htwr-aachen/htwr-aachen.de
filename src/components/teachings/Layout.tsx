import Link from "next/link";

import type { SubjectNames } from "@/data/subjects";
import { getSubject } from "@/lib/subjects";
import { type TeachingMeta, getJSONLD } from "@/lib/teaching";

interface TeachingsLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  meta: TeachingMeta;
  subject: SubjectNames;
  next?: TeachingMeta;
  prev?: TeachingMeta;
}

export default function TeachingLayout(props: TeachingsLayoutProps) {
  const subjectConfig = getSubject(props.subject);

  if (!subjectConfig) {
    throw Error("unknown subject"); // todo UnknownSubjectError
  }

  return (
    <article className="markdown line-numbers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJSONLD(props.meta)),
        }}
      />
      <div>
        <h1 className="inline text-2xl font-bold">{props.meta.meta.title}</h1> |{" "}
        <Link href={subjectConfig.teachingURL}>Back to Overview</Link>
      </div>

      <div
        className={`wrapper m-4 border-1 border-gray-600 p-4 pb-8 lg:px-8 ${props.className}`}
        {...props}
      >
        {props.children}
      </div>

      <div>
        <Link href={subjectConfig.teachingURL}>Back to Overview</Link>{" "}
        {props.prev != null ? (
          <>
            | Vorheriges:{" "}
            <Link href={`${subjectConfig.teachingURL}/${props.prev?.slug}`}>
              {props.prev?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
        {props.next != null ? (
          <>
            | Nächstes:{" "}
            <Link href={`${subjectConfig.teachingURL}/${props.next?.slug}`}>
              {props.next?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
}
