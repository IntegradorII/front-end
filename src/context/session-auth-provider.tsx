'use client'

import { SessionProvider } from 'next-auth/react'

interface SessionAuthContextProps {
  session: any
  children: React.ReactNode
}

export function SessionAuthProvider ({ session, children }: SessionAuthContextProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
