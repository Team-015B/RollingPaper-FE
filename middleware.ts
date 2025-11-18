import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('connect.sid')?.value; 
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === '/login' || pathname === '/';

  if (isLoginPage && token) {
    return NextResponse.next();
  }

  if (!token && (pathname.startsWith('/teacher') || pathname.startsWith('/student'))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/teacher/:path*',
    '/student/:path*'
  ],
};