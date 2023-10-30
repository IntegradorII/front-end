'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function ButtonAuth () {
  const { data: session, status } = useSession()
  const router = useRouter()

  console.log({ session, status })

  const handleClick = async () => {
    if (session) {
      await signOut({ redirect: true, callbackUrl: '/' })
    } else {
      const res = await signIn('credentials', {
        redirect: false,
        email: '',
        password: ''
      })
      console.log(res)
      if (res?.error) {
        console.log(res.error)
        return
      }
      router.push('/dashboard')
    }
  }

  return (
    <div className="flex items-center gap-2">
      {session && (
        <span className="text-[#FFDD00]">
          Hola, {session.user?.name ?? session.user?.email}
        </span>
      )}
      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleClick}
        className={`bg-[#FFDD00] text-[#1D1D1E] px-5 py-2 rounded-md
        ${status === 'loading' ? 'opacity-50 pointer-events-none' : ''}`}
      >
        {session ? 'Cerrar Sesion' : 'Iniciar Sesion'}
      </button>
    </div>
  )
}
