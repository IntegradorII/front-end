import { SideBar } from '@/components/common/side-bar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <section className='w-full min-h-[calc(100vh-80px)]'>
      <SideBar />
      <section className='pl-[22rem]'>
        <main className='w-full h-full flex items-start py-10 px-20 border-l-separator-gray border-l-2'>
          {children}
        </main>
      </section>
    </section>
  )
}
