import { RouterProvider } from '@tanstack/react-router'
import { AuthProvider } from '@shared/authentication/context'
import { router } from '@settings/tanstack-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@settings/react-query'
import ToastProvider from '@shared/context/ToastProvider'

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
