import { SideBar } from '@/components/common/side-bar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <section className='w-full min-h-[calc(100vh-80px)]'>
      <SideBar />
      <section className='pl-[21rem] h-full'>
        <main className='w-full min-h-[calc(100vh-80px)] flex items-start py-10 px-16 border-l-separator-gray border-l-2'>
          {children}
        </main>
      </section>
    </section>
  )
}
