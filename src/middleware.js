

import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // If the user is not authenticated and tries to access the dashboard, redirect to login
  const isAuthenticated = request.cookies.get('auth')?.value === 'true';

  if (!isAuthenticated && pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Apply middleware only to dashboard and its subroutes
};