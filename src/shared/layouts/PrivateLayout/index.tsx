import { useEffect, useState } from 'react'
import { createRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import { useAuth } from '@shared/authentication/context'
import Menu from '@shared/components/Menu'
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
    <div className="h-full flex">
      <Menu opened={opened} toggle={() => setOpened(!opened)} />
      <div className="flex-1">
        <Header toggle={() => setOpened(!opened)} />
        <main>
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
