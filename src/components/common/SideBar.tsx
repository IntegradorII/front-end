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
    <div className='w-[23%] min-w-[15rem] h-full flex justify-center items-center py-7'>
      <div className="w-[15rem] flex flex-col items-center gap-3 bg-white px-4 py-6 rounded-3xl text-sm">
        <div className='w-full flex flex-col items-center'>
          <Image src="/images/ProfilePhoto.png" alt="Foto de perfil" width={90} height={90} className='rounded-full'/>
          <div className='flex flex-col items-center font-bold text-base'>
            <p>Hola,</p>
            <p>Juanita Pérez</p>
          </div>
          <div className='w-full flex items-center gap-2 px-3'>
            <div className='text-yellow text-lg'>
              <PiStarDuotone/>
            </div>
            <div className='w-full'>
              <PercentageBar percentage={50}/>
            </div>
            <div className='text-yellow text-lg'>
              <BsFillStarFill/>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center text-center bg-medium-gray rounded-xl font-semibold text-white px-3 py-1'>
          <p>
            Eres <span className='text-yellow'>star</span>
          </p>
          <p>
            Te faltan 300 puntos para ser <span className='text-yellow'>coolstar</span>
          </p>
        </div>
        <div className='flex flex-col items-center font-bold w-full text-center'>
          <HorizontalSeparator percentage={90}/>
          <Link href='/dashboard' className={`w-full py-2 rounded-md ${pathname === '/dashboard' ? 'bg-gray-300' : ''}`}>Home</Link>
          <HorizontalSeparator percentage={90}/>
          {/* <span className='w-full py-2 hover:cursor-pointer'>Histórico de compras</span> */}
          <Link href='/dashboard/purchase-history' className={`w-full py-2 rounded-md ${pathname === '/dashboard/purchase-history' ? 'bg-gray-300' : ''}`}>Histórico de compras</Link>
          <HorizontalSeparator percentage={90}/>
          <span className='w-full py-2 hover:cursor-pointer'>Beneficios por segmento</span>
          {/* <Link href='/dashboard/benefits' className={`w-full py-2 rounded-md ${pathname === '/dashboard/benefits' ? 'bg-gray-300' : ''}`}>Beneficios por segmento</Link> */}
          <HorizontalSeparator percentage={90}/>
          {/* <span className='w-full py-2 hover:cursor-pointer'>Mis descuentos</span> */}
          <Link href='/dashboard/discounts' className={`w-full py-2 rounded-md ${pathname === '/dashboard/discounts' ? 'bg-gray-300' : ''}`}>Mis descuentos</Link>
          <HorizontalSeparator percentage={90}/>
          {/* <span className='w-full py-2 hover:cursor-pointer'>Marcas aliadas</span> */}
          <Link href='/dashboard/allied-brands' className={`w-full py-2 rounded-md ${pathname === '/dashboard/allied-brands' ? 'bg-gray-300' : ''}`}>Marcas aliadas</Link>
          <HorizontalSeparator percentage={90}/>
          <span className='w-full py-2 hover:cursor-pointer'>Blog Offcorss</span>
        </div>
      </div>
    </div>
  )
}

export { SideBar }
