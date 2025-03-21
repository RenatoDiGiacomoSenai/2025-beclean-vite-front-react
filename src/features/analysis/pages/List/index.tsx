import { createRoute } from '@tanstack/react-router'
import { PrivateRoutes } from '@shared/layouts'
import AnalysisList from '@features/analysis/components/List'
import AnalysisFilters from '@features/analysis/components/FIlters'

function ListAnalysisPage() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className=" text-2xl font-bold text-neutral-900">Análises</h1>
            <p className="text-gray-500">
              Gerencie as análises de produtos que os consumidores enviaram.
            </p>
          </div>
        </div>
        <AnalysisFilters />
      </div>
      <div className=''>
        <AnalysisList />
      </div>
    </div>
  )
}

export const LIST_ANALYSIS_PAGE_ROUTE = '/analysis'

export const ListAnalysisRoute = createRoute({
  path: LIST_ANALYSIS_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListAnalysisPage,
})
