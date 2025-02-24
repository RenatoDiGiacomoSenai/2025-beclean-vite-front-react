import { ExerciseItem, useDeleteExercise } from '@features/exercises/services'
import ConfirmModal from '@shared/components/ConfirmModal'

interface RemoveExerciseModalProps {
  exercise?: ExerciseItem
  isOpen: boolean
  onClose: () => void
}

function RemoveExerciseModal({
  exercise,
  isOpen,
  onClose,
}: Readonly<RemoveExerciseModalProps>) {
  const { remove, loading } = useDeleteExercise()

  const handleRemove = async () => {
    if (!exercise) return

    await remove(exercise.id)
    onClose()
  }

  return (
    <ConfirmModal
      id="controller-remove-modal"
      title="Confirmar Exclusão"
      isOpen={isOpen}
      contentWidth={500}
      onClose={onClose}
      description={
        'Você está prestes a excluir este exercício. Esta ação não pode ser desfeita. Deseja continuar?'
      }
      buttonProps={{
        left: {
          id: 'controller-remove-exclude-action',
          label: 'Excluir Item',
          isLoading: loading,
          onClick: handleRemove,
        },
        right: {
          id: 'controller-remove-cancel-action',
          label: 'Manter Item',
          onClick: onClose,
        },
      }}
    />
  )
}

export default RemoveExerciseModal
