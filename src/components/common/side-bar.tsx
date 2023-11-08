'use client'

import Image from 'next/image'
import { PercentageBar } from '@/components/home/percentage-bar'
import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { BsFillStarFill } from 'react-icons/bs'
import { PiStarDuotone } from 'react-icons/pi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
  const pathname = usePathname()
  return (
    <div className='w-[30%] min-w-[18rem] max-w-[23rem] first-letter:flex flex justify-center fixed h-full border-r-separator-gray border-r-2 py-8 px-16'>
      <div className='top-0 left-0 w-full min-w-[18rem] flex h-fit'>
        <div className='flex flex-col items-center gap-3 bg-white px-8 py-6 rounded-3xl text-sm'>
          <div className='w-full flex flex-col items-center'>
            <Image src="/images/profile.png" alt="Foto de perfil" width={90} height={90} className='rounded-full'/>
            <div className='flex flex-col items-center font-bold text-base'>
              <p>Hola,</p>
              <p>Juanita Pérez</p>
            </div>
            <div className='w-full flex items-center gap-2'>
              <div className='text-yellow text-lg'>
                <PiStarDuotone/>
              </div>
              <div className='w-full'>
                <PercentageBar percentage={70}/>
              </div>
              <div className='text-yellow text-lg'>
                <BsFillStarFill/>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center text-center bg-medium-gray rounded-xl font-semibold text-white px-10 py-1 my-4'>
            <div className='flex gap-1'>
              <span>Eres</span>
              <span className='text-yellow'>Star</span>
            </div>
            <span>Te faltan 300 puntos</span>
            <div className='flex gap-1'>
              <span>para ser</span>
              <span className='text-yellow'>CoolStar</span>
            </div>
          </div>
          <div className='flex flex-col items-center font-bold w-full text-center'>
            <HorizontalSeparator percentage={100}/>
            <Link href='/dashboard' className={`w-full py-2 rounded-full ${pathname === '/dashboard' ? 'bg-separator-gray' : ''}`}>Home</Link>
            <HorizontalSeparator percentage={100}/>
            {/* <span className='w-full py-2 hover:cursor-pointer'>Histórico de compras</span> */}
            <Link href='/dashboard/purchase-history' className={`w-full py-2 rounded-full ${pathname === '/dashboard/purchase-history' ? 'bg-separator-gray' : ''}`}>Histórico de compras</Link>
            <HorizontalSeparator percentage={100}/>
            <span className='w-full py-2 hover:cursor-pointer'>Beneficios por segmento</span>
            {/* <Link href='/dashboard/benefits' className={`w-full py-2 rounded-md ${pathname === '/dashboard/benefits' ? 'bg-gray-300' : ''}`}>Beneficios por segmento</Link> */}
            <HorizontalSeparator percentage={100}/>
            {/* <span className='w-full py-2 hover:cursor-pointer'>Mis descuentos</span> */}
            <Link href='/dashboard/discounts' className={`w-full py-2 rounded-full ${pathname === '/dashboard/discounts' ? 'bg-separator-gray' : ''}`}>Mis descuentos</Link>
            <HorizontalSeparator percentage={100}/>
            {/* <span className='w-full py-2 hover:cursor-pointer'>Marcas aliadas</span> */}
            <Link href='/dashboard/allied-brands' className={`w-full py-2 rounded-full ${pathname === '/dashboard/allied-brands' ? 'bg-separator-gray' : ''}`}>Marcas aliadas</Link>
            <HorizontalSeparator percentage={100}/>
            <span className='w-full py-2 hover:cursor-pointer'>Blog Offcorss</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SideBar }
