import { createRoute } from '@tanstack/react-router'
import { PublicRoutes } from '@shared/layouts/PublicLayout'
import LoginForm from '@shared/authentication/components/LoginForm'

function LoginPage() {
  return <LoginForm />
}

export const LOGIN_PAGE_ROUTE = '/'

export const LoginRoute = createRoute({
  path: LOGIN_PAGE_ROUTE,
  getParentRoute: () => PublicRoutes,
  component: LoginPage,
})
