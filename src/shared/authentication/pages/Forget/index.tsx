import { createRoute } from '@tanstack/react-router'
import { PublicRoutes } from '@shared/layouts/PublicLayout'
import ForgetForm from '@shared/authentication/components/ForgetForm'

function ForgetPage() {
  return (
    <div className="p-2">
      <ForgetForm />
    </div>
  )
}

export const FORGET_PAGE_ROUTE = '/forget'

export const ForgetRoute = createRoute({
  path: FORGET_PAGE_ROUTE,
  getParentRoute: () => PublicRoutes,
  component: ForgetPage,
})
