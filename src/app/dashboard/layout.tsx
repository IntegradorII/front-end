import { SideBar } from '@/components/common/side-bar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full h-full flex items-start justify-center bg-[#EDEDED] pb-5 pl-2">
      <SideBar />
      <main className="flex h-full w-[77%] max-w-[60rem] overflow-hidden items-center justify-center gap-5">
        {children}
      </main>
    </section>
  )
}
