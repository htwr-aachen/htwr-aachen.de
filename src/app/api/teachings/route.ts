import type { NextRequest } from "next/server";
import { join } from "path";

import { getAllTeachings } from "@/lib/teachings";
import { DefaultTeachingDir } from "@/utils/TeachingConfig";

// GET inputs the subject and ouputs the metadata for found techings in order.
export async function GET(req: NextRequest) {
  const subject = req.nextUrl.searchParams.get("subject");

  if (!subject || !(typeof subject === "string")) {
    return new Response(JSON.stringify([]), { status: 400 });
  }

  try {
    const PATH = join(DefaultTeachingDir, subject);
    const teachings = await getAllTeachings(PATH);
    return Response.json(teachings);
  } catch (err) {
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
