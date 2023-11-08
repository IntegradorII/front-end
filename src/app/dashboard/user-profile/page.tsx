import Image from 'next/image'
import { BsFillStarFill, BsEnvelopePaper } from 'react-icons/bs'
import { PiStarDuotone, PiSquaresFourLight } from 'react-icons/pi'
import { PercentageBar } from '@/components/home/percentage-bar'
import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { FaRegUser } from 'react-icons/fa'
import { GrGroup } from 'react-icons/gr'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { BiLock } from 'react-icons/bi'
import { SlArrowRight } from 'react-icons/sl'

const UserProfile = () => {
  return (
    <section className='w-full flex flex-col gap-8'>
      <div className="w-full bg-white py-6 px-8 rounded-3xl">
        <div className='flex justify-between items-center'>
          <div className='flex gap-8'>
            <Image src="/images/profile.png" alt="Foto de perfil" width={90} height={90} className='rounded-full'/>
            <div className='flex flex-col gap-1 font-semibold'>
              <span>Juanita Perez</span>
              <span>juanitaperez@offcorss.com.co</span>
              <div className='flex flex-col items-center text-center bg-medium-gray rounded-xl text-white px-4 py-1'>
                <div className='flex gap-1'>
                  <span>Eres</span>
                  <span className='text-yellow'>Star</span>
                  <span>te faltan 300 puntos para ser</span>
                  <span className='text-yellow'>CoolStar</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
            <span className='bg-medium-gray text-yellow rounded-3xl font-semibold px-2'>Tus puntos</span>
            <span className='text-3xl font-bold'>700</span>
          </div>
        </div>
        <div className='w-full flex items-center gap-2 pt-4'>
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
      <div className="w-full bg-white font-semibold py-4 px-8 rounded-3xl">
        <div className='flex justify-between items-center pb-3 px-4 hover:cursor-pointer'>
          <div className='flex gap-4 text-lg'>
            <FaRegUser/>
            <span className='text-base'>Mis datos</span>
          </div>
          <SlArrowRight/>
        </div>
        <HorizontalSeparator percentage={100}/>
        <div className='flex justify-between items-center py-3 px-4 hover:cursor-pointer'>
          <div className='flex gap-4 text-lg'>
            <GrGroup/>
            <span className='text-base'>Mis familiares</span>
          </div>
          <SlArrowRight/>
        </div>
        <HorizontalSeparator percentage={100}/>
        <div className='flex justify-between items-center py-3 px-4 hover:cursor-pointer'>
          <div className='flex gap-4 text-lg'>
            <BsEnvelopePaper/>
            <span className='text-base'>Comunicaciones</span>
          </div>
          <SlArrowRight/>
        </div>
        <HorizontalSeparator percentage={100}/>
        <div className='flex justify-between items-center py-3 px-4 hover:cursor-pointer'>
          <div className='flex gap-4 text-xl'>
            <MdOutlinePrivacyTip/>
            <span className='text-base'>Privacidad</span>
          </div>
          <SlArrowRight/>
        </div>
        <HorizontalSeparator percentage={100}/>
        <div className='flex justify-between items-center py-3 px-4 hover:cursor-pointer'>
          <div className='flex gap-4 text-xl'>
            <BiLock/>
            <span className='text-base'>Seguridad</span>
          </div>
          <SlArrowRight/>
        </div>
        <HorizontalSeparator percentage={100}/>
        <div className='flex justify-between items-center pt-3 px-4 hover:cursor-pointer'>
          <div className='flex gap-4 text-xl'>
            <PiSquaresFourLight/>
            <span className='text-base'>Gestión de puntos</span>
          </div>
          <SlArrowRight/>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
