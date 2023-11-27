import Image from 'next/image'
import { PercentageBar } from '@/components/home/percentage-bar'
import { BsFillStarFill } from 'react-icons/bs'
import { PiStarDuotone } from 'react-icons/pi'
import { SideBarList, type LinkItem } from './side-bar-list'
import { LinkWrapper } from './link-wrapper'

const listItems: LinkItem[] = [
  {
    name: 'Home',
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
    <div className='w-[21rem] first-letter:flex flex justify-center fixed h-full border-r-separator-gray border-r-2 p-8'>
      <div className='top-0 left-0 w-full flex h-fit'>
        <div className='flex flex-col items-center gap-3 bg-white p-8 rounded-3xl text-sm'>
          <LinkWrapper url='/dashboard/user-profile' className='w-full flex flex-col items-center'>
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
          </LinkWrapper>
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
          <SideBarList items={listItems}/>
        </div>
      </div>
    </div>
  )
}

export { SideBar }
