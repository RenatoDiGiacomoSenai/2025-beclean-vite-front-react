import { ApiListQuery, ApiListResponse } from '@shared/types'

export interface UsersData {
  users: UserTypes
  pagination: {
    page: number
    pageSize: number
    total: number
    pageCount: number
  }
}

export type UserTypes = {
  id: string
  name: string
  email: string
  type: UserRoles
  avatar?: string | null
  avatar_url?: string | null
  createdAt: string
  modifiedAt: string
  deletedAt: null
}

export interface UserDataProps {
  name: string
  email: string
  type: UserRoles.ADMIN
  role: UserRoles.OPERATOR
}

export enum UserRoles {
  ADMIN = 'ADMIN',
  CONSUMER = 'CONSUMER',
  OPERATOR = 'OPERATOR',
}

export type UserItem = Pick<UserTypes, 'id' | 'name' | 'email'>

export type UserListResponse = ApiListResponse<UserItem>

export type UsersListQuery = Partial<Pick<UserTypes, 'name'>> & ApiListQuery
