import { api } from '@shared/authentication/services/apiAxios'

export default {
  async getUsers() {
    const res = await api.get('/User', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (!res.data) {
      return []
    } else {
      return res?.data.items
    }
  },
  // async getUser(id: string) {}
}
