import { PrivateRoutes } from '@shared/layouts'
import { createRoute } from '@tanstack/react-router'

function EditExercisesPage() {
  return (
    <div>
      <h1>Edit Exercises</h1>
    </div>
  )
}

export const EDIT_EXERCISES_PAGE_ROUTE = '/exercises/$exerciseId/edit'

export const EditExercisesRoute = createRoute({
  path: EDIT_EXERCISES_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: EditExercisesPage,
})
