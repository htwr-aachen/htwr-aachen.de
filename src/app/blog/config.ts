import { join } from "path";

import { BaseURL } from "@/config/app";
import urlJoin from "@/lib/url";
import type { CorpusConfig } from "@/models/corpus";

export const blogArticleConfig: CorpusConfig = {
  articlesURL: urlJoin(BaseURL, "/blog"),
  articlesPath: join(process.cwd(), "blog"),
};
