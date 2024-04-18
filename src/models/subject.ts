import type { Institutes } from "@/config/institutes";

export type Subject = {
  name: string;
  institutes: Institutes[] | readonly Institutes[];
  displayName: string;
  fullName?: string;
  articlesURL: string;
  articlesPath: string;
  documentLocation: string;
};
