import { Storage } from "@google-cloud/storage";

const filterList = ["metadata.json", "meta.pdf", "naming.json"];

type PanikzettelMetadata = {
  name: string;
  semester?: number;
  type: "pf" | "wpf" | "af" | "none";
};

interface Naming {
  [Key: string]: PanikzettelMetadata;
}

export type Panikzettel = PanikzettelMetadata & {
  id: string;
  url: string;
};

const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: JSON.parse(process.env.GCS_SERVICE_KEY || ""),
});

// The helper function to read the file from GCP
async function readFiles(naming: Naming): Promise<Panikzettel[]> {
  const bucketName = process.env.GCS_BUCKET || "";
  const [files] = await storage.bucket(bucketName).getFiles();
  return files
    .filter((x) => !filterList.includes(x.name))
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

async function getNamings(): Promise<Naming> {
  const res = await fetch(process.env.GCS_BUCKET_METADATA_FILE_URL || "", {
    next: {
      revalidate: 100,
    },
  });

  if (!res.ok) {
    return {};
  }

  return res.json();
}

export async function GET() {
  try {
    const namings = await getNamings();
    const files = await readFiles(namings);
    return new Response(JSON.stringify(files), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
