'use client'
import { useLoginContext } from '@/context/LoginContext'
import React from 'react'
import { Modal } from './Modal'
import Link from 'next/link'

const LoginModal = () => {
  const { openModalLogin, setOpenModalLogin } = useLoginContext()
  return (
    <Modal open={openModalLogin} setOpen={setOpenModalLogin} title='INICIO DE SESIÓN'>
      <div className='h-[300px] w-[350px]'>
        <form className='flex flex-col space-y-6 items-center'>
          <label htmlFor="email" className='w-[300px]'>
            <span className='text-white  text-xl'>Correo electrónico:</span>
            <input className='w-[300px] mt-2 h-[30px] rounded-lg' type="text" name="LogIn" id="LogIn" />
          </label>
          <label htmlFor="password" className='w-[300px]'>
            <span className='text-white  text-xl'>Contraseña:</span>
            <input className='w-[300px] mt-2 h-[30px] rounded-lg' type="password" name="password" id="password" />
          </label>
          <button className='w-40 bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl'>
        Iniciar Sesión
          </button>
          <Link href={''}>
            <div className='text-white underline'>
              ¿Olvidaste tu contraseña?
            </div>
          </Link>
          <div className='text-white underline'>
              ¿Olvidaste tu contraseña?
          </div>
        </form>
      </div>
    </Modal>
  )
}

export { LoginModal }
