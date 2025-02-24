import { createRoute } from '@tanstack/react-router'
import { router } from '@settings/tanstack-router'
import { Button } from '@istic-ui/react'
import { PrivateRoutes } from '@shared/layouts'
import ExercisesFilters from '@features/exercises/components/FIlters'
import ExercisesList from '@features/exercises/components/List'

import { CREATE_EXERCISES_PAGE_ROUTE } from '../Create'

function ListExercisesPage() {
  return (
    <div className="p-4">
      <ExercisesFilters />
      <div className="flex flex-col gap-8 px-4 py-6 md:px-8 md:py-12 rounded-xl bg-white">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center w-full">
          <div>
            <h1 className="text-2xl font-bold text-brand-500">Exercícios</h1>
            <p className="text-gray-500">
              Gerencie todos os exercícios da plataforma ou crie novos
            </p>
          </div>
          <Button
            label="Novo Exercício"
            size="xs"
            onClick={() => router.navigate({ to: CREATE_EXERCISES_PAGE_ROUTE })}
            iconProps={{
              iconName: 'add',
              iconPosition: 'left',
            }}
          />
        </div>
        <ExercisesList />
      </div>
    </div>
  )
}

export const LIST_EXERCISES_PAGE_ROUTE = '/exercises'

export const ListExercisesRoute = createRoute({
  path: LIST_EXERCISES_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListExercisesPage,
})
