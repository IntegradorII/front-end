'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { FaUser } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function ButtonAuth () {
  const { data: session, status } = useSession()
  const router = useRouter()

  // console.log({ session, status })

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
          <Link href='/dashboard/user-profile' className='flex flex-col justify-center items-center text-yellow text-2xl font-semibold gap-1 px-8'>
            <FaUser/>
            <span className='text-sm'>Juanita</span>
          </Link>
        </div>
      )}
      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleClick}
        className={`${status === 'loading' ? 'opacity-50 pointer-events-none' : ''}`}
      >
        {session
          ? <div className='flex flex-col justify-center items-center text-yellow text-2xl font-semibold gap-1 px-8 hover:cursor-pointer'>
            <TbLogout/>
            <span className='text-sm'>Salir</span>
          </div>
          : 'Iniciar Sesion'}
      </button>
    </div>
  )
}
