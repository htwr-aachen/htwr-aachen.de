import type { StringInstitutes } from "./institutes";

export type Subject = {
  name: string;
  institute: StringInstitutes;
  teachingDir: string;
  displayName: string;
  fullName?: string;
  teachingURL: string;
};
