import { join } from "path";

import urlJoin from "@/lib/url";
import type { Subject } from "@/models/subject";
import { BaseURL } from "@/utils/AppConfig";
import { DefaultTeachingDir } from "@/utils/TeachingConfig";

export type SubjectNames =
  | "buk"
  | "swt"
  | "dbis"
  | "datkom"
  | "stocha"
  | "malo"
  | "itsec";

export const subjects: {
  [name: string]: Subject;
} = {
  buk: {
    institute: "scil",
    name: "buk",
    displayName: "BuK",
    fullName: "Berechenbarkeit und Komplexität",
    teachingDir: join(DefaultTeachingDir, "scil", "buk"),
    teachingURL: urlJoin(BaseURL, "/scil/studium/teachings"),
  },
  swt: {
    institute: "es",
    name: "swt",
    displayName: "SWT",
    fullName: "Softwaretechnik",
    teachingDir: join(DefaultTeachingDir, "es", "swt"),
    teachingURL: urlJoin(BaseURL, "/es/studium/teachings"),
  },
  dbis: {
    institute: "sibd",
    name: "dbis",
    displayName: "DBIS",
    fullName: "Datenbanken und Informationssysteme",
    teachingDir: join(DefaultTeachingDir, "sibd", "dbis"),
    teachingURL: urlJoin(BaseURL, "/sibd/studium/teachings"),
  },
  datkom: {
    institute: "syscom",
    name: "datkom",
    displayName: "DatKom",
    fullName: "Datenkommunikation",
    teachingDir: join(DefaultTeachingDir, "syscom", "datkom"),
    teachingURL: urlJoin(BaseURL, "/syscom/studium/teachings"),
  },
  stocha: {
    institute: "wsi",
    name: "stocha",
    displayName: "Stocha",
    fullName: "Stochastik",
    teachingDir: join(DefaultTeachingDir, "wsi", "stocha"),
    teachingURL: urlJoin(BaseURL, "/wsi/studium/teachings"),
  },
  malo: {
    institute: "cigol",
    name: "malo",
    displayName: "Malo",
    fullName: "Mathematische Logik",
    teachingDir: join(DefaultTeachingDir, "cigol", "malo"),
    teachingURL: urlJoin(BaseURL, "/cigol/studium/teachings"),
  },
  itsec: {
    institute: "cesti",
    name: "itsec",
    displayName: "IT-Sec",
    fullName: "IT-Security",
    teachingDir: join(DefaultTeachingDir, "cesti", "itsec"),
    teachingURL: urlJoin(BaseURL, "/cesti/studium/teachings"),
  },
};
