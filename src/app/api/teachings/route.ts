import type { NextRequest } from "next/server";

import type { Subjects } from "@/config/subjects";
import { getSummariesMetadata } from "@/lib/summaries";

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
    const teachings = await getSummariesMetadata(subject as Subjects);
    return new Response(JSON.stringify(teachings), { status: 200 });
  } catch (_err) {
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
