'use client'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { ChildCard } from './child-card'
import { ProfilesBar } from './profiles-bar'
import { type ChildCardInfo } from '@/components/home/child-card'
import { useState } from 'react'
import { v4 } from 'uuid'

const childs: ChildCardInfo[] = [
  {
    id: v4(),
    imagePath: '/images/child-avatar-1.png',
    rship: 'Hijo',
    name: 'Pepito',
    birthDate: '19 de febrero',
    path: '/dashboard/profile/ax1'
  },
  {
    id: v4(),
    imagePath: '/images/child-avatar-2.png',
    rship: 'Hija',
    name: 'Juana',
    birthDate: '15 de agosto',
    path: '/dashboard/profile/ax2'
  },
  {
    id: v4(),
    imagePath: '/images/child-avatar-3.png',
    rship: 'Sobrino',
    name: 'Luis',
    birthDate: '25 de diciembre',
    path: '/dashboard/profile/ax3'
  },
  {
    id: v4(),
    imagePath: '/images/pet-avatar-1.png',
    rship: 'Perrhijo',
    name: 'Tom',
    birthDate: '22 de enero',
    path: '/dashboard/profile/bx1'
  },
  {
    id: v4(),
    imagePath: '/images/pet-avatar-2.png',
    rship: 'Gathija',
    name: 'Luna',
    birthDate: '03 de marzo',
    path: '/dashboard/profile/bx2'
  }
]

const ChlidList = () => {
  const [selectedChild, setSelectedChild] = useState(0)
  const { id, imagePath, rship, name, birthDate, path } = childs[selectedChild]

  const handleLeftArrowClick = () => {
    if (selectedChild === 0) {
      setSelectedChild(childs.length - 1)
    } else {
      setSelectedChild(selectedChild - 1)
    }
  }

  const handleRightArrowClick = () => {
    if (selectedChild === childs.length - 1) {
      setSelectedChild(0)
    } else {
      setSelectedChild(selectedChild + 1)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex items-center justify-center gap-8'>
        <button onClick={handleLeftArrowClick}
          className='arrow-button rounded-full p-3'>
          <SlArrowLeft/>
        </button>
        <ChildCard id={id} imagePath={imagePath} rship={rship} name={name} birthDate={birthDate} path={path}/>
        <button onClick={handleRightArrowClick}
          className='arrow-button rounded-full p-3'>
          <SlArrowRight/>
        </button>
      </div>
      <ProfilesBar selected={selectedChild} length={childs.length}/>
    </div>
  )
}

export { ChlidList }
