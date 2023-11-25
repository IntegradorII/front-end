interface HorizontalSeparatorProps {
  percentage: number
}

const HorizontalSeparator = ({ percentage }: HorizontalSeparatorProps) => {
  return (
    <div className='w-full flex justify-center'>
      <div style={{ width: `${percentage}%` }} className='h-[1px] bg-separator-gray'></div>
    </div>
  )
}

export { HorizontalSeparator }
