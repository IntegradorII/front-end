import { LoginModal } from '@/components/Modals/LoginModal'
import Image from 'next/image'
export default function App () {
  return (
    <main className="flex flex-col items-center gap-5 p-2 h-screen relative">
      <Image src='/images/Background.png' alt='background' fill={true}/>

      <LoginModal/>
    </main>
  )
}
