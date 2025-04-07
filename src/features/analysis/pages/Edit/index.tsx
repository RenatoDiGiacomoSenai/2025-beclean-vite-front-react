import { PrivateRoutes } from '@shared/layouts'
import { createRoute } from '@tanstack/react-router'

function EditAnalysisPage() {
  return (
    <div>
      <h1>Edit Analysis</h1>
    </div>
  )
}

export const EDIT_ANALYSIS_PAGE_ROUTE = '/analysis/$analysisId/edit'

export const EditAnalysisRoute = createRoute({
  path: EDIT_ANALYSIS_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: EditAnalysisPage,
})
