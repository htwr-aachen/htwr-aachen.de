import { Storage } from "@google-cloud/storage";
import type { NextRequest } from "next/server";

type PanikzettelMetadata = {
  name: string;
  semester?: number;
  type: "pf" | "wpf" | "af" | "none";
};

interface PanikzettelMetadataMap {
  [Key: string]: PanikzettelMetadata;
}

export type Panikzettel = PanikzettelMetadata & {
  id: string;
  url: string;
};

const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: JSON.parse(process.env.GCS_SERVICE_KEY || "{}"),
});

// The helper function to read the file from GCP
async function readFiles(
  naming: PanikzettelMetadataMap,
  excludeFiles: string[]
): Promise<Panikzettel[]> {
  const bucketName = process.env.GCS_BUCKET || "";
  const [files] = await storage.bucket(bucketName).getFiles();
  return files
    .filter((x) => !excludeFiles.includes(x.name))
    .filter((x) => {
      return x.isPublic().then((z) => z[0]);
    })
    .map((x) => {
      if (x.name in naming) {
        const { name, semester, type } = naming[x.name];
        return {
          id: x.name,
          name,
          url: x.publicUrl(),
          semester,
          type,
        };
      }
      return {
        id: x.name,
        name: x.name,
        url: x.publicUrl(),
        type: "none",
      };
    });
}

async function downloadMetadata(): Promise<PanikzettelMetadataMap> {
  const bucketName = process.env.GCS_BUCKET || "";
  const download = await storage
    .bucket(bucketName)
    .file("metadata.json")
    .download();

  if (!download) return {};

  return JSON.parse(download[0].toString("utf8"));
}

export async function GET(req: NextRequest) {
  if (!process.env.GCS_SERVICE_KEY) {
    return new Response("[]", { status: 200 });
  }
  const excludeMetadata =
    req.nextUrl.searchParams.get("excludeMetadata") === "true";

  try {
    const namings = await downloadMetadata();
    if (!namings) {
      return new Response("[]", { status: 200 });
    }
    const files = await readFiles(
      namings,
      excludeMetadata ? ["metadata.json"] : []
    );
    return new Response(JSON.stringify(files), { status: 200 });
  } catch (err) {
    return new Response("[]", { status: 200 });
  }
}
