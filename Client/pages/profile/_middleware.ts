import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
    // Setting cookies on the response
    // const response = NextResponse.next();
    const url = request.nextUrl;
    const jwtToken = request.cookies['jwt-token'];
    const refreshToken = request.cookies['refresh-token'];
    if (jwtToken || refreshToken) {
        return NextResponse.rewrite(url);
    }
    return NextResponse.rewrite('/');
}
