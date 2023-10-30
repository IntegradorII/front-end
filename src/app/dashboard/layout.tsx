export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex w-full gap-2 p-1 bg-[#EDEDED] min-h-[calc(100vh-6.75rem)]">
      <aside className="flex flex-col items-center gap-5 p-2 w-1/5">
        <h1 className="text-3x">Welcome to OFFCORS</h1>
        <p className="text-2x">The best way to manage your projects</p>
      </aside>
      <main className="flex flex-col items-center gap-5 p-2 w-4/5">
        {children}
      </main>
    </section>
  )
}
