import { AuthUser, UserRoles } from '../types'

export default {
  async login(email: string, password: string): Promise<void> {
    if (email !== 'admin@email.com' || password !== 'senai@134') {
      throw new Error('Usuário ou senha inválidos')
    }

    localStorage.setItem('isAuthenticated', 'true')
  },

  async logout(): Promise<void> {
    localStorage.removeItem('isAuthenticated')
  },

  async isAuthenticated(): Promise<boolean> {
    return localStorage.getItem('isAuthenticated') === 'true'
  },

  async recovery(email: string): Promise<void> {
    if (email !== 'admin@email.com') {
      throw new Error('Email não encontrado')
    }
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
