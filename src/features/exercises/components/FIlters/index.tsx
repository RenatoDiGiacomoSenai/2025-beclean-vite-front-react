import {
  ExerciseListQuery,
  ExerciseType,
  useExercises,
} from '@features/exercises/services'
import { SearchInput, Select } from '@istic-ui/react'
import { useState } from 'react'

function ExercisesFilters() {
  const [query, setQuery] = useState<ExerciseListQuery>()
  const { refetch } = useExercises(query)

  const handleSearch = (search: string) => {
    setQuery((prev) => ({ ...prev, search }))
    refetch()
  }

  return (
    <div className="flex flex-col-reverse md:flex-row justify-end gap-4 py-4">
      <Select
        onSelect={(value) => setQuery((prev) => ({ ...prev, local: value }))}
        options={[
          {
            label: 'Value 1',
            value: 1,
          },
          {
            label: 'Value 2',
            value: 2,
          },
          {
            label: 'Value 3',
            value: 3,
          },
        ]}
        placeholder="Local"
      />
      <Select
        onSelect={(value) =>
          setQuery((prev) => ({
            ...prev,
            type: value?.value as unknown as ExerciseType,
          }))
        }
        options={[
          {
            label: 'Value 1',
            value: 1,
          },
          {
            label: 'Value 2',
            value: 2,
          },
          {
            label: 'Value 3',
            value: 3,
          },
        ]}
        placeholder="Tipo de exercício"
      />
      <Select
        onSelect={(value) =>
          setQuery((prev) => ({ ...prev, object: value?.value as string }))
        }
        options={[
          {
            label: 'Value 1',
            value: 1,
          },
          {
            label: 'Value 2',
            value: 2,
          },
          {
            label: 'Value 3',
            value: 3,
          },
        ]}
        placeholder="Objeto (opcional)"
      />
      <SearchInput
        placeholder="Pesquise por título"
        iconProps={{
          name: 'search',
          position: 'right',
        }}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default ExercisesFilters
