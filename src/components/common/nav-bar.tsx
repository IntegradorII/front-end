import Image from 'next/image'
import { ButtonAuth } from '@/components/common/button-auth'

const NavBar = () => {
  return (
    <nav className='w-full max-w-[1920px] flex justify-center items-center relative'>
      <div className='flex'>
        <Image src='/images/logo-offcors.png' alt='Offcorss Logo' width={204} height={70}/>
      </div>
      <div className='flex absolute right-2 gap-3'>
        <ButtonAuth />
      </div>
    </nav>
  )
}

export { NavBar }
