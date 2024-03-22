import { InstituteConfig } from "@/data/institutes";
import type { Institute, Institutes } from "@/models/institutes";
import { INSTITUTES_LENGTH, INSTITUTES_MAP } from "@/models/institutes";

export function getNextInstitute(current: Institutes): Institutes {
  let next = (INSTITUTES_MAP[current] + 1) % INSTITUTES_LENGTH;
  if (next === INSTITUTES_MAP.HTWR) next++;
  return Object.keys(INSTITUTES_MAP)[next] as Institutes;
}

export function getPrevInstitute(current: Institutes): Institutes {
  let prev =
    (INSTITUTES_MAP[current] - 1 + INSTITUTES_LENGTH) % INSTITUTES_LENGTH;
  if (prev === INSTITUTES_MAP.HTWR) prev++;
  return Object.keys(INSTITUTES_MAP)[prev] as Institutes;
}

export function getInstituteConfig(institute: Institutes): Institute {
  const config = InstituteConfig.find((x) => x.name === institute);
  if (!config) {
    return (
      InstituteConfig.find((x) => x.name === "HTWR") ||
      InstituteConfig[INSTITUTES_MAP.HTWR]
    );
  }
  return config;
}
export function getRealInstitutes(): Institute[] {
  return InstituteConfig.slice(1);
}
