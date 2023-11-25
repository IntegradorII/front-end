import { Button } from '@/components/common/add-button'
import type { IconType } from 'react-icons'

interface AddProfileProps {
  text: string
  Icon: IconType
}

const AddProfile = ({ text, Icon }: (AddProfileProps)) => {
  return (
    <div className='flex items-center text-dark-gray gap-6'>
      <div className='text-4xl'>
        <Icon></Icon>
      </div>
      <Button text={text}/>
    </div>
  )
}

export { AddProfile }
