import Image from 'next/image'
import { PercentageBar } from '../home/PercentageBar'
import { HorizontalSeparator } from './HorizontalSeparator'
import { VerticalSeparator } from './VerticalSeparator'
import { BsFillStarFill } from 'react-icons/bs'
import { PiStarDuotone } from 'react-icons/pi'

const SideBar = () => {
  return (
    <div className='flex w-[25%] h-full fixed justify-center'>
      <div className='top-0 left-0 my-10 mx-12 w-full'>
        <div className="flex flex-col items-center bg-white px-4 py-6 rounded-3xl text-sm">
          <div className='w-full flex flex-col items-center rounded-full'>
            <Image src="/images/ProfilePhoto.png" alt="Foto de perfil" width={90} height={90}/>
            <div className='flex flex-col items-center font-bold text-base'>
              <p>Hola,</p>
              <p>Juanita Pérez</p>
            </div>
            <div className='w-full flex items-center gap-2 px-4'>
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
          <div className='flex flex-col items-center bg-medium-gray rounded-xl font-semibold text-white px-10 py-1 my-4'>
            <div className='flex gap-1'>
              <p>Eres</p>
              <p className='text-yellow'>star</p>
            </div>
            <p>Te faltan 300 puntos</p>
            <div className='flex gap-1'>
              <p>para ser</p>
              <p className='text-yellow'>coolstar</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-2 font-bold w-full'>
            <HorizontalSeparator percentage={80}/>
            <span className='hover:cursor-pointer'>Inicio</span>
            <HorizontalSeparator percentage={80}/>
            <span className='hover:cursor-pointer'>Histórico de compras</span>
            <HorizontalSeparator percentage={80}/>
            <span className='hover:cursor-pointer'>Beneficios por segmento</span>
            <HorizontalSeparator percentage={80}/>
            <span className='hover:cursor-pointer'>Mis descuentos</span>
            <HorizontalSeparator percentage={80}/>
            <span className='hover:cursor-pointer'>Marcas aliadas</span>
            <HorizontalSeparator percentage={80}/>
            <span className='hover:cursor-pointer'>Blog Offcorss</span>
          </div>
        </div>
      </div>
      <VerticalSeparator percentage={100}/>
    </div>
  )
}

export { SideBar }
