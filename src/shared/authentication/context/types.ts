import { AuthUser } from '../types'

export type AuthContextType = {
  authenticated: boolean
  loading: boolean
  error: string | null
  user: AuthUser | null
  signIn?: (email: string, password: string) => Promise<void>
  signOut?: () => Promise<void>
  recovery?: (email: string) => Promise<void>
}
