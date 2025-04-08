// open-next.config.ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
// ...
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";
import { type OpenNextConfig } from "@opennextjs/aws/types/open-next";

// With regional cache enabled:
const opennext: OpenNextConfig = defineCloudflareConfig({
  incrementalCache: withRegionalCache(r2IncrementalCache, {
    mode: "short-lived",
    shouldLazilyUpdateOnCacheHit: true,
  }),
  queue: doQueue,
});

export default opennext;
