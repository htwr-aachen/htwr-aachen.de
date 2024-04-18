import { join } from "path";

import urlJoin from "@/lib/url";
import type { CorpusConfig } from "@/models/corpus";
import { BaseURL } from "@/utils/AppConfig";

export const docsArticleConfig: CorpusConfig = {
  articlesURL: urlJoin(BaseURL, "/docs"),
  articlesPath: join(process.cwd(), "docs"),
};
