import { join } from "path";

import { BaseURL } from "@/config/app";
import urlJoin from "@/lib/url";
import type { CorpusConfig } from "@/models/corpus";

export const docsArticleConfig: CorpusConfig = {
  articlesURL: urlJoin(BaseURL, "/docs"),
  articlesPath: join(process.cwd(), "docs"),
};
