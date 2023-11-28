import { NavBar } from '@/components/common/nav-bar'

export function Header () {
  return (
    <header style={{
      gridArea: 'header',
      zIndex: 1000
    }} className='w-full h-[80px] flex items-center justify-between px-8 py-3 bg-dark-gray text-yellow fixed top-0'>
      <NavBar />
    </header>
  )
}
