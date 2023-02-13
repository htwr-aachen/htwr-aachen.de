import { readdir } from "fs/promises";

export type Document = {
  name: string;
  url: string;
  year: number;
};

const replacer = (file: string): string => {
  const strList = file.split(".");
  strList.pop();
  const str = strList.join(".");

  const definition = str.substring(0, 2);
  const rest = str
    .substring(2)
    .replace("wdh", "Wiederholungsklausur ")
    .replace("lsg", "mit Lösung")
    .replaceAll("-", " ");

  switch (definition) {
    case "ue":
      return `Übung ${rest}`;
    case "gl":
      return `Globalübung (Glob) ${rest}`;
    case "ss":
      return `Sommersemester ${rest}`;
    case "ws":
      return `Wintersemester ${rest}`;
    default:
      return str;
  }
};

export async function getAllDocsFromDir(
  dir: string,
  urlPrefix: string,
  sortByKlausurFormat: boolean
): Promise<Document[]> {
  try {
    let docs: Document[] = [];
    const files = await readdir(dir);
    docs = files.map((file) => {
      const name = replacer(file);
      return {
        name,
        url: `${urlPrefix}/${file}`,
        year: parseInt(file.substring(2, 4), 10) || -1,
      };
    });

    if (sortByKlausurFormat) {
      docs.sort((a, b) => {
        return a.year > b.year ? -1 : 1;
      });
    } else {
      docs.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    }

    return docs;
  } catch (err) {
    return [];
  }
}
