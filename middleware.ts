import { NextRequest, NextResponse } from 'next/server';
export default function middleware(req: NextRequest) {
  const auth = req.cookies.get('WebTEV')?.value;
  if (!auth) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: ['/avaliacao', '/menu'] 
}
