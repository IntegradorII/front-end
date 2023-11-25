import { sleep } from '@/utils/utils'
import Link from 'next/link'

export default async function AboutPage () {
  await sleep(2000)
  return (
    <main className='min-h-screen w-full flex justify-center items-start py-5 px-3'>
      <div className='flex flex-col h-50 w-60 items-center gap-2 p-5 shadow-white-md'>
        <h1>About</h1>
        <p>This is the about page</p>
        <Link href='/'>Go to Home</Link>
      </div>
    </main>
  )
}
