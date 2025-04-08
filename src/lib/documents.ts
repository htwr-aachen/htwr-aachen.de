import type { Dirent, Stats } from "fs";
import { readdir, stat } from "fs/promises";
import natsort from "natsort";
import { join } from "path";

import { type Subjects, SubjectConfig } from "@/config/subjects";

import { renameDocument } from "./documents/renamer";
import urlJoin from "./url";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const R2_DELIMITER = "/";

export function documentFromR2Object(
  object: R2Object,
  basePath: string,
  config: { prefix: string },
): Document {
  const pathParts = object.key.substring(basePath.length).split(R2_DELIMITER);
  const name = pathParts[pathParts.length - 1];
  return {
    url: urlJoin(config.prefix, object.key),
    name: name,
    year: object.uploaded.getFullYear(),
    authors: "",
  };
}

/**
 * Recursively builds a DocumentCollection from R2 objects
 */
function buildDocumentCollection(
  objects: R2Object[],
  basePath: string,
  currentPath: string,
  config: { prefix: string },
): DocumentCollection {
  // Initialize the result
  const result: DocumentCollection = {
    name: currentPath.split("/").filter(Boolean).pop() || "",
    categories: [],
    documents: [],
  };

  // Keep track of processed paths to avoid duplicates
  const processedPaths = new Set<string>();

  const fullCurrentPath = basePath + currentPath;
  for (const object of objects) {
    if (!object.key.startsWith(fullCurrentPath)) {
      continue;
    }

    const relativePath = object.key.substring(fullCurrentPath.length);

    if (!relativePath) {
      continue;
    }

    // Check if this is a file directly in the current directory
    if (!relativePath.includes("/")) {
      result.documents.push(documentFromR2Object(object, basePath, config));
      continue;
    }

    const subdir = relativePath.split("/")[0];
    const subdirPath = currentPath + subdir + "/";
    if (processedPaths.has(subdirPath)) {
      continue;
    }

    // Mark as processed
    processedPaths.add(subdirPath);

    const subdirObjects = objects.filter((obj) =>
      obj.key.startsWith(fullCurrentPath + subdir + "/"),
    );

    // Recursively build the subcollection
    const subcollection = buildDocumentCollection(
      subdirObjects,
      basePath,
      subdirPath,
      config,
    );

    result.categories.push(subcollection);
  }

  return result;
}

/**
 * Lists all documents under a path in an R2 bucket and returns them as a DocumentCollection
 * @param path - The path to the documents in the R2 bucket
 * @param urlPrefix - Optional prefix to add to document URLs
 * @returns A DocumentCollection containing all documents and subdirectories
 */
export async function listR2Documents(
  path: string,
  urlPrefix: string = "",
): Promise<DocumentCollection> {
  const normalizedPath = path.endsWith("/") ? path : `${path}/`;

  // List all objects under the path
  const objects: R2Object[] = [];
  let cursor: string | undefined = undefined;
  const contentAssets = getCloudflareContext().env.CONTENT_ASSETS;

  do {
    const result = await contentAssets.list({
      prefix: normalizedPath,
      cursor,
      delimiter: "", // No delimiter to get all nested files
    });

    objects.push(...result.objects);
    //@ts-expect-error: `cursor` is defined in the documentation so it should exists if there are more to read
    cursor = result.cursor;
  } while (cursor);

  // Build the document collection
  return buildDocumentCollection(objects, normalizedPath, "", {
    prefix: urlPrefix,
  });
}

/**
 * Checks if a specific document exists in the R2 bucket
 * @param path - The full path to the document
 * @returns A tuple with [exists, url, metadata]
 */
export async function hasR2Document(
  path: string,
  urlPrefix: string = "",
): Promise<[boolean, string, R2Object | undefined]> {
  const contentAssets = getCloudflareContext().env.CONTENT_ASSETS;
  try {
    const object = await contentAssets.head(path);
    const url = `${urlPrefix}${path}`;

    if (object === null) {
      return [false, url, undefined];
    }

    return [true, url, object];
  } catch {
    const url = `${urlPrefix}${path}`;
    return [false, url, undefined];
  }
}

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
