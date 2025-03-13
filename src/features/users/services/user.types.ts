import { ApiListQuery, ApiListResponse } from '@shared/types'

export interface UserTypes {
  id: string
  name: string
  email: string
  type: UserRoles
  createdAt: string
  modifiedAt: string
  deletedAt?: string | null
}

export enum UserRoles {
  admin,
}

export type UserListResponse = ApiListResponse<UserItem>

export type UserItem = Pick<UserTypes, 'id' | 'name' | 'email'>

export type AnalysisListQuery = Partial<Pick<UserTypes, 'id' | 'name'>> &
  ApiListQuery
