import { PrivateRoutes } from '@shared/layouts'
import { createRoute } from '@tanstack/react-router'

function CreateAnalysisPage() {
  return (
    <div>
      <h1>Create Analysis</h1>
    </div>
  )
}

export const CREATE_ANALYSIS_PAGE_ROUTE = '/analysis/create'

export const CreateAnalysisRoute = createRoute({
  path: CREATE_ANALYSIS_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: CreateAnalysisPage,
})
