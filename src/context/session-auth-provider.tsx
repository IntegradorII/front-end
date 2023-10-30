'use client'

import { SessionProvider } from 'next-auth/react'

interface SessionAuthContextProps {
  children: React.ReactNode
}

export function SessionAuthProvider ({ children }: SessionAuthContextProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
