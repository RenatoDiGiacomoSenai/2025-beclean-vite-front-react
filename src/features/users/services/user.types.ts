import { ApiListQuery, ApiListResponse } from '@shared/types'

export interface UserTypes {
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
  password?: string
  type: UserRoles
}

export enum UserRoles {
  ADMIN = 'ADMIN',
  CONSUMER = 'CONSUMER',
}

export type UserListResponse = ApiListResponse<UserItem>

export type UserItem = Pick<UserTypes, 'id' | 'name' | 'email'>

export type AnalysisListQuery = Partial<Pick<UserTypes, 'id' | 'name'>> &
  ApiListQuery
