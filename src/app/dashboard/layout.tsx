import { SideBar } from '@/components/common/side-bar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <section className='w-full h-full flex'>
      <SideBar />
      <main className='w-full ml-[28%] flex items-center justify-center h-full py-14 px-20'>
        {children}
      </main>
    </section>
  )
}
