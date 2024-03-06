import { kv } from "@vercel/kv";
import type { NextRequest } from "next/server";

async function incr(name: string): Promise<number> {
  const number = await kv.incr(name);
  return number;
}

export async function POST(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name");
  if (name === null || name === "") {
    return new Response(null, { status: 404 });
  }
  const number = await incr(name);
  return new Response(JSON.stringify({ count: number }), { status: 200 });
}

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name");
  if (name === null || name === "") {
    return new Response(JSON.stringify({ count: 0 }), { status: 201 });
  }
  const number = (await kv.get<number>(name)) || 0;
  return new Response(JSON.stringify({ count: number }), { status: 200 });
}
