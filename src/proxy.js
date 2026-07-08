import { NextResponse } from "next/server";

export function proxy(request) {
  const session = request.cookies.get("session");
  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedPaths = ["/admin", "/checkout"];
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/checkout/:path*"],
};
