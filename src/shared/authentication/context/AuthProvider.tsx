import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { router } from '@settings/tanstack-router'
import { usePromise } from '@shared/hooks'

import { AuthUser } from '../types'
import authService from '../services/auth.service'

import { AuthContextType } from './types'

const { VITE_HOME_PAGE } = import.meta.env

export const authContextInitialState: AuthContextType = {
  authenticated: false,
  loading: false,
  error: null,
  user: null,
}

export const AuthContext = createContext<AuthContextType>(
  authContextInitialState,
)

export function AuthProvider({ children }: { readonly children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<AuthUser | null>(null)
  const { handle, error, loading } = usePromise()

  const signIn = async (email: string, password: string) => {
    await handle(async () => {
      await authService.login(email, password)
      setAuthenticated(true)
      router.navigate({ to: VITE_HOME_PAGE })
    })
  }

  const signOut = async () => {
    await handle(async () => {
      await authService.logout()
      setAuthenticated(false)
      router.navigate({ to: '/' })
    })
  }

  const recovery = async (email: string) => {
    await handle(() => authService.recovery(email))
  }

  const value = useMemo(
    () => ({
      ...authContextInitialState,
      authenticated,
      error,
      loading,
      user,
      signIn,
      signOut,
      recovery,
    }),
    [authenticated, error, loading, user],
  )

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await authService.isAuthenticated()
      const user = await authService.getUser()

      setAuthenticated(isAuthenticated)
      setUser(user)
    }

    checkAuth()

    return () => {
      setAuthenticated(false)
      setUser(null)
    }
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
