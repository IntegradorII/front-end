import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'
import { SessionAuthProvider } from '@/context/session-auth-provider'
import { auth } from '@/app/api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Offcorss',
  description: 'Generated by create next app'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout ({ children }: RootLayoutProps) {
  const session = await auth()

  return (
    <html lang="es">
      <head>
        <title>OFFCORSS</title>
      </head>
      <body className={inter.className}>
        <SessionAuthProvider session={session}>
          <section className="min-h-screen w-full">
            <div className='w-full min-h-[calc(100vh-2.75rem)]'>
              <Header />
              {children}
            </div>
            <Footer />
            {/* <div
            style={{
              clipPath: 'polygon(0 0, 80% 0%, 50% 100%, 0 100%)',
              zIndex: -1
            }} className="absolute top-0 left-0 w-full h-full bg-[#FFDD00]" /> */}
          </section>
        </SessionAuthProvider>
      </body>
    </html>
  )
}
