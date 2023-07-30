import { InstituteConfig } from "@/data/institutes";
import type { Institute } from "@/models/institutes";
import { Institutes, INSTITUTES_LENGTH } from "@/models/institutes";

export const getInstituteByName = (name: string): Institutes => {
  const institute = InstituteConfig.find(
    (inst) => inst.name === name.toUpperCase()
  );
  if (!institute) {
    return Institutes.HTWR;
  }
  return InstituteConfig.indexOf(institute);
};

export function getNextInstitute(current: Institutes): Institutes {
  const next = (current + 1) % INSTITUTES_LENGTH;
  if (next === Institutes.HTWR) return next + 1;
  return next;
}

export function getPrevInstitute(current: Institutes): Institutes {
  const prev = (current - 1 + INSTITUTES_LENGTH) % INSTITUTES_LENGTH;
  if (prev === Institutes.HTWR) return prev + 1;
  return prev;
}

export function getInstituteConfig(institute: Institutes): Institute {
  const config = InstituteConfig[institute];
  if (!config) {
    return InstituteConfig[Institutes.HTWR];
  }
  return config;
}

export function getRealInstitutes(): Institute[] {
  return InstituteConfig.slice(1);
}
