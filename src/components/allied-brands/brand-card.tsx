import Image from 'next/image'

export interface BrandCardProps {
  imagePath: string
  name: string
  url: string
}

const BrandCard = ({ imagePath, name, url }: (BrandCardProps)) => {
  return (
    <div className='flex flex-col bg-white rounded-2xl hover:cursor-pointer max-w-full w-[215px] aspect-[16/4] items-center justify-between'>
      <Image src={imagePath} alt="Logo de marca aliada" width={188} height={188} className='rounded-2xl m-3'/>
      <div className='bg-yellow h-full w-full rounded-bl-2xl rounded-br-2xl flex items-center justify-center'>
        <span className='font-bold' style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}>
          {name}
        </span>
      </div>
    </div>
  )
}

export { BrandCard }
