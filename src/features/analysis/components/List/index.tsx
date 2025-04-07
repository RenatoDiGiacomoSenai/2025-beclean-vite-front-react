
import { ActionIcon, Table } from '@istic-ui/react'
import { router } from '@settings/tanstack-router'
import { useAnalysis } from '@features/analysis/services/analysis.hooks'

function AnalysisList() {
  // const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false)
  // const [selectedProduct, setSelectedProduct] = useState()
  const { analysis, loading } = useAnalysis()

  return (
    <Table
      classNames={{
        bodyCell: 'bg-white',
        bodyRow: 'bg-white hover:bg-brand-50',
        headCell: 'bg-neutral-50 text-muted text-xs',
      }}
      paddingInline={116}
      columns={[
        {
          index: 'barCode',
          label: 'Codigo de Barras',
        },
        {
          index: 'requests',
          label: 'Quantidade de Solicitações',
        },
        {
          index: 'status',
          label: 'Status',
          render: (item) =>
            item.status === 'Em Analise' ? (
              <p className="flex items-center gap-1">
                <span className=" w-1 h-1 bg-brand-500 rounded"></span>
                Em Analise
              </p>
            ) : (
              <p className="flex items-center gap-1">
                <span className=" w-1 h-1 bg-green-500 rounded"></span>
                Concluido
              </p>
            ),
        },

        {
          index: 'actions',
          label: '',
          width: '30px',
          render: () => (
            <div className="flex gap-2">
              <ActionIcon
                iconName="more-2"
                variant="outline"
                onClick={() => router.navigate({ to: `/product/${'1'}/edit` })}
              />
            </div>
          ),
        },
      ]}
      data={analysis?.items || []}
      isLoading={loading}
    />
  )
}

export default AnalysisList
