export interface ApiError<T> {
  name: string
  description: string
  fieldErrors: {
    [key in keyof T]?: string
  }
}

export interface ApiPagination {
  page: number
  pageSize: number
  sorting: [
    {
      field: string
      sortDirection: ApiSortDirection
    },
  ]
  total: number
  pageCount: number
  isFirstPage: boolean
  isLastPage: boolean
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
