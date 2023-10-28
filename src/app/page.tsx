import Link from 'next/link'
import { CustomButton } from '@/components/custom-buttom'

export default function Home () {
  return (
    <main className="flex flex-col h-screen items-center p-24">
      <h1 className="text-3xl">Hello world!</h1>
      <Link href="/about">Go to About</Link>
      <CustomButton>custom button</CustomButton>
    </main>
  )
}
