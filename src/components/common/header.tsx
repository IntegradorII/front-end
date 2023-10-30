import { ButtonAuth } from '@/components/common/button-auth'

export function Header () {
  return (
    <header className="w-full flex items-center justify-between gap-5 px-8 py-3 bg-[#1D1D1E] text-[#FFDD00]">
      <h1 className="text-3x">OFFCORS</h1>
      <ButtonAuth />
    </header>
  )
}
