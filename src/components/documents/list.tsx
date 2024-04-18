import { join } from "path";

import type { Subjects } from "@/config/subjects";
import { SubjectConfig } from "@/config/subjects";
import { includeLocalDocuments } from "@/lib/documents";
import urlJoin from "@/lib/url";

import type { BaseDocumentListProps } from "./list-ui";
import { BaseDocumentList } from "./list-ui";

export async function DocumentList({
  path,
  ...props
}: { path: string } & BaseDocumentListProps) {
  const collection = await includeLocalDocuments(
    path,
    urlJoin("/content-assets", path),
    true
  );
  return <BaseDocumentList docs={collection} {...props}></BaseDocumentList>;
}

export async function SubjectDocumentList({
  subject,
  subpath = "",
  ...props
}: {
  subject: Subjects;
  subpath?: string;
} & BaseDocumentListProps) {
  return (
    <DocumentList
      path={join(SubjectConfig[subject].name, subpath)}
      {...props}
    ></DocumentList>
  );
}
