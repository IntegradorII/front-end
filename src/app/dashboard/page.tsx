import { HorizontalSeparator } from '@/components/common/horizontal-separator'
import { AddProfile } from '@/components/home/add-profile'
import { Recommended } from '@/components/home/recommended'
import { MdOutlinePets } from 'react-icons/md'
import { FaChildReaching } from 'react-icons/fa6'
import { ChlidList } from '@/components/home/chlid-list'
import { v4 } from 'uuid'

const Home = () => {
  const childimg = [
    { id: v4(), src: '/images/photo-child-1.png', alt: 'Foto prenda 1', link: 'https://www.offcorss.com/conjunto-largo-31124851/p' },
    { id: v4(), src: '/images/photo-child-2.png', alt: 'Foto prenda 2', link: 'https://www.offcorss.com/vestido-manga-sisa-42019801/p' },
    { id: v4(), src: '/images/photo-child-3.png', alt: 'Foto prenda 3', link: 'https://www.offcorss.com/overall-corto-42082051/p' },
    { id: v4(), src: '/images/photo-child-4.png', alt: 'Foto prenda 4', link: 'https://www.offcorss.com/camiseta-manga-corta-41336481/p' },
    { id: v4(), src: '/images/photo-child-5.png', alt: 'Foto prenda 5', link: 'https://www.offcorss.com/body-tipo-polo-31117471/p' },
    { id: v4(), src: '/images/photo-child-6.png', alt: 'Foto prenda 6', link: 'https://www.offcorss.com/vestido-manga-larga-42019151/p' },
    { id: v4(), src: '/images/photo-child-7.png', alt: 'Foto prenda 7', link: 'https://www.offcorss.com/vestido-manga-sisa-32081281/p' },
    { id: v4(), src: '/images/photo-child-8.png', alt: 'Foto prenda 8', link: 'https://www.offcorss.com/pantalon-51269301/p' }
  ]

  const petimg = [
    { id: v4(), src: '/images/photo-pet-1.png', alt: 'Foto prenda 1', link: 'https://www.offcorss.com/panoleta-para-mascotas-63140475/p' },
    { id: v4(), src: '/images/photo-pet-2.png', alt: 'Foto prenda 2', link: 'https://www.offcorss.com/panoleta-63140755/p' },
    { id: v4(), src: '/images/photo-pet-3.png', alt: 'Foto prenda 3', link: 'https://www.offcorss.com/panoleta-63140544/p' },
    { id: v4(), src: '/images/photo-pet-4.png', alt: 'Foto prenda 4', link: 'https://www.offcorss.com/collar-con-correa-para-mascotas-63140501/p' },
    { id: v4(), src: '/images/photo-pet-5.png', alt: 'Foto prenda 5', link: 'https://www.offcorss.com/mascotas-accesorios-corbatin-para-mascotas-63140354/p' },
    { id: v4(), src: '/images/photo-pet-6.png', alt: 'Foto prenda 6', link: 'https://www.offcorss.com/panoleta-63140754/p' },
    { id: v4(), src: '/images/photo-pet-7.png', alt: 'Foto prenda 7', link: 'https://www.offcorss.com/corbatin-63140554/p' },
    { id: v4(), src: '/images/photo-pet-8.png', alt: 'Foto prenda 8', link: 'https://www.offcorss.com/panoleta-63140752/p' }
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
