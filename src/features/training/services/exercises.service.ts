import {
  Exercise,
  ExerciseListResponse,
  ExerciseListQuery,
  ExerciseRequest,
  ExercisePlace,
  ExerciseType,
} from './exercises.types'

export default {
  async getExercises(query?: ExerciseListQuery): Promise<ExerciseListResponse> {
    if (query) {
      return {
        items: [],
      }
    }

    return {
      items: [
        {
          id: '1',
          title: 'Push-ups',
          place: ExercisePlace.Home,
          repetitions: 10,
          isActive: true,
        },
        {
          id: '2',
          title: 'Pull-ups',
          place: ExercisePlace.Gym,
          repetitions: 10,
          isActive: true,
        },
      ],
    }
  },

  async getExerciseById(id?: string): Promise<Exercise> {
    if (!id) {
      throw new Error('Exercício não encontrado')
    }

    return {
      id: '1',
      title: 'Push-ups',
      description: 'Push-ups description',
      imageUrl: 'https://via.placeholder.com/150',
      type: ExerciseType.OpenAir,
      place: ExercisePlace.Home,
      repetitions: 10,
      isActive: true,
      object: null,
    }
  },

  async createExercise(exercise: ExerciseRequest): Promise<Exercise> {
    return {
      id: '1',
      title: exercise.title,
      description: exercise.description,
      imageUrl: exercise.imageUrl,
      type: exercise.type,
      place: exercise.place,
      repetitions: exercise.repetitions,
      isActive: exercise.isActive,
      object: exercise.object,
    }
  },

  async updateExercise(exercise: ExerciseRequest): Promise<Exercise> {
    return {
      id: exercise.id || '1',
      title: exercise.title,
      description: exercise.description,
      imageUrl: exercise.imageUrl,
      type: exercise.type,
      place: exercise.place,
      repetitions: exercise.repetitions,
      isActive: exercise.isActive,
      object: exercise.object,
    }
  },

  async deleteExercise(id?: string): Promise<void> {
    if (!id) {
      throw new Error('Exercício não encontrado')
    }
  },
}
