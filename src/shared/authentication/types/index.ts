export interface AuthRequest {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
}

export interface AuthUser {
  name: string
  email: string
  role: UserRoles
  exp: number
}

export enum UserRoles {
  Admin = 0,
}
