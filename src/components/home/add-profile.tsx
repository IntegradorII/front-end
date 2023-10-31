import { GrAddCircle } from 'react-icons/gr'
import { Button } from '../common/button'

interface AddProfileProps {
  text: string
}

const AddProfile = ({ text }: (AddProfileProps)) => {
  return (
    <div className='flex items-center text-dark-gray gap-6'>
      <div className='text-4xl'>
        <GrAddCircle/>
      </div>
      <Button text={text}/>
    </div>
  )
}

export { AddProfile }
