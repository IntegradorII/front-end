'use client'
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
        setOpenSignUpModal
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContextProvider }
