'use client'

import { FaUser } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
import Link from 'next/link'
import { useLoginContext } from '@/context/LoginContext'
import { signIn, signOut } from 'next-auth/react'

export function ButtonAuth () {
  const { dataSession } = useLoginContext()
  const { session } = dataSession

  const {
    setOpenIdSignUpModal
    // handleLogout
  } = useLoginContext()

  return (
    <div className='flex items-center justify-center px-2 gap-1'>
      {session
        ? (
          <>
            <div className='navbar-item'>
              <Link href='/dashboard/user-profile' className='flex flex-col justify-center items-center text-yellow text-2xl font-semibold gap-1 px-8'>
                <FaUser/>
                <span className='text-sm'>Juanita</span>
              </Link>
            </div>
            <button
              // onClick={handleLogout}
              onClick={() => {
                signOut({
                  redirect: true,
                  callbackUrl: 'http://localhost:3000/'
                }).catch(console.error)
              } }
            >
              <div className='flex flex-col justify-center items-center text-yellow text-2xl font-semibold gap-1 px-8 hover:cursor-pointer'>
                <TbLogout/>
                <span className='text-sm'>Salir</span>
              </div>
            </button>
          </>)
        : (<>
          <button onClick={() => { console.log('Alogo'); setOpenIdSignUpModal(true) } } className='w-[150px] bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl'>
            Regitrarse
          </button>
          <button onClick={() => {
            signIn('auth0', {
              redirect: true,
              callbackUrl: 'http://localhost:3000/dashboard'
            }).catch(console.error)
          } } className='w-[150px] bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl'>
            Iniciar Sesión
          </button>
        </>)
      }
    </div>
  )
}
