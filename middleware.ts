import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;

  if (pathname === "/") {
    searchParams.set("page", "1");
    return NextResponse.redirect(new URL(`/book?${searchParams.toString()}`, request.url));
  }

  return NextResponse.next();
}
