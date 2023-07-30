import { useMemo } from "react";

import { getInstituteConfig } from "@/lib/institutes";
import type { Institutes } from "@/models/institutes";

export function useInstituteConfig(institute: Institutes) {
  return useMemo(() => getInstituteConfig(institute), [institute]);
}
