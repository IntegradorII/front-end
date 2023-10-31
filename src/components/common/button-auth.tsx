'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { FaUser } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
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
    <div className="flex items-center justify-center px-2">
      {session && (
        <div className='navbar-item'>
          <FaUser/>
          <span className='text-sm'>Juanita</span>
        </div>
      )}
      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleClick}
        className={`${status === 'loading' ? 'opacity-50 pointer-events-none' : ''}`}
      >
        {session
          ? <div className='navbar-item'>
            <TbLogout/>
            <span className='text-sm'>Salir</span>
          </div>
          : 'Iniciar Sesion'}
      </button>
    </div>
  )
}
