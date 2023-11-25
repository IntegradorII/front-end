interface ButtonProps {
  text: string
}

const Button = ({ text }: (ButtonProps)) => {
  return (
    <div className='w-[200px] flex bg-yellow rounded-full py-3 font-bold items-center justify-center hover:cursor-pointer'>
      {text}
    </div>
  )
}

export { Button }
