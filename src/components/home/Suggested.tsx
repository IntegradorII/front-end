import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { VerticalSeparator } from '@/components/common/vertical-separator'

interface SuggestedProps {
  title: string
}

const Suggested = ({ title }: (SuggestedProps)) => {
  return (
    <div className="w-full flex flex-col font-bold gap-4">
      {title}
      <div className="max-w-full overflow-hidden h-[9.5rem] flex justify-between bg-white rounded-lg">
        <div className='arrow-button rounded-2xl px-3'>
          <SlArrowLeft/>
        </div>
        <div className='flex w-full h-full gap-1 overflow-x-auto'>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square'>
            <div className='h-full w-full bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square'>
            <div className='h-full w-full bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square'>
            <div className='h-full w-full bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square'>
            <div className='h-full w-full bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-full aspect-square'>
            <div className='h-full w-full bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
        </div>
        <div className='arrow-button rounded-lg px-3'>
          <SlArrowRight/>
        </div>
      </div>
    </div>
  )
}

export { Suggested }
