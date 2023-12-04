'use client'

import { FaUser } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export function ButtonAuth () {
  const { data: session, status } = useSession()
  const user = session?.user
  const loading = status === 'loading'
  return (
    <div className={`flex items-center justify-center px-2 gap-4 ${loading ? 'disable' : ''}`}>
      {session
        ? (
          <>
            <div className='navbar-item'>
              <Link href='/dashboard/user-profile' className='flex flex-col justify-center items-center text-yellow text-2xl font-semibold gap-1 px-8'>
                <FaUser/>
                <span className='text-sm'>{user?.name ?? 'Username'}</span>
              </Link>
            </div>
            <button
              onClick={() => {
                signOut({
                  redirect: true,
                  callbackUrl: '/'
                }).catch(console.error)
              }}
            >
              <div className='flex flex-col justify-center items-center text-yellow text-2xl font-semibold gap-1 px-8 hover:cursor-pointer'>
                <TbLogout/>
                <span className='text-sm'>Salir</span>
              </div>
            </button>
          </>)
        : (<>
          <button onClick={() => {
            signIn('auth0', {
              redirect: true,
              callbackUrl: '/dashboard'
            }).catch(console.error)
          } } className='bg-yellow hover:bg-light-yellow hover:border-2 hover:border-yellow text-black font-bold py-2 px-4 rounded-3xl'>
            Iniciar Sesión / Registrarse
          </button>
        </>)
      }
    </div>
  )
}
