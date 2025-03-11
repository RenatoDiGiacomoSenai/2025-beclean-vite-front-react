import { createRoute } from '@tanstack/react-router'
import { PrivateRoutes } from '@shared/layouts'
import AnalysisFilters from '@features/analysis/components/FIlters'
import AnalysisList from '@features/analysis/components/List'



function ListAnalysisPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-8 pb-4">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Analises</h1>
              <p className="text-gray-500">
                Gerencie todos os exercícios da plataforma ou crie novos
              </p>
            </div>
        </div>
      </div>
      <AnalysisList />
    </>
  )
}

export const LIST_ANALYSIS_PAGE_ROUTE = '/analysis'

export const ListAnalysisRoute = createRoute({
  path: LIST_ANALYSIS_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListAnalysisPage,
})
