"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ArrowDown, ArrowUp, Download } from "lucide-react";
import Link from "next/link";
import { type ReactNode, useState } from "react";

import { type DocumentCollection } from "@/lib/documents";
import { renameDocument } from "@/lib/documents/renamer";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

/**
 * A UI Component for the DocumentList acting as a heading and Collapsible trigger
 */
function DocumentListHeading({
  children,
  level,
  open,
}: {
  children: ReactNode;
  level: number;
  open: boolean;
}) {
  switch (level) {
    case 0:
      return <></>;
    case 1:
      return (
        <h2
          aria-level={level + 1}
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold first:mt-0"
        >
          {children}
        </h2>
      );
    default:
      return (
        <Collapsible.Trigger asChild>
          <Button
            className="ml-2 flex scroll-m-12 text-2xl font-semibold"
            variant="ghost"
          >
            {open ? (
              <ArrowUp className="mr-2 size-4"></ArrowUp>
            ) : (
              <ArrowDown className="mr-2 size-4"></ArrowDown>
            )}
            {children}
          </Button>
        </Collapsible.Trigger>
      );
  }
}

export type BaseDocumentListProps = {
  includeRoot?: boolean;
  rename?: boolean;
};

/**
 * A UI component that can visualize a directory structure using Collapsible Component
 * @param props.includeRoot - whether to include the root dir.
 * @param props.rename - whether to rename the file names using the default renamer in lib/documents.ts
 */
export function BaseDocumentList({
  docs,
  level = 0,
  ...props
}: {
  docs: DocumentCollection;
  level?: number;
} & BaseDocumentListProps) {
  const [open, setOpen] = useState(level <= 1);
  return (
    <Collapsible.Root asChild open={open} onOpenChange={setOpen}>
      <div className="not-prose">
        <DocumentListHeading level={level} open={open}>
          {docs.name}
        </DocumentListHeading>
        <Collapsible.Content className={cn(level > 1 ? "ml-6" : "")}>
          {level > 0 || props.includeRoot ? (
            <ul className="my-6 ml-6 [&>li]:mt-2">
              {docs.documents.map((doc) => {
                return (
                  <li key={doc.url + doc.name}>
                    <Download className="mr-2 inline size-4"></Download>
                    <Link passHref href={doc.url}>
                      {props.rename ? renameDocument(doc.name) : doc.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <></>
          )}
          {docs.categories.map((col) => {
            return (
              <BaseDocumentList
                level={level + 1}
                docs={col}
                key={docs.name + col.name}
                {...props}
              ></BaseDocumentList>
            );
          })}
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}
