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

/**
 * A Link UI component to show a link as a card with a title and desc.
 * @param props.title - the title of the card
 * @param props.description - the descriptions of the card
 * @param props.children - additional content will be under the desc.
 * @param props.href - the link href.
 */
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
    <div className="bg-cms-branding text-cms-branding-text hover:bg-cms-branding/75 rounded-xl">
      <a
        className={cn(
          props.className,
          "no-b block min-h-56 w-60 p-6 text-inherit",
        )}
        {...props}
      >
        <Link className="mr-2 inline size-5 text-inherit" />
        <h3 className="inline-block text-2xl font-bold text-inherit">
          {title}
        </h3>
        <span className="text-cms-branding-text/75 block pb-4 text-sm">
          {description}
        </span>
        {children}
      </a>
    </div>
  );
}

/**
 * A component that search for and displays basic subject materials as LinkCards.
 * This includes:
 * - Panikzettel from the htwr panikzettel api.
 * - Folien-merged.pdf under the subject content-assets directory
 * - (Planned) all files under the root subject content-assets dir.
 * @param props.subject - the subject to search materials for
 */
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
    (x) => x.shortname === subject || x.url.endsWith(`${subject}.pdf`),
  );

  const [hasMerge, mergeUrl, mergeMeta] = await hasDocument(
    subject,
    "folien-merged.pdf",
  );

  return (
    <div
      {...props}
      className={cn(
        "not-prose my-6 flex flex-wrap justify-center gap-6",
        className,
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
