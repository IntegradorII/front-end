'use client'
import Image from 'next/image'
import { PercentageBar } from '@/components/home/percentage-bar'
import { BsFillStarFill } from 'react-icons/bs'
import { PiStarDuotone } from 'react-icons/pi'
import { SideBarList, type LinkItem } from './side-bar-list'
import Link from 'next/link'

const listItems: LinkItem[] = [
  {
    name: 'Inicio',
    url: '/dashboard'
  },
  {
    name: 'Histórico de compras',
    url: '/dashboard/purchase-history'
  },
  {
    name: 'Beneficios por segmento',
    url: '/dashboard/benefits'
  },
  {
    name: 'Mis descuentos',
    url: '/dashboard/discounts'
  },
  {
    name: 'Marcas aliadas',
    url: '/dashboard/allied-brands'
  },
  {
    name: 'Blog Offcorss',
    url: 'https://www.offcorss.com/'
  }
]

const SideBar = () => {
  return (
    <aside id='my-custom-sidebar'
      className='w-[21rem] flex justify-start items-start fixed top-[5rem] h-[calc(100vh-5rem)] p-8 overflow-y-auto'>
      <div className='flex flex-col items-center gap-3 bg-white px-8 py-5 rounded-3xl text-sm'>
        <Link href='/dashboard/user-profile' className='w-full flex flex-col items-center'>
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
        </Link>
        <div className='flex flex-col items-center text-center bg-medium-gray rounded-xl font-semibold text-white px-6 py-2 my-3'>
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
        <SideBarList items={listItems}/>
      </div>
    </aside>
  )
}

export { SideBar }
