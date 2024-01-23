import { Storage } from "@google-cloud/storage";
import { redirect } from "next/navigation";

import type { Panikzettel } from "@/app/api/panikzettel/route";

const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: JSON.parse(process.env.GCS_SERVICE_KEY || ""),
});

export async function getFileURL(slug: string): Promise<string | null> {
  const bucketName = process.env.GCS_BUCKET || "";
  const file = storage.bucket(bucketName).file(slug);
  if (!file.isPublic()) {
  }
  return file.publicUrl();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const file = await getFileURL(params.slug);
  if (file === null) throw Error("no public file");

  redirect(file);
}

export async function generateStaticParams() {
  const res = await fetch("/api/panikzettel", {
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    return [];
  }

  const panikzettel: Panikzettel[] = await res.json();
  return panikzettel.map((t) => ({
    slug: t.name,
  }));
}
