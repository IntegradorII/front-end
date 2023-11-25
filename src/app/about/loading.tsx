export default function Loading () {
  return (
    <main className='min-h-screen w-full flex justify-center items-start py-5 px-3'>
      <div className='flex flex-col h-50 w-60 items-center gap-2 p-5 shadow-white-md'>
        <span className='animate-pulse h-10 w-full bg-[#FFFFFFdd]' />
        <span className='animate-pulse h-10 w-full bg-[#FFFFFFdd]' />
        <span className='animate-pulse h-10 w-full bg-[#FFFFFFdd]' />
      </div>
    </main>
  )
}
