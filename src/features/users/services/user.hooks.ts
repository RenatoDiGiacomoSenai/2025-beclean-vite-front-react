import { useQuery } from '@tanstack/react-query'

import userService from './user.service'
import { UsersListQuery, UserTypes } from './user.types'

export function useUsers(query?: UserTypes) {
  const {
    data: users,
    isLoading: loadingUsers,
    refetch,
  } = useQuery({
    queryKey: ['users', query],
    queryFn: async () => userService.getUsers(query),
  })

  return { users, loadingUsers, refetch }
}

export function useUserById(queryId: UsersListQuery) {
  const {
    data: user,
    isLoading: loadingUserId,
    refetch,
  } = useQuery({
    queryKey: ['users', queryId],
    enabled: !!queryId,
    queryFn: async () => userService.getUser(queryId),
  })

  return { user, loadingUserId, refetch }
}
