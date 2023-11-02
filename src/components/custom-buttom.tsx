interface CustomButtonProps {
  // onClick: () => void
  children: React.ReactNode
}

export function CustomButton ({ children }: CustomButtonProps) {
  return (
    <button className="rounded-sm bg-blue-800 text-white px-3 py-4">
      {children}
    </button>
  )
}
