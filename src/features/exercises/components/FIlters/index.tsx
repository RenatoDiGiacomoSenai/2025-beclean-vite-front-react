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
