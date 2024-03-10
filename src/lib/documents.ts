import { readdir } from "fs/promises";
import natsort from "natsort";

import type { SubjectNames } from "@/data/subjects";
import { APIURL } from "@/utils/AppConfig";

import urlJoin from "./url";

export type Document = {
  name: string;
  url: string;
  year: number;
};

export type Exam = {
  name: string;
  subject: string;
  filename: string;
  created: string;
};

export async function getExamMeta(subject: SubjectNames): Promise<Exam[]> {
  try {
    const res = await fetch(urlJoin(APIURL, `/exams?subject=${subject}`), {
      method: "GET",
      redirect: "follow",
      next: {
        revalidate: 3600, // 1h
      },
    });

    if (res.status !== 200) {
      return [];
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log("error: ", e);
    return [];
  }
}

export const getProtectedDownloads = async (
  subject: SubjectNames
): Promise<string[]> => {
  try {
    const exams = await getExamMeta(subject);
    return exams.map((e) => e.filename);
  } catch (_err) {
    return [];
  }
};

const replacer = (file: string): string => {
  const definition = file.substring(0, 2);
  const rest = file
    .substring(2)
    .replace("wdh", "Wiederholungsklausur")
    .replace("lsg", "mit Lösung")
    .replace("pro", "Probe")
    .replaceAll("-", " ")
    .replaceAll("_", " ");

  switch (definition) {
    case "VL":
    case "vl":
      return `Vorlesung ${rest}`;
    case "ue":
      return `Übung ${rest}`;
    case "gl":
      return `Globalübung (Glob) ${rest}`;
    case "ss":
      return `Sommersemester ${rest}`;
    case "ws":
      return `Wintersemester ${rest}`;
    default:
      return file;
  }
};

export async function getAllDocsFromDir(
  dir: string,
  urlPrefix: string,
  replaceWords = true
): Promise<Document[]> {
  try {
    let docs: Document[] = [];
    const files = await readdir(dir, { withFileTypes: true });
    docs = files.map((file) => {
      const name = replaceWords ? replacer(file.name) : file.name;
      return {
        name,
        url: `${urlPrefix}/${file.name}`,
        year: parseInt(file.name.substring(2, 4), 10) || -1,
      };
    });

    const sorter = natsort({ insensitive: true });
    docs.sort((a, b) => sorter(a.name, b.name));

    return docs;
  } catch (err) {
    return [];
  }
}
