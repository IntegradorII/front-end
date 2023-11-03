import { SideBar } from '@/components/common/side-bar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <section className="w-full h-full flex px-3">
      <SideBar />
      <main className="w-[75%] ml-[25%] flex items-center justify-center h-full py-10 px-7">
        {children}
      </main>
    </section>
  )
}
