import type { NextRequest } from "next/server";

import type { SubjectNames } from "@/data/subjects";
import { getTeachingsMetadata } from "@/lib/teaching";

/**
 * GET inputs the subject and ouputs the metadata for found techings in order.
 * @param req the request
 * @returns
 */
export async function GET(req: NextRequest) {
  const subject = req.nextUrl.searchParams.get("subject");

  if (!subject || !(typeof subject === "string")) {
    return new Response(JSON.stringify([]), { status: 400 });
  }

  try {
    const teachings = await getTeachingsMetadata(subject as SubjectNames);
    return new Response(JSON.stringify(teachings), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
