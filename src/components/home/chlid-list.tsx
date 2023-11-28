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
    birthDay: '19 de febrero'
  },
  {
    id: v4(),
    imagePath: '/images/child-avatar-2.png',
    rship: 'Ahijada',
    name: 'Juana',
    birthDay: '25 de diciembre'
  },
  {
    id: v4(),
    imagePath: '/images/child-avatar-3.png',
    rship: 'Sobrino',
    name: 'Luis',
    birthDay: '15 de agosto'
  },
  {
    id: v4(),
    imagePath: '/images/pet-avatar-1.png',
    rship: 'Perrhijo',
    name: 'Tom',
    birthDay: '22 de enero'
  },
  {
    id: v4(),
    imagePath: '/images/pet-avatar-2.png',
    rship: 'Gathija',
    name: 'Luna',
    birthDay: '03 de marzo'
  }
]

const ChlidList = () => {
  const [selectedChild, setSelectedChild] = useState(0)
  const { id, imagePath, rship, name, birthDay } = childs[selectedChild]

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
        <ChildCard id={id} imagePath={imagePath} rship={rship} name={name} birthDay={birthDay}/>
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
