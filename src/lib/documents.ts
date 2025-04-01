import type { Dirent, Stats } from "fs";
import { readdir, stat } from "fs/promises";
import natsort from "natsort";
import { join } from "path";

import { type Subjects, SubjectConfig } from "@/config/subjects";

import { renameDocument } from "./documents/renamer";
import urlJoin from "./url";

// NEW IMPL
export type DocumentCollection = {
  name: string;
  categories: DocumentCollection[];
  documents: Document[];
};

export type Document = {
  name: string;
  url: string;
  year?: number;
  authors?: string;
};

function documentFromDirent(
  dirent: Dirent,
  normalizedParentPath: string[],
  config: { prefix: string; sort: boolean },
): Document {
  return {
    url: urlJoin(config.prefix, ...normalizedParentPath, dirent.name),
    name: dirent.name,
    year: 0,
    authors: "",
  };
}

const sorter = natsort({ insensitive: true });

async function documentCollectionFromDir(
  path: string,
  config: { prefix: string; sort: boolean },
  normalizedPath: string[] = [],
): Promise<DocumentCollection> {
  try {
    const dirents = await readdir(path, {
      recursive: false,
      withFileTypes: true,
    });

    const empty: DocumentCollection = {
      name: "",
      categories: [],
      documents: [],
    };

    const result = await dirents.reduce<Promise<DocumentCollection>>(
      async (accumulatorPromise, dirent) => {
        if (dirent.isFile()) {
          const document = documentFromDirent(dirent, normalizedPath, config);
          (await accumulatorPromise).documents.push(document);
          return accumulatorPromise;
        }
        if (dirent.isDirectory()) {
          const category = await documentCollectionFromDir(
            join(path, dirent.name),
            config,
            [...normalizedPath, dirent.name],
          );

          (await accumulatorPromise).categories.push(category);
          return accumulatorPromise;
        }

        return accumulatorPromise;
      },
      Promise.resolve(empty),
    );
    result.documents.sort((a, b) => sorter(a.name, b.name));
    result.name = normalizedPath.at(-1) || "";

    return result;
  } catch {
    return { documents: [], categories: [], name: "" };
  }
}

/**
 * @param path - path to the local documents
 * @param urlPrefix - the prefix to add to the document urls.
 */
export async function includeLocalDocuments(
  path: string,
  urlPrefix?: string,
  sorted = true,
): Promise<DocumentCollection> {
  // overwrite
  path = join(process.cwd(), "content-assets", path);
  const documentCollection = await documentCollectionFromDir(path, {
    prefix: urlPrefix || "",
    sort: sorted,
  });

  return documentCollection;
}

/**
 *
 */
export async function hasDocument(
  subject: Subjects,
  relPath: string,
): Promise<[boolean, string, Stats | undefined]> {
  const path = join(SubjectConfig[subject].documentsPath, relPath);
  const url = urlJoin(
    "/content-assets",
    subject,
    relPath.replaceAll(/\\/g, "/"),
  );
  try {
    const stats = await stat(path);
    return [true, url, stats];
  } catch {
    return [false, url, undefined];
  }
}

// OLD

export async function getAllDocsFromDir(
  dir: string,
  urlPrefix: string,
  replaceWords = true,
): Promise<Document[]> {
  try {
    let docs: Document[] = [];
    const files = await readdir(dir, { withFileTypes: true });
    docs = files.map((file) => {
      const name = replaceWords ? renameDocument(file.name) : file.name;
      return {
        name,
        url: `${urlPrefix}/${file.name}`,
        year: parseInt(file.name.substring(2, 4), 10) || -1,
      };
    });

    docs.sort((a, b) => sorter(a.name, b.name));

    return docs;
  } catch (_error) {
    return [];
  }
}
