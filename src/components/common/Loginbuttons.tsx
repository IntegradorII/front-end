import { useLoginContext } from '@/context/LoginContext'
import React from 'react'

const Loginbuttons = () => {
  const { setOpenModalLogin } = useLoginContext()
  return (
    <div className='flex direction-row gap-2'>
      <button onClick={ () => { setOpenModalLogin(true) } } className='bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl'>
        Iniciar Sesión
      </button>
    </div>
  )
}

export { Loginbuttons }
