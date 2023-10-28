import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { VerticalSeparator } from '../common/VerticalSeparator'

interface SuggestedProps {
  title: string
}

const Suggested = ({ title }: (SuggestedProps)) => {
  return (
    <div className="flex flex-col font-bold gap-4">
      {title}
      <div className="w-full h-[100px] flex justify-between bg-white rounded-lg">
        <div className='arrow-button rounded-lg mx-2 gap-2'>
          <SlArrowLeft/>
          <VerticalSeparator percentage={100}/>
        </div>
        <span>Prenda 1</span>
        <div className='arrow-button rounded-lg mx-2 gap-2'>
          <VerticalSeparator percentage={100}/>
          <SlArrowRight/>
        </div>
      </div>
    </div>
  )
}

export { Suggested }
