import { type NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
// import type { MyUser } from '@/app/api/auth/[...nextauth]/route'

export const config = {
  matcher: ['/', '/dashboard/:path*', '/admin/:path*', '/welcome']
}

export default withAuth(
  function middleware (req: NextRequestWithAuth) {
    const url = req.nextUrl
    const path = url.pathname
    const token = req.nextauth?.token
    // const user = token?.user as MyUser
    if (path === '/') {
      if (token !== null) {
        return NextResponse.redirect(new URL('/dashboard', url))
      }
      return NextResponse.redirect(new URL('/welcome', url))
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized ({ token, req }) {
        const url = req.nextUrl
        const path = url.pathname
        if (path === '/welcome' || path === '/') {
          return true
        }
        return token !== null
      }
    }
  }
)
