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
  token?: string
}

export enum UserRoles {
  Admin = 0, /* Backoffice */
  Operator = 1, /* don't use yet */
  Consumer = 2, /* Mobile */
}




