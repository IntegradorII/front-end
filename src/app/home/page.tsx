import { HorizontalSeparator } from '@/components/common/HorizontalSeparator'
import { SideBar } from '@/components/common/SideBar'
import { AddProfile } from '@/components/home/AddProfile'
import { ChildCard } from '@/components/home/ChildCard'
import { ProfilesBar } from '@/components/home/ProfilesBar'
import { Suggested } from '@/components/home/Suggested'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const Home = () => {
  return (
    <div className="w-full h-full bg-light-gray">
      <div className='flex w-full h-full'>
        <SideBar/>
        <div className='w-[75%] ml-[25%] py-10'>
          <div className='flex justify-between px-16'>
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
            <div className='flex flex-col justify-between mr-12'>
              <AddProfile text='Agregar niño'/>
              <AddProfile text='Agregar mascota'/>
            </div>
          </div>
          <div className='mt-10 mb-6'>
            <HorizontalSeparator percentage={95}/>
          </div>
          <div className='flex flex-col px-16'>
            <Suggested title='Prendas para ser cool'/>
          </div>
          <div className='my-6'>
            <HorizontalSeparator percentage={95}/>
          </div>
          <div className='flex flex-col px-16'>
            <Suggested title='Accesorios para mascotas'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
