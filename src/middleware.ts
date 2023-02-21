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
  if (path.startsWith("/scil")) {
    return SubStyling.SCIL;
  }
  return SubStyling.None;
}

export function middleware(request: NextRequest) {
  const institute = pathMatcher(request.nextUrl.pathname);

  // cookie stuff
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
  matcher: ["/((?!api|_next|favicon.ico|assets|404|teaching-assets).*)"],
};
