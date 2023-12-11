import { subjects } from "@/data/subjects";
import type { Subject } from "@/models/subject";

export function getSubject(name: string): Subject | null {
  if (!(name in subjects)) {
    return null;
  }
  return subjects[name];
}
