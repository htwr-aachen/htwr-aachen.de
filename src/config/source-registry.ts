export const GITHUB_URL = "https://github.com/htwr-aachen/htwr-aachen.de";
export const GITHUB_APP_URL = "/tree/master/src/app";
export const GITHUB_SUMMARIES = "/tree/master/summaries";

export const SOURCE_REWRITE_MAP: Record<string, string> = {};

export const SOURCE_REWRITE_MAP_SORTED = Object.keys(SOURCE_REWRITE_MAP).sort(
  (a, b) => b.length - a.length,
);
