import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { VerticalSeparator } from '../common/VerticalSeparator'

interface SuggestedProps {
  title: string
}

const Suggested = ({ title }: (SuggestedProps)) => {
  return (
    <div className="flex flex-col font-bold gap-4">
      {title}
      <div className="w-full h-[171px] flex justify-between bg-white rounded-lg scrollbar-hide">
        <div className='arrow-button rounded-2xl px-5'>
          <SlArrowLeft/>
        </div>
        <VerticalSeparator percentage={100}/>
        <div className='flex w-full'>
          <div className='h-[171px] w-[171px] flex justify-center items-center'>
            <div className='h-[146px] w-[146px] bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-[171px] w-[171px] flex justify-center items-center'>
            <div className='h-[146px] w-[146px] bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-[171px] w-[171px] flex justify-center items-center'>
            <div className='h-[146px] w-[146px] bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-[171px] w-[171px] flex justify-center items-center'>
            <div className='h-[146px] w-[146px] bg-teal-200'></div>
          </div>
          <VerticalSeparator percentage={100}/>
          <div className='h-[171px] w-[171px] flex justify-center items-center'>
            <div className='h-[146px] w-[146px] bg-teal-200'></div>
          </div>
        </div>
        <VerticalSeparator percentage={100}/>
        <div className='arrow-button rounded-lg px-5'>
          <SlArrowRight/>
        </div>
      </div>
    </div>
  )
}

export { Suggested }
