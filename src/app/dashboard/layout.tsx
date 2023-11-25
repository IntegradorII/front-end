import { SideBar } from '@/components/common/side-bar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <section className='w-full h-full flex'>
      <SideBar />
      <main className='w-full min-h-[calc(100vh-7.75rem)] ml-[28%] flex h-full py-10 px-20'>
        {children}
      </main>
    </section>
  )
}
