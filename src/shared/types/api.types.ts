export interface ApiError<T> {
  name: string
  description: string
  fieldErrors: {
    [key in keyof T]?: string
  }
}

export interface ApiPagination {
  totalPages: number
  pageSize: number
  total: number
}

export interface ApiListResponse<T> {
  items: T[]
}

export interface ApiListQuery {
  search?: string
  maxPageSize?: number
  page?: number
  sortDirection?: ApiSortDirection
}

export enum ApiSortDirection {
  Asc,
  Desc,
}
