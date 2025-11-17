import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('connect.sid')?.value; 
  const role = request.cookies.get('role')?.value;
  const id = request.cookies.get('id')?.value;
  
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === '/login' || pathname === '/';

  if (isLoginPage && token && role) {
    if (role === 'teacher' && id) {
      return NextResponse.redirect(new URL(`/teacher/${id}`, request.url));
    } else if (role === 'student') {
      return NextResponse.redirect(new URL('/student', request.url));
    }
  }

  if (pathname.startsWith('/teacher') && role === 'student') {
    return NextResponse.redirect(new URL('/student', request.url));
  }

  if (pathname.startsWith('/student') && role === 'teacher' && id) {
    return NextResponse.redirect(new URL(`/teacher/${id}`, request.url));
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