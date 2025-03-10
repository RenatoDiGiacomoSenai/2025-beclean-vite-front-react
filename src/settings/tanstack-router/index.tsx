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
import { ResetPasswordRoute, TokenInsertRoute } from '@shared/authentication/components/ForgetForm'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => (
    <div>
      <p>Não tem Component Inserido na Rota</p>
      <Link className='bg-red-500' to="/">Voltar</Link>
    </div>
  ),
})

const routeTree = rootRoute.addChildren([
  PublicRoutes.addChildren([
    LoginRoute,
    ForgetRoute,
    PrivacyRoute,
    TokenInsertRoute,
    ResetPasswordRoute
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
    label: 'Análises',
    to: '/exercises',
  },
  {
    label: 'Anúncios',
    to: '/ads',
  },
  {
    label: 'Produtos',
    to: '/products',
  },
  {
    label: 'Destaques',
    to: '/highlights',
  },
  {
    label: 'Ingredientes',
    to: '/ingredients',
  },
  {
    label: 'Certificações',
    to: '/certifications',
  },
  {
    label: 'Parceiros',
    to: '/partners',
  },
  {
    label: 'Usuários',
    to: '/users',
  },
]

export { rootRoute, router, menuItems }
