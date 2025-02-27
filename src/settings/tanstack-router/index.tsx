import { RiOpenArmLine } from 'react-icons/ri'
import { MenuItemProps } from '@shared/components/MenuItem'
import {
  createRootRoute,
  createRouter,
  Link,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { PrivateRoutes, PublicRoutes } from '@shared/layouts'
import {
  ForgetRoute,
  LoginRoute,
  PrivacyRoute,
} from '@shared/authentication/pages'
import {
  CreateExercisesRoute,
  EditExercisesRoute,
  ListExercisesRoute,
} from '@features/exercises/pages'
import { ListUsersRoute } from '@features/users/pages'
import { TokenInsertRoute } from '@shared/authentication/components/ForgetForm'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => (
    <div>
      <p>This is the notFoundComponent configured on root route</p>
      <Link to="/">Start Over</Link>
    </div>
  ),
})

const routeTree = rootRoute.addChildren([
  PublicRoutes.addChildren([
    LoginRoute,
    ForgetRoute,
    PrivacyRoute,
    TokenInsertRoute,
  ]),
  PrivateRoutes.addChildren([
    ListExercisesRoute,
    CreateExercisesRoute,
    EditExercisesRoute,
    ListUsersRoute,
  ]),
])

const router = createRouter({
  routeTree,
})

const menuItems: MenuItemProps[] = [
  {
    icon: <RiOpenArmLine />,
    label: 'Exercícios',
    to: '/exercises',
  },
]

export { rootRoute, router, menuItems }
