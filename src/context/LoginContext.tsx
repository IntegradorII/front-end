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
  return (
    <LoginContext.Provider
      value={{
        openModalLogin,
        setOpenModalLogin
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContextProvider }
