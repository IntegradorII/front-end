'use client'
import { type Session } from 'next-auth'
import { useSession } from 'next-auth/react'
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
}

const LoginContext = createContext<LoginContextProps>(
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  {} as LoginContextProps
)

export const useLoginContext = () => useContext(LoginContext)

interface LoginContextProviderProps {
  children: JSX.Element
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
        dataSession
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContextProvider }
