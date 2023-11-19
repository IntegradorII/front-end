import { ForgotPasswordModal } from '@/components/Modals/ForgotPasswordModal'
import { IdSignUpModal } from '@/components/Modals/IdSignUpModal'
import { LoginModal } from '@/components/Modals/LoginModal'
import { SignUpModal } from '@/components/Modals/SingUpModal'

export default function App() {
  return (
    <main
      style={{
        backgroundImage: 'url("/images/bg1.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex flex-col items-center gap-5 p-2 h-screen"
    >
      <LoginModal />
      <ForgotPasswordModal />
      <IdSignUpModal />
      <SignUpModal />
    </main>
  );
}
