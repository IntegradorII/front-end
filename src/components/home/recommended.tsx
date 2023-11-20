import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { VerticalSeparator } from '@/components/common/vertical-separator'
import Image from 'next/image'

interface SuggestedProps {
  title: string
  images: string[]
}

const Recommended = ({ title, images }: (SuggestedProps)) => {
  return (
    <div className="w-full flex flex-col font-bold gap-4">
      {title}
      <div className="max-w-[910px] h-[150px] overflow-hidden flex justify-between bg-white rounded-lg">
        <div className='arrow-button rounded-2xl px-3'>
          <SlArrowLeft/>
        </div>
        <div className='flex w-full h-full gap-1'>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square p-2'>
            <div className='h-full w-full'>
              <Image src={images[0]} alt="Imagen de prenda" width={90} height={90} className='h-full w-full object-cover'/>
            </div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square p-2'>
            <div className='h-full w-full'>
              <Image src={images[1]} alt="Imagen de prenda" width={90} height={90} className='h-full w-full object-cover'/>
            </div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square p-2'>
            <div className='h-full w-full'>
              <Image src={images[2]} alt="Imagen de prenda" width={90} height={90} className='h-full w-full object-cover'/>
            </div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square p-2'>
            <div className='h-full w-full'>
              <Image src={images[3]} alt="Imagen de prenda" width={90} height={90} className='h-full w-full object-cover'/>
            </div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square p-2'>
            <div className='h-full w-full'>
              <Image src={images[4]} alt="Imagen de prenda" width={90} height={90} className='h-full w-full object-cover'/>
            </div>
          </div>
          <VerticalSeparator percentage={100}/>
        </div>
        <div className='arrow-button rounded-lg px-3'>
          <SlArrowRight/>
        </div>
      </div>
    </div>
  )
}

export { Recommended }
