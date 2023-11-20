import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { AddProfile } from '@/components/home/add-profile'
import { ChildCard } from '@/components/home/child-card'
import { ProfilesBar } from '@/components/home/profiles-bar'
import { Recommended } from '@/components/home/recommended'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { MdOutlinePets } from 'react-icons/md'
import { FaChildReaching } from 'react-icons/fa6'

const Home = () => {
  const childimg = [
    '/images/photo-child-1.png',
    '/images/photo-child-2.png',
    '/images/photo-child-3.png',
    '/images/photo-child-4.png',
    '/images/photo-child-5.png'
  ]

  const petimg = [
    '/images/photo-pet-1.png',
    '/images/photo-pet-2.png',
    '/images/photo-pet-3.png',
    '/images/photo-pet-4.png',
    '/images/photo-pet-5.png'
  ]

  return (
    <section className='w-full flex flex-col gap-7'>
      <div className='flex justify-between items-start gap-7'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex items-center justify-center gap-8'>
            <button className='arrow-button rounded-full p-3'>
              <SlArrowLeft/>
            </button>
            <ChildCard imagePath='/images/profile.png' rship='Hijo' name='Pepito' birthDay='19 de febrero'/>
            <button className='arrow-button rounded-full p-3'>
              <SlArrowRight/>
            </button>
          </div>
          <ProfilesBar/>
        </div>
        <div className='flex flex-col gap-4'>
          <AddProfile text='Agregar niño' Icon={FaChildReaching}/>
          <AddProfile text='Agregar mascota' Icon={MdOutlinePets}/>
        </div>
      </div>
      <HorizontalSeparator percentage={100}/>
      <div className='flex flex-col'>
        <Recommended title='Prendas para ser cool' images={childimg}/>
      </div>
      <HorizontalSeparator percentage={100}/>
      <div className='flex flex-col'>
        <Recommended title='Accesorios para mascotas' images={petimg}/>
      </div>
    </section>
  )
}

export default Home
