import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;

  if (pathname === "/" && !searchParams.has("page")) {
    searchParams.set("page", "1");
    return NextResponse.redirect(new URL(`/?${searchParams.toString()}`, request.url));
  }

  return NextResponse.next();
}
