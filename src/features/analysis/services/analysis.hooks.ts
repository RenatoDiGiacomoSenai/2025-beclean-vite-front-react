import { useQuery, useQueryClient } from '@tanstack/react-query'

import productService from './analysis.service'



export function useAnalysis(query?:any) {
  const {
    data: analysis,
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['analysis', query],
    queryFn: async () => productService.getAnalisys(),
  })

  

  return { analysis, loading, refetch }
}

export function useExerciseById(id?: string) {
  const {
    data: exercise,
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['exercises', id],
    enabled: !!id,
    queryFn: async () => exercisesService.getExerciseById(id),
  })

  return { exercise, loading, refetch }
}

// export function useCreateExercise() {
//   const { showToast } = useToast()
//   const client = useQueryClient()

//   const { mutateAsync: create, isPending: loading } = useMutation({
//     mutationFn: exercisesService.createExercise,
//     onSuccess: () => {
//       client.invalidateQueries({ queryKey: ['exercises'] })
//       showToast({
//         type: 'success',
//         title: 'Exercício cadastrado com sucesso.',
//       })
//     },
//     onError: () => {
//       showToast({
//         type: 'error',
//         title: 'Erro ao cadastrar exercício.',
//       })
//     },
//   })

//   return { create, loading }
// }

// export function useUpdateExercise() {
//   const { showToast } = useToast()
//   const client = useQueryClient()

//   const { mutateAsync: update, isPending: loading } = useMutation({
//     mutationFn: exercisesService.updateExercise,
//     onSuccess: () => {
//       client.invalidateQueries({ queryKey: ['exercises'] })
//       showToast({
//         type: 'success',
//         title: 'Exercício atualizado com sucesso.',
//       })
//     },
//     onError: () => {
//       showToast({
//         type: 'error',
//         title: 'Erro ao atualizar exercício.',
//       })
//     },
//   })

//   return { update, loading }
// }

// export function useDeleteExercise() {
//   const { showToast } = useToast()
//   const client = useQueryClient()

//   const { mutateAsync: remove, isPending: loading } = useMutation({
//     mutationFn: exercisesService.deleteExercise,
//     onSuccess: () => {
//       client.invalidateQueries({ queryKey: ['exercises'] })
//       showToast({
//         type: 'success',
//         title: 'Exercício removido com sucesso.',
//       })
//     },
//     onError: () => {
//       showToast({
//         type: 'error',
//         title: 'Erro ao remover exercício.',
//       })
//     },
//   })

//   return { remove, loading }
// }
