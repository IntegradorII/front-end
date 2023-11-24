'use client'
import { useLoginContext } from '@/context/LoginContext'
import React from 'react'
import { Modal } from './modal'

const LoginModal = () => {
  const {
    openModalLogin,
    setOpenModalLogin,
    setOpenModalPassword,
    setOpenIdSignUpModal,
    handleLogin
  } = useLoginContext()

  const handlePasswordClick = () => {
    setOpenModalLogin(false)
    setOpenModalPassword(true)
  }

  const handleSignUpClick = () => {
    setOpenModalLogin(false)
    setOpenIdSignUpModal(true)
  }

  const handleLoginClick = (even) => {
    even.preventDefault()
    handleLogin({ email: 'user0@mail.com', password: '1234567' })
  }

  return (
    <Modal
      open={openModalLogin}
      setOpen={setOpenModalLogin}
      title="INICIO DE SESIÓN"
    >
      <div className="h-[320px] w-[350px] py-2">
        <form className="flex flex-col space-y-6 items-center">
          <label htmlFor="email" className="w-[300px]">
            <span className="text-white  text-xl">Correo electrónico:</span>
            <input
              className="w-[300px] mt-2 h-[30px] rounded-lg"
              type="text"
              name="LogIn"
              id="LogIn"
            />
          </label>
          <label htmlFor="password" className="w-[300px]">
            <span className="text-white  text-xl">Contraseña:</span>
            <input
              className="w-[300px] mt-2 h-[30px] rounded-lg"
              type="password"
              name="password"
              id="password"
            />
          </label>
          <button onClick={handleLoginClick} className="w-40 bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl">
            Iniciar Sesión
          </button>
          <div
            onClick={handlePasswordClick}
            className="text-white underline hover:cursor-pointer"
          >
            ¿Olvidaste tu contraseña?
          </div>
          <div
            onClick={handleSignUpClick}
            className="text-white underline hover:cursor-pointer"
          >
            ¿Aún no te has registrado?
          </div>
        </form>
      </div>
    </Modal>
  )
}

export { LoginModal }
