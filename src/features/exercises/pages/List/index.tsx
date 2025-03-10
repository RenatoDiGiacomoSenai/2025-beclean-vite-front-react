import { createRoute } from '@tanstack/react-router'
import { router } from '@settings/tanstack-router'
import { Button } from '@istic-ui/react'
import { PrivateRoutes } from '@shared/layouts'
import ExercisesFilters from '@features/exercises/components/FIlters'
import ExercisesList from '@features/exercises/components/List'

import { CREATE_EXERCISES_PAGE_ROUTE } from '../Create'

function ListExercisesPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-8 pb-4">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Exercícios</h1>
              <p className="text-gray-500">
                Gerencie todos os exercícios da plataforma ou crie novos
              </p>
            </div>
        </div>
        <ExercisesFilters />
      </div>
      <ExercisesList />
    </>
  )
}

export const LIST_EXERCISES_PAGE_ROUTE = '/exercises'

export const ListExercisesRoute = createRoute({
  path: LIST_EXERCISES_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListExercisesPage,
})
