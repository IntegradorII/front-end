import { SideBar } from '@/components/common/side-bar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full h-full flex items-start justify-center bg-[#EDEDED] pl-2">
      <SideBar />
      <main className="flex items-center justify-center gap-5 h-full w-[77%] max-w-[60rem] pb-6 border-l-[1px] border-separator-gray">
        {children}
      </main>
    </section>
  )
}
