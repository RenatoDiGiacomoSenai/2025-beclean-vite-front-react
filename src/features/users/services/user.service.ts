import { api } from '@shared/authentication/services/apiAxios'
import { ToastProps } from '@istic-ui/react'
import { AxiosError } from 'axios'

import { UserDataProps } from './user.types'


//teste2@teste.com
export default {
  // ! Listar Usuário
  async getUsers() {
    const res = await api.get('/User')

    if (!res.data) {
      return []
    } else {
      return res?.data.items
    }
  },
  // ! Criar Usuário
  async createUser(
    data: UserDataProps,
    showToast: (options: ToastProps) => void,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    try {
await api.post('/User/me', data)

      showToast({
        title: 'Usuário criado com sucesso',
        type: 'success',
        durationInMs: 10000,
      })
      setModal(false)
      window.location.reload()
    } catch (error) {

      if ((error as AxiosError).response?.status === 400) {
        showToast({
          title: 'Usuário já cadastrado',
          message: 'O e-mail informado está cadastrado ou já foi cadastrado no sistema',
          type: 'error', 
          durationInMs: 10000,
        })
      }
      
      throw new Error(`Something went wrong ${error}`)
    }
  },

  // ! Atualizar Usuário
  async updateUser(id: string, data: any) {
    try {
      const res = await api.put(`/User/${id}`, data)

      return res.data
    } catch (error) {
      throw new Error(`Something went wrong ${error}`)
    }
  },

  // ! Deletar Usuário
  async DeleteUser(id: string) {
    try {
      const res = await api.delete(`/User/${id}`)
      window.location.reload()

      return res.data
    } catch (error) {
      throw new Error(`Something went wrong ${error}`)
    }
  },
}
