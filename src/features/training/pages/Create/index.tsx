import { PrivateRoutes } from '@shared/layouts'
import { createRoute } from '@tanstack/react-router'

function CreateExercisesPage() {
  return (
    <div>
      <h1>Create Exercises</h1>
    </div>
  )
}

export const CREATE_EXERCISES_PAGE_ROUTE = '/exercises/create'

export const CreateExercisesRoute = createRoute({
  path: CREATE_EXERCISES_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: CreateExercisesPage,
})
