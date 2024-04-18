import type { Institutes } from "@/config/institutes";
import { findAssociatedSubjects } from "@/lib/subjects";

export const institute: Institutes = "sibd";

export const subjects = findAssociatedSubjects(institute);
