import Image from 'next/image'
import { ButtonAuth } from '@/components/common/button-auth'

const NavBar = () => {
  return (
    <nav className="w-full flex justify-center items-center">
      <div className='flex'>
        <Image src="/images/Logo.png" alt="Offcorss Logo" width={204} height={70}/>
      </div>
      <div className='flex absolute right-2'>
        <ButtonAuth />
      </div>
    </nav>
  )
}

export { NavBar }
