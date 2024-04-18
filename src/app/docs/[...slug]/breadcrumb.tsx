import Link from "next/link";

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
  baseURL: string
): string {
  if (n < 0) {
    return urlJoin(baseURL, ...slug.slice(0, n));
  }
  return urlJoin(baseURL, ...slug.slice(0, n + 1));
}

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
          slug.map((pathElement, i) => {
            return (
              <div key={pathElement}>
                <BreadcrumbItem key={pathElement}>
                  {i === slug.length - 1 ? (
                    <BreadcrumbPage>{pathElement}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={getURLUntil(slug, i, baseURL)}
                        className="text-foreground"
                      >
                        {pathElement}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {i === slug.length - 1 ? (
                  <></>
                ) : (
                  <BreadcrumbSeparator key={`${pathElement}-sep`} />
                )}
              </div>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
