import Image from 'next/image'
import { VerticalSeparator } from '../common/vertical-separator'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import Link from 'next/link'

export interface ChildCardInfo {
  id: string
  imagePath: string
  rship: string
  name: string
  birthDay: string
  path: string
}

const ChildCard = ({ imagePath, rship, name, birthDay, path }: (ChildCardInfo)) => {
  return (
    <Link href={path} className='flex bg-white rounded-xl py-3 w-[22rem]'>
      <div className='px-4'>
        <Image src={imagePath} alt='Foto de perfil' width={90} height={90} className='rounded-full'/>
      </div>
      <div className='w-fit'>
        <VerticalSeparator percentage={100}/>
      </div>
      <div className='flex flex-col items-center justify-center px-6 gap-4'>
        <div className='flex gap-1 text-xl font-bold'>
          <span>{rship}</span>
          <span>{name}</span>
        </div>
        <div className='flex gap-2'>
          <div className='text-yellow text-lg'>
            <LiaBirthdayCakeSolid/>
          </div>
          <span className='text-secondary-text text-sm font-bold'>{birthDay}</span>
        </div>
      </div>
    </Link>
  )
}

export { ChildCard }
