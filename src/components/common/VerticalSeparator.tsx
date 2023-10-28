interface VerticalSeparatorProps {
  percentage: number
}

const VerticalSeparator = ({ percentage }: VerticalSeparatorProps) => {
  return (
    <div style={{ height: `${percentage}%` }} className="w-[1px] bg-separator-gray"></div>
  )
}

export { VerticalSeparator }
