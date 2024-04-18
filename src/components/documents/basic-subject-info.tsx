import { format } from "date-fns";
import { Link } from "lucide-react";
import type {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ReactNode,
} from "react";

import { type Subjects } from "@/config/subjects";
import { hasDocument } from "@/lib/documents";
import { getPanikzettelMetadata } from "@/lib/panikzettel";
import { cn } from "@/lib/utils";

export function LinkCard({
  title,
  description,
  children,
  ...props
}: {
  title: string;
  description?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn(
        props.className,
        "no-b text-white bg-rwth-accent hover:bg-muted/75 p-6 rounded-xl w-60 min-h-56 block"
      )}
      {...props}
    >
      <Link className="mr-2 inline size-5" />
      <h3 className="inline-block text-2xl font-bold">{title}</h3>
      <span className="block pb-4 text-sm text-muted-foreground">
        {description}
      </span>
      {children}
    </a>
  );
}

export default async function BasicSubjectInfo({
  subject,
  children,
  className,
  ...props
}: {
  subject: Subjects;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  const panikzettel = (await getPanikzettelMetadata()).find(
    (x) => x.shortname === subject || x.url.endsWith(`${subject}.pdf`)
  );

  const [hasMerge, mergeUrl, mergeMeta] = await hasDocument(
    subject,
    "folien-merged.pdf"
  );

  return (
    <div
      {...props}
      className={cn(
        "not-prose flex flex-wrap justify-center gap-6 my-6",
        className
      )}
    >
      {hasMerge ? (
        <LinkCard
          title="Folien Merge"
          href={mergeUrl}
          description="Damit ihr es nicht machen müsst"
        >
          Zuletzt Bearbeitet:{" "}
          {format(mergeMeta?.mtime || new Date(), "dd.MM.yyyy")}
        </LinkCard>
      ) : (
        <></>
      )}
      {panikzettel !== undefined ? (
        <LinkCard title="Panikzettel" href={panikzettel.url}>
          Schon Panik?
        </LinkCard>
      ) : (
        <></>
      )}
      {children}
    </div>
  );
}
