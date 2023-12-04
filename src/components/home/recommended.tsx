'use client'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { VerticalSeparator } from '@/components/common/vertical-separator'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

interface ImageInfo {
  id: string
  src: string
  alt: string
  link: string
}

interface SuggestedProps {
  title: string
  images: ImageInfo[]
}

const imagesToShow = 5

const Recommended = ({ title, images }: (SuggestedProps)) => {
  const [myImages] = useState(images)
  const [from, setFrom] = useState(0)

  const handleLeft = () => {
    if (imagesToShow >= images.length) return
    if (from > 0) {
      setFrom(from - 1)
    } else {
      setFrom(images.length - imagesToShow)
    }
  }

  const handleRight = () => {
    if (imagesToShow >= images.length) return
    if (from < images.length - 1) {
      setFrom(from + 1)
    } else {
      setFrom(0)
    }
  }
  let to = Math.min(from + imagesToShow, images.length)
  let imagesToShowArray = myImages.slice(from, from + imagesToShow)
  const l = imagesToShowArray.length
  if (l < imagesToShow) {
    to = Math.min(imagesToShow - l, from)
    imagesToShowArray = [...imagesToShowArray, ...myImages.slice(0, to)]
  }

  return (
    <div className='w-full flex flex-col font-bold gap-4'>
      {title}
      <div className='max-w-[910px] h-[150px] overflow-hidden flex justify-between bg-white rounded-lg'>
        <button onClick={handleLeft} className='arrow-button rounded-2xl px-3'>
          <SlArrowLeft/>
        </button>
        <ul className='flex w-full h-full gap-1'>
          {imagesToShowArray.map((image, index) => (
            <li key={image.id} className='h-full flex'>
              <VerticalSeparator percentage={100}/>
              <div className='h-full aspect-square p-2 hover:cursor-pointer'>
                <Link href={image.link} target='_blank'>
                  <Image src={image.src} alt='Imagen de prenda' width={90} height={90} className='h-full w-full object-cover'/>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <VerticalSeparator percentage={100}/>
        <button onClick={handleRight} className='arrow-button rounded-lg px-3'>
          <SlArrowRight/>
        </button>
      </div>
    </div>
  )
}

export { Recommended }
