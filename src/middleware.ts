import { withAuth, type NextRequestWithAuth } from 'next-auth/middleware'
// import { auth } from '@/app/api/auth/[...nextauth]/route'

export const config = {
  matcher: [
    '/dashboard/:path*', // for all routes under /dashboard
    '/admin/:path*' // for all routes under /admin
  ]
}

export default withAuth(
  function middleware (req: NextRequestWithAuth) {
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
      console.log('dashboard middleware')
      console.log(req.nextauth)
    }
  }
)
