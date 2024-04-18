import type { Institutes as InstitutesNew } from "@/config/institutes";
import { InstituteConfig, InstituteCount } from "@/config/institutes";

export function getNextInstitute(current: InstitutesNew) {
  let next =
    (Object.keys(InstituteConfig).indexOf(current) + 1) % InstituteCount;
  if (next === 0) next++;
  return Object.keys(InstituteConfig)[next] as InstitutesNew;
}

export function getPrevInstitute(current: InstitutesNew) {
  let prev =
    (Object.keys(InstituteConfig).indexOf(current) - 1 + InstituteCount) %
    InstituteCount;
  if (prev === 0) prev++;
  return Object.keys(InstituteConfig)[prev] as InstitutesNew;
}
