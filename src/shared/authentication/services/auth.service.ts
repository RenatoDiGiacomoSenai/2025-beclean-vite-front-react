import { AxiosResponse } from 'axios'

import { AuthUser, UserRoles } from '../types'

import { api } from './apiAxios'

export default {
  async login(email: string, password: string): Promise<void | string> {
    try {
      const authUser = await api.post<AuthUser>('/Auth', { email, password })
      const resp: AxiosResponse<AuthUser> = authUser

      if (resp.status !== 200) {
        throw new Error('Usuário ou senha inválidos')
      }

      if (!resp.data || !resp.data.token) {
        throw new Error('Usuário ou senha incorretos')
      }

      localStorage.setItem('token', resp.data.token)
      localStorage.setItem('isAuthenticated', 'true')

      return resp.data.token
    } catch (error) {
      console.error('Error during login request:', error) // Log any errors
      throw new Error('Usuário ou senha inválidos')
    }
  },

  async logout(): Promise<void> {
    localStorage.clear()
  },

  async isAuthenticated(): Promise<boolean> {
    return localStorage.getItem('isAuthenticated') === 'true'
  },

  async recovery(email: string): Promise<void> {
    return await api.post('/User/requestResetPassword', { email })
  },

  async receiveToken(token: string): Promise<void> {
    await api.post('/User/validTokenPassword', { token })
  },

  async getUser(): Promise<AuthUser> {
    return {
      name: 'Admin',
      email: 'admin@email.com',
      role: UserRoles.Admin,
      exp: Date.now() + 1000 * 60 * 60 * 24,
    }
  },
}
