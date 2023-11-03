import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { AddProfile } from '@/components/home/add-profile'
import { ChildCard } from '@/components/home/child-card'
import { ProfilesBar } from '@/components/home/profiles-bar'
import { Recommended } from '@/components/home/recommended'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const Home = () => {
  return (
    <div className='debug w-full flex flex-col gap-7'>
      <div className='flex justify-between items-start gap-7 px-7'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex items-center justify-center gap-8'>
            <button className='arrow-button rounded-full p-3'>
              <SlArrowLeft/>
            </button>
            <ChildCard imagePath='/images/ProfilePhoto.png' rship='Hijo' name='Pepito' birthDay='19 de febrero'/>
            <button className='arrow-button rounded-full p-3'>
              <SlArrowRight/>
            </button>
          </div>
          <ProfilesBar/>
        </div>
        <div className='flex flex-col gap-4'>
          <AddProfile text='Agregar niño'/>
          <AddProfile text='Agregar mascota'/>
        </div>
      </div>
      <HorizontalSeparator percentage={100}/>
      <div className='flex flex-col px-10'>
        <Recommended title='Prendas para ser cool'/>
      </div>
      <HorizontalSeparator percentage={100}/>
      <div className='flex flex-col px-10'>
        <Recommended title='Accesorios para mascotas'/>
      </div>
    </div>
  )
}

export default Home
