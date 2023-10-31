interface VerticalSeparatorProps {
  percentage: number
}

const VerticalSeparator = ({ percentage }: VerticalSeparatorProps) => {
  return (
    <div style={{ height: `${percentage}%` }} className="w-[2px] bg-separator-gray" />
  )
}

export { VerticalSeparator }
