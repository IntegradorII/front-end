interface PercentageBarProps {
  percentage: number
}

const PercentageBar = ({ percentage }: PercentageBarProps) => {
  return (
    <div className="flex items-center border bg-medium-gray rounded-full w-full h-2">
      <div style={{ width: `${percentage}%` }} className="bg-yellow rounded-full h-2"></div>
    </div>
  )
}

export { PercentageBar }
