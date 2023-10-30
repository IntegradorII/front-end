export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/dashboard/:path*' // for all routes under /dashboard
  ]
}
