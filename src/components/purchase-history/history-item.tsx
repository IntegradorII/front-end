import Image from 'next/image'
import { VerticalSeparator } from '../common/vertical-separator'
import Link from 'next/link'

interface HistoryItemProps {
  imagePath: string
  productName: string
  purchaseDate: string
  price: string
  link: string
}

const HistoryItem = ({ imagePath, productName, purchaseDate, price, link }: (HistoryItemProps)) => {
  return (
    <div className='flex rounded-2xl bg-white h-[10rem] w-full'>
      <div className='flex items-center justify-center px-12 rounded-full'>
        <Link href={link}>
          <Image src={imagePath} alt="Foto de producto" width={90} height={90}/>
        </Link>
      </div>
      <VerticalSeparator percentage={100}/>
      <div className='flex flex-col justify-center gap-4 px-16'>
        <span className='font-bold text-lg'>{productName}</span>
        <div className='flex gap-1 text-light-text'>
          <span className='font-bold'>Fecha de compra:</span>
          <span>{purchaseDate}</span>
        </div>
        <div className='flex gap-1 text-light-text'>
          <span className='font-bold'>Precio:</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  )
}

export { HistoryItem }
