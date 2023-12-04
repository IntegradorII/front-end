import { NavBar } from '@/components/common/nav-bar'

export function Header () {
  return (
    <header style={{
      gridArea: 'header',
      zIndex: 10
    }} className='w-full h-[80px] flex items-center justify-center p-3 bg-dark-gray text-yellow fixed top-0'>
      <NavBar />
    </header>
  )
}
