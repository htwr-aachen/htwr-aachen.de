import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { SubStyling } from "./lib/style";

function pathMatcher(path: string): SubStyling {
  if (path.startsWith("/es")) {
    return SubStyling.ES;
  }
  if (path.startsWith("/syscom")) {
    return SubStyling.SYSCOM;
  }
  return SubStyling.None;
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/404")) {
    return NextResponse.next();
  }

  const institute = pathMatcher(request.nextUrl.pathname);

  const req = request.nextUrl.clone();
  if (request.cookies.get("institute")?.value !== "") {
    req.searchParams.set(
      "institute",
      request.cookies.get("institute")?.value || ""
    );
  }

  const response = NextResponse.rewrite(req);
  if (
    institute !== SubStyling.None &&
    request.cookies.get("institute")?.value !== institute
  ) {
    response.cookies.set("institute", institute);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};
