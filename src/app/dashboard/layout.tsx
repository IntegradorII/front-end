import { SideBar } from '@/components/common/side-bar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <section className="w-full h-full flex items-start justify-center px-3">
      <SideBar />
      <main className="flex items-center justify-center gap-5 h-full w-full pb-6 px-5 border-l-[1px] border-separator-gray">
        {children}
      </main>
    </section>
  )
}
