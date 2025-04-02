import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

import userService from './user.service'
import { UsersData, UsersListQuery } from './user.types'

export function useUsers(query: UsersListQuery, page?: number) {
  const {
    refetch,
    data,
    isLoading: loadingUsers,
    isSuccess,
    isError,
  }: UseQueryResult<UsersData, Error> = useQuery({
    queryKey: ['users', query, page],
    queryFn: async () => userService.getUsers(query, page),

  })

  return {
    users: data?.users, // Evita erro se `data` for undefined
    pagination: data?.pagination,
    page,
    loadingUsers,
    refetch,
    isSuccess,
    isError,
  }
}

export function useUsersPagination() {
  const { refetch, data: paginationData } = useQuery({
    queryKey: ['paginationData'],
    queryFn: async () => userService.getUsersPagination(),
  })

  return { refetch, paginationData }
}

// export function useUserById(queryId?: string) {
//   const {
//     data: user,
//     isLoading: loadingUserId,
//     refetch,
//   } = useQuery({
//     queryKey: ['users', queryId], // Inclua o queryId no queryKey
//     enabled: !!queryId, // A query só será executada se queryId for válido
//     queryFn: async () => userService.getUser(queryId), // Certifique-se de que o serviço está recebendo o parâmetro correto
//   })

//   return { user, loadingUserId, refetch }
// }

export function useCreateUser() {
  const client = useQueryClient()

  const {
    mutateAsync: create,
    isPending: loading,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['users'] })
      console.warn('success')
    },
    onError: (error) => {
      console.error(error)
    },
  })

  return { create, loading, isSuccess, isError }
}

export function useDeleteUser() {
  const client = useQueryClient()

  const {
    mutateAsync: deleteUser,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: userService.deleteUser,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error) => {
      console.error(error)
    },
  })

  return { deleteUser, isSuccess, isError }
}
