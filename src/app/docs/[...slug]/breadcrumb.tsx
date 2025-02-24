import Link from "next/link";
import type { UrlObject } from "url";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import urlJoin from "@/lib/url";

/**
 * getURLUntil returns the url starting with the basePath until the n-th element of the slug.
 * example: `getURLUntil(["a", "b"], 1, "/docs")` returns `/docs/a`
 * @param slug - the slug to get the n-th first elements from
 * @param n - the number of elements to construct the url with.
 * @param baseURL - the basePath to add to
 * @returns the constructed path
 */
export function getURLUntil(
  slug: string[],
  n: number,
  baseURL: string,
): string {
  if (n < 0) {
    return urlJoin(baseURL, ...slug.slice(0, n));
  }
  return urlJoin(baseURL, ...slug.slice(0, n + 1));
}

function DocsBreadcrumbItem({
  pathElement,
  last = false,
  href,
}: {
  pathElement: string;
  last?: boolean;
  href: string | UrlObject;
}) {
  return (
    <>
      <BreadcrumbItem key={pathElement}>
        {last ? (
          <BreadcrumbPage>{pathElement}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink asChild>
            <Link href={href} className="text-foreground">
              {pathElement}
            </Link>
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
      {!last && <BreadcrumbSeparator />}
    </>
  );
}

/**
 * A UI component that creates a breadcrumb list
 * e.g. docs / frontend / url-definition ...
 * @param props.slug - the divided pathnames
 * @param props.baseURL - the root URL to stop
 */
export function DocsBreadcrumb({
  slug,
  baseURL,
}: {
  slug: string[];
  baseURL: string;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/docs" className="text-foreground">
              docs
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {slug.length > 0 &&
          slug.map((pathElement, i) => (
            <DocsBreadcrumbItem
              key={pathElement}
              pathElement={pathElement}
              href={getURLUntil(slug, i, baseURL)}
              last={i === slug.length - 1}
            />
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
