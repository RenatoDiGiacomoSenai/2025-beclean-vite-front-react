import { AuthUser, UserRoles } from '../types'

import { api } from './apiAxios'

export default {
  async login(email: string, password: string): Promise<void> {
    // if (email !== 'admin@email.com' || password !== 'senai@134') {
    //   throw new Error('Usuário ou senha inválidos')
    // }
    const authUser = await api.post<AuthUser>('/auth', { email, password });


    console.log(authUser)
    console.log(authUser.status)
    // const resp: AxiosResponse<AuthUser> = authUser
    // console.log(resp.data)
    // localStorage.setItem('token', authUser.data.token)


    /*
      admin@beclean.com
      Admin@123
    */

    // localStorage.setItem('isAuthenticated', 'true')
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
