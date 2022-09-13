import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const jwtToken = request.cookies['jwt-token'];
  const refreshToken = request.cookies['refresh-token'];
  if (jwtToken || refreshToken) {
    return NextResponse.rewrite('/profile');
  }
  return NextResponse.redirect('/');
}
