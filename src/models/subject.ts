import type { Institutes } from "./institutes";

export type Subject = {
  name: string;
  institute: Institutes;
  teachingDir: string;
  displayName: string;
  fullName?: string;
  teachingURL: string;
};
