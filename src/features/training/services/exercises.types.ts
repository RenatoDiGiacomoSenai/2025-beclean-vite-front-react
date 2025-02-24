import { ApiListQuery, ApiListResponse } from '@shared/types'

export interface Exercise {
  id: string
  title: string
  description: string
  imageUrl: string | null
  type: ExerciseType
  place: ExercisePlace
  repetitions: number
  isActive: boolean
  object: string | null
}

export enum ExerciseType {
  OpenAir,
}

export enum ExercisePlace {
  Home,
  Gym,
}

export type ExerciseItem = Pick<
  Exercise,
  'id' | 'title' | 'place' | 'repetitions' | 'isActive'
>

export type ExerciseListResponse = ApiListResponse<ExerciseItem>

export type ExerciseListQuery = Partial<
  Pick<Exercise, 'place' | 'type' | 'object' | 'title'>
> &
  ApiListQuery

export type ExerciseRequest = Omit<Exercise, 'id'> & { id?: string }
