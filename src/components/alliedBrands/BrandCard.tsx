import Image from 'next/image'

interface BrandCardProps {
  imagePath: string
  brandName: string
  url: string
}

const BrandCard = ({ imagePath, brandName, url }: (BrandCardProps)) => {
  return (
    <div className='flex flex-col bg-white rounded-2xl hover:cursor-pointer h-[250px] w-[215px] items-center justify-between'>
      <Image src={imagePath} alt="Logo de marca aliada" width={188} height={188} className='rounded-2xl m-3'/>
      <div className='bg-yellow h-full w-full rounded-bl-2xl rounded-br-2xl flex items-center justify-center'>
        <span className='font-bold'>
          {brandName}
        </span>
      </div>
    </div>
  )
}

export { BrandCard }
