import { useState } from 'react'
import { ActionIcon, Table } from '@istic-ui/react'
import {
  ExerciseItem,
  ExercisePlace,
  useExercises,
} from '@features/exercises/services'
import { router } from '@settings/tanstack-router'

import RemoveExerciseModal from '../RemoveModal'

function ExercisesList() {
  const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false)
  const [selectedExercise, setSelectedExercise] = useState<ExerciseItem>()
  const { exercises, loading } = useExercises()

  return (
    <>
      <Table<ExerciseItem>
        classNames={{
          bodyCell: 'px-2 py-4',
          bodyRow: ' px-2 py-4 hover:bg-brand-50',
          headCell: ' text-muted text-xs px-2 py-4',
        }}
        columns={[
          {
            index: 'title',
            label: 'Título',
          },
          {
            index: 'place',
            label: 'Local',
            render: (item) =>
              item.place === ExercisePlace.Gym ? 'Academia' : 'Casa',
          },
          {
            index: 'repetitions',
            label: 'Repetições',
          },
          {
            index: 'isActive',
            label: 'Situação',
            render: (item) => (item.isActive ? 'Ativo' : 'Inativo'),
          },
          {
            index: 'actions',
            label: '',
            width: '30px',
            render: (item) => (
              <div className="flex gap-2">
                <ActionIcon
                  iconName="eye"
                  onClick={() =>
                    router.navigate({ to: `/exercises/${item.id}/edit` })
                  }
                />
                <ActionIcon
                  iconName="trash"
                  onClick={() => {
                    setSelectedExercise(item)
                    setShowRemoveModal(true)
                  }}
                />
              </div>
            ),
          },
        ]}
        data={exercises?.items || []}
        isLoading={loading}
        paddingInline={16}
      />

      <RemoveExerciseModal
        exercise={selectedExercise}
        isOpen={showRemoveModal}
        onClose={() => {
          setSelectedExercise(undefined)
          setShowRemoveModal(false)
        }}
      />
    </>
  )
}

export default ExercisesList
