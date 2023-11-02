import { type NextRequest, NextResponse } from 'next/server'

export function GET (req: NextRequest) {
  const url = req.nextUrl.clone()
  url.pathname = '/dashboard'
  return NextResponse.redirect(url)
}
