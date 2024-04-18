import { join } from "path";

import urlJoin from "@/lib/url";
import { BaseURL } from "@/utils/AppConfig";
import { DefaultTeachingDir } from "@/utils/TeachingConfig";

const DefaultContentPath = join(process.cwd(), "public", "content-assets");

// !! cannot use typescript types here, because when using Record<*string*, Subject> or similar `keyof` would
// choose string and not "buk"|"swt"|...

export const SubjectConfig = {
  buk: {
    institutes: ["scil"],
    name: "buk",
    displayName: "BuK",
    fullName: "Berechenbarkeit und Komplexität",
    articlesPath: join(DefaultTeachingDir, "scil", "buk"),
    articlesURL: urlJoin(BaseURL, "/scil/studium/teachings"),
    documentLocation: join(DefaultContentPath, "buk"),
  },
  swt: {
    institutes: ["es"],
    name: "swt",
    displayName: "SWT",
    fullName: "Softwaretechnik",
    articlesPath: join(DefaultTeachingDir, "es", "swt"),
    articlesURL: urlJoin(BaseURL, "/es/studium/teachings"),
    documentLocation: join(DefaultContentPath, "swt"),
  },
  dbis: {
    institutes: ["sibd"],
    name: "dbis",
    displayName: "DBIS",
    fullName: "Datenbanken und Informationssysteme",
    articlesPath: join(DefaultTeachingDir, "sibd", "dbis"),
    articlesURL: urlJoin(BaseURL, "/sibd/studium/teachings"),
    documentLocation: join(DefaultContentPath, "dbis"),
  },
  datkom: {
    institutes: ["syscom"],
    name: "datkom",
    displayName: "DatKom",
    fullName: "Datenkommunikation",
    articlesPath: join(DefaultTeachingDir, "syscom", "datkom"),
    articlesURL: urlJoin(BaseURL, "/syscom/studium/teachings"),
    documentLocation: join(DefaultContentPath, "datkom"),
  },
  stocha: {
    institutes: ["wsi"],
    name: "stocha",
    displayName: "Stocha",
    fullName: "Stochastik",
    articlesPath: join(DefaultTeachingDir, "wsi", "stocha"),
    articlesURL: urlJoin(BaseURL, "/wsi/studium/teachings"),
    documentLocation: join(DefaultContentPath, "stocha"),
  },
  malo: {
    institutes: ["cigol"],
    name: "malo",
    displayName: "Malo",
    fullName: "Mathematische Logik",
    articlesPath: join(DefaultTeachingDir, "cigol", "malo"),
    articlesURL: urlJoin(BaseURL, "/cigol/studium/teachings"),
    documentLocation: join(DefaultContentPath, "malo"),
  },
  itsec: {
    institutes: ["cesti"],
    name: "itsec",
    displayName: "IT-Sec",
    fullName: "IT-Security",
    articlesPath: join(DefaultTeachingDir, "cesti", "itsec"),
    articlesURL: urlJoin(BaseURL, "/cesti/studium/teachings"),
    documentLocation: join(DefaultContentPath, "itsec"),
  },
  psp: {
    institutes: ["deddebme"],
    name: "psp",
    displayName: "PSP",
    fullName: "Praktikum Systemprogrammierung",
    articlesPath: join(DefaultTeachingDir, "deddebme", "psp"),
    articlesURL: urlJoin(BaseURL, "/deddebme/lehre/teachings"),
    documentLocation: join(DefaultContentPath, "psp"),
  },
  male: {
    institutes: ["male"],
    name: "male",
    displayName: "MaLe",
    fullName: "Elements of Machine Learning and Data Science",
    articlesPath: join(DefaultTeachingDir, "male", "male"),
    articlesURL: urlJoin(BaseURL, "/male/teachings"),
    documentLocation: join(DefaultContentPath, "male"),
  },
} as const;

export type Subjects = keyof typeof SubjectConfig;
export const SubjectCount = Object.keys(SubjectConfig).length;
