import { api } from '@shared/authentication/services/apiAxios'

import { UsersListQuery, UserTypes } from './user.types'

export default {
  // ! Listar Usuários
  async getUsers(query?: UsersListQuery) {
    const res = await api.get('/User')

    // Filtrar os usuários com base no parâmetro `query`
    const filteredUsers = query
      ? res.data.items.filter((user: UserTypes) =>
          user.name
            .toLocaleLowerCase()
            .includes(query),
        )
      : res.data.items

      console.warn('res', res.data.items)
      console.warn('filteredUsers', filteredUsers)

    return filteredUsers
  },
  // ! Ver Usuário
  async getUser(id?: UserTypes['id']) {
    const res = await api.get(`/User/${id}`)
    console.warn('res', res.data)

    return res.data
  },

  // // ! Criar Usuário
  // async createUser(data: any) {
  //   const getData = await api.get('/User')

  //   console.warn(getData.data.items)

  //   const userExists = getData.data.items.some(
  //     (user: UserTypes) => user.email === data.email,
  //   )

  //   try {
  //     if (!userExists) {
  //       showToast({
  //         title: 'Usuário Criado',
  //         message: 'O usuário foi criado com sucesso',
  //         type: 'success',
  //       })

  //       await api.post('/User/me', data)
  //     } else {
  //       alert('Usuário com o mesmo nome ou e-mail já existe')
  //       showToast({
  //         title: 'Usuário Já existe',
  //         message: 'Usuário com o mesmo nome ou e-mail já existe',
  //         type: 'error',
  //       })
  //       throw new Error('User with the same name or email already exists')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     throw new Error(`Something went wrong ${error}`)
  //   }
  // },

  // ! Atualizar Usuário
  async updateUser(id: string, data: any) {
    try {
      const res = await api.put(`/User/${id}`, data)

      return res.data
    } catch (error) {
      throw new Error(`Something went wrong ${error}`)
    }
  },

  // // ! Deletar Usuário
  // async deleteUser(id: string) {
  //   try {
  //     const res = await api.delete(`/User/${id}`)

  //     return res.data
  //   } catch (error) {
  //     throw new Error(`Something went wrong ${error}`)
  //   }
  // },
}
