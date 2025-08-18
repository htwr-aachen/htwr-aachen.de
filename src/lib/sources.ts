import {
  GITHUB_APP_URL,
  GITHUB_SUMMARIES,
  GITHUB_URL,
  SOURCE_REWRITE_MAP,
  SOURCE_REWRITE_MAP_SORTED,
} from "@/config/source-registry";
import { usePathname } from "next/navigation";
import urlJoin from "./url";

function lookupPathRewrite(path: string): string {
  const matchedPrefix = SOURCE_REWRITE_MAP_SORTED.find((prefix) =>
    path.startsWith(prefix),
  );

  return matchedPrefix
    ? urlJoin(
        SOURCE_REWRITE_MAP[matchedPrefix],
        path.slice(matchedPrefix.length),
      )
    : path;
}

function lookupSummarySource(url: string): string {
  const summaryMatch = url.match(/^(.+)\/([^/]+)\/summaries\/(.+)$/);
  if (!summaryMatch) {
    throw new Error("This");
  }
  const [, module, subject, x] = summaryMatch;
  return urlJoin(GITHUB_SUMMARIES, module, subject, `${x}.mdx`);
}

export function lookupSource(pathname: string): string {
  // we have a url such as https://htwr-aachen.de/syscom/datkom
  // this will have to => GITHUB_APP_URL/syscom/datkom/page.tsx (some pages are now tsx)

  if (/summaries\//i.test(pathname)) pathname = lookupSummarySource(pathname);
  else pathname = urlJoin(GITHUB_APP_URL, pathname, "page.tsx");

  pathname = lookupPathRewrite(pathname);

  return urlJoin(GITHUB_URL, pathname);
}

export function useEditPageLink(): URL {
  const pathname = usePathname();
  return new URL(lookupSource(pathname));
}
