const Footer = () => {
  return (
    <footer className='w-full h-11 bg-dark-gray text-white text-sm flex items-center justify-between px-5 z-10 absolute'>
      <div>@CopyRight</div>
      <ul className='flex items-center sm:gap-1 md:gap-2 lg:gap-3 cursor-pointer'>
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
      </ul>
    </footer>
  )
}

export { Footer }
