import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 3600 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})
