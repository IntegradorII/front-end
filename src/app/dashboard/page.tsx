import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { AddProfile } from '@/components/home/add-profile'
import { Recommended } from '@/components/home/recommended'
import { MdOutlinePets } from 'react-icons/md'
import { FaChildReaching } from 'react-icons/fa6'
import { ChlidList } from '@/components/home/chlid-list'
import { v4 } from 'uuid'

const Home = () => {
  const childimg = [
    { id: v4(), src: '/images/photo-child-1.png', alt: 'Foto prenda 1' },
    { id: v4(), src: '/images/photo-child-2.png', alt: 'Foto prenda 2' },
    { id: v4(), src: '/images/photo-child-3.png', alt: 'Foto prenda 3' },
    { id: v4(), src: '/images/photo-child-4.png', alt: 'Foto prenda 4' },
    { id: v4(), src: '/images/photo-child-5.png', alt: 'Foto prenda 5' },
    { id: v4(), src: '/images/photo-child-6.png', alt: 'Foto prenda 6' },
    { id: v4(), src: '/images/photo-child-7.png', alt: 'Foto prenda 7' },
    { id: v4(), src: '/images/photo-child-8.png', alt: 'Foto prenda 8' }
  ]

  const petimg = [
    { id: v4(), src: '/images/photo-pet-1.png', alt: 'Foto prenda 1' },
    { id: v4(), src: '/images/photo-pet-2.png', alt: 'Foto prenda 2' },
    { id: v4(), src: '/images/photo-pet-3.png', alt: 'Foto prenda 3' },
    { id: v4(), src: '/images/photo-pet-4.png', alt: 'Foto prenda 4' },
    { id: v4(), src: '/images/photo-pet-5.png', alt: 'Foto prenda 5' },
    { id: v4(), src: '/images/photo-pet-6.png', alt: 'Foto prenda 6' },
    { id: v4(), src: '/images/photo-pet-7.png', alt: 'Foto prenda 7' },
    { id: v4(), src: '/images/photo-pet-8.png', alt: 'Foto prenda 8' }
  ]

  return (
    <section className='w-full flex flex-col gap-7'>
      <div className='flex justify-between items-start gap-7'>
        <ChlidList />
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
