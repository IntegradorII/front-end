'use client'
import { type Session } from 'next-auth'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
  useState
} from 'react'

interface LoginContextProps {
  openModalLogin: boolean
  setOpenModalLogin: Dispatch<SetStateAction<boolean>>
  openModalPassword: boolean
  setOpenModalPassword: Dispatch<SetStateAction<boolean>>
  openIdSignUpModal: boolean
  setOpenIdSignUpModal: Dispatch<SetStateAction<boolean>>
  openSignUpModal: boolean
  setOpenSignUpModal: Dispatch<SetStateAction<boolean>>
  dataSession: { session: Session | null, status: 'authenticated' | 'loading' | 'unauthenticated' }
  handleLogin: (data: LoginData) => void
  handleLogout: () => void
}

const LoginContext = createContext<LoginContextProps>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as LoginContextProps
)

export const useLoginContext = () => useContext(LoginContext)

interface LoginContextProviderProps {
  children: JSX.Element
}

interface LoginData {
  email: string
  password: string
}

const LoginContextProvider = ({
  children
}: LoginContextProviderProps) => {
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false)
  const [openModalPassword, setOpenModalPassword] = useState<boolean>(false)
  const [openIdSignUpModal, setOpenIdSignUpModal] = useState<boolean>(false)
  const [openSignUpModal, setOpenSignUpModal] = useState<boolean>(false)
  const { data: session, status } = useSession()
  const dataSession = { session, status }
  const handleLogin = (data: LoginData) => {
    signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password
    }).then((res) => {
      console.log('login', res)
      console.log(res?.error)
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      // router.push('/dashboard')
      // setOpenModalLogin(false)
    }).catch((err) => {
      console.error(err)
    })
  }
  const handleLogout = () => {
    signOut({ redirect: true, callbackUrl: '/' }).catch((err) => {
      console.error(err)
    })
  }
  return (
    <LoginContext.Provider
      value={{
        openModalLogin,
        setOpenModalLogin,
        openModalPassword,
        setOpenModalPassword,
        openIdSignUpModal,
        setOpenIdSignUpModal,
        openSignUpModal,
        setOpenSignUpModal,
        dataSession,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContextProvider }
