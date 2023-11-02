import { withAuth } from 'next-auth/middleware'
import { type NextRequest } from 'next/server'
// import { auth } from '@/app/api/auth/[...nextauth]/route'

export const config = {
  matcher: [
    '/dashboard/:path*' // for all routes under /dashboard
  ]
}

export default withAuth(
  function middleware (req: NextRequest) {
    console.log('Request path: ', req.nextUrl.pathname)
  }
)
