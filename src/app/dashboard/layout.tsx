import { SideBar } from '@/components/common/side-bar'
import { ClientWrapper } from '@/components/common/client-wrapper'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <section className='w-full max-w-[1900px] mx-auto min-h-[calc(100vh-80px)]'>
      <ClientWrapper>
        <SideBar />
        <section className='pl-[21rem] h-full'>
          <main className='w-full min-h-[calc(100vh-80px)] flex items-start py-10 pl-12 pr-8 border-l-separator-gray border-l-2'>
            {children}
          </main>
        </section>
      </ClientWrapper>
    </section>
  )
}
