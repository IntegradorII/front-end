'use client'
import Image from 'next/image'
import { ButtonAuth } from '@/components/common/button-auth'
import { useLoginContext } from '@/context/LoginContext'

const NavBar = () => {
  const { setOpenModalLogin } = useLoginContext()
  return (
    <nav className="w-full flex justify-center items-center">
      <div className='flex'>
        <Image src="/images/Logo.png" alt="Offcorss Logo" width={204} height={70}/>
      </div>
      <div className='flex absolute right-2'>
        <ButtonAuth />
        <button onClick={() => { setOpenModalLogin(true) } } className='bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl'>
        Iniciar Sesión
        </button>
      </div>
    </nav>
  )
}

export { NavBar }
