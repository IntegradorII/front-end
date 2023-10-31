import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'

const NavBar = () => {
  return (
    <nav className="bg-dark-gray h-[85px] flex justify-center items-center sticky top-0">
      <div className='flex'>
        <Image src="/images/Logo.png" alt="Offcorss Logo" width={254} height={80}/>
      </div>
      <div className='flex absolute right-0'>
        <div className='navbar-item'>
          <FaUser/>
          <span className='text-sm'>Juanita</span>
        </div>
        <div className='navbar-item'>
          <TbLogout2/>
          <span className='text-sm'>Salir</span>
        </div>
      </div>
    </nav>
  )
}

export { NavBar }
