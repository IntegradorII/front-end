import Image from 'next/image'
import { VerticalSeparator } from '../common/VerticalSeparator'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'

interface ChildCardProps {
  imagePath: string
  rship: string
  name: string
  birthDay: string
}

const ChildCard = ({ imagePath, rship, name, birthDay }: (ChildCardProps)) => {
  return (
    <div className="flex bg-white rounded-xl w-fit py-3 hover:cursor-pointer">
      <div className='px-6 rounded-full'>
        <Image src={imagePath} alt="Foto de perfil" width={90} height={90}/>
      </div>
      <div className='w-fit'>
        <VerticalSeparator percentage={100}/>
      </div>
      <div className='flex flex-col items-center justify-center px-10 gap-4'>
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
    </div>
  )
}

export { ChildCard }
