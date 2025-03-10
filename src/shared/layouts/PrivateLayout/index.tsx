import { useEffect, useState } from 'react'
import { createRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import { useAuth } from '@shared/authentication/context'
import Header from '@shared/components/Header'

function PrivateLayout() {
  const [opened, setOpened] = useState(false)
  const { authenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!authenticated) {
      navigate({ to: '/' })
    }
  }, [authenticated])

  return (
    <div className="h-full flex bg-gray-100">
      <div className="flex-1">
        <Header toggle={() => setOpened(!opened)} />
        <main className='bg-white m-8 p-4 h-5/6 rounded-lg'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export const PrivateRoutes = createRoute({
  id: '_private-layout',
  getParentRoute: () => rootRoute,
  component: PrivateLayout,
})
