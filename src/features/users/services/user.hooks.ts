import { useQuery } from '@tanstack/react-query'

import userService from './user.service'
import { UserTypes } from './user.types'

export function useUsers(query?: UserTypes) {
  const {
    data: users,
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['users', query],
    queryFn: async () => userService.getUsers(),
  })

  return { users, loading, refetch }
}
