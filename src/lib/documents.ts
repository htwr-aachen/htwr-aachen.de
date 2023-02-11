import { readdir } from "fs/promises";

export type Document = {
  name: string;
  url: string;
  year: number;
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
      const name = file
        .replace(".pdf", "")
        .replaceAll("ue", "Übung ")
        .replaceAll("gl", "Globalübung (Glob) ")
        .replaceAll("wdh", "Wiederholungsklausur ")
        .replaceAll("ss", "Sommersemester ")
        .replaceAll("ws", "Wintersemester ")
        .replaceAll("lsg", "mit Lösung")
        .replaceAll("-", " ");
      return {
        name,
        url: `${urlPrefix}/${file}`,
        year: parseInt(file.substring(2, 4), 10),
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
