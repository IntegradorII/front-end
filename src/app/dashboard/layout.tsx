import { SideBar } from '@/components/common/side-bar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <section className='w-full h-full flex'>
      <SideBar />
      <main className='ml-[22rem] w-full min-h-[calc(100vh-7.75rem)] flex items-start h-full py-10 px-20'>
        {children}
      </main>
    </section>
  )
}
