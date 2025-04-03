import { api } from '@shared/authentication/services/apiAxios'

import { UserDataProps, UserItem, UsersListQuery, UserTypes } from './user.types'

export default {
  // ! Listar Usuários
  async getUsers(query: UsersListQuery, page: number = 1) {
    const res = await api.get(`/User?page=${page}&pageSize=10`)

    const filteredUsers = res.data.items.filter((user: UsersListQuery) => {
      const name = user?.name?.toLowerCase()
      const queryName = query.name?.toLowerCase()

      if (!queryName) {
        return user
      }

      return name?.includes(queryName)
    })

    return {
      users: filteredUsers,
      pagination: res.data.pagination, // Retorna a paginação junto
    }
  },

  // ! Listar Usuários
  async getUsersPagination() {
    const pageSize = 10
    const res = await api.get(`/User?pageSize=${pageSize}`)
    console.warn('res', res.data.pagination)

    return res.data.pagination
  },
  // ! Ver Usuário
  async getUser(id: UserTypes['id']) {
    return await api.get(`/User/${id}`)
  },

  // ! Criar Usuário
  async createUser(data?: UserDataProps) {
    return await api.post('/User/me', data)
  },

  // ! Atualizar Usuário
  async updateUser(data: UserItem) {
    return await api.put(`/User/${data.id}`, {name: data.name, password: data.password})
  },

  // ! Deletar Usuário
  async deleteUser(id: string) {
    return await api.delete(`/User/${id}`)
  },
}
