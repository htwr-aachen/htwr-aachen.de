import type { NextApiRequest } from "next";
import { join } from "path";

import { DefaultTeachingDir } from "@/utils/TeachingConfig";

export async function GET(req: NextApiRequest) {
  const { subject } = req.query;

  const PATH = join(process.cwd(), DefaultTeachingDir, subject);
  // read dir and return all files
}
