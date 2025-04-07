

export default {
  async getAnalisys() {
   
    const dataItens = {
      pagination: {
        page: 1,
        pageSize: 30,
        sorting: [
          {
            field: 'name',
            sortDirection: 'ASC',
          },
        ],
        total: 300,
        pageCount: 10,
        isFirstPage: true,
        isLastPage: false,
      },
      items: [
        {
          id: 'ee6aaa86-5fec-4328-9296-8ac54330835a',
          name: 'Some Product',
          classificationScore: 4,
          barCode: '482936751',
          requests: 5,
          status:"Concluido",
          images: [
            {
              id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
              image: 'Some Url',
            },
          ],
          productFunctions: [
            {
              id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
              name: 'Some Function Name',
            },
          ],
          brand: {
            id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
            name: 'Some Brand Name',
            image: 'Some URL',
          },
          ingredients: [
            {
              id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
              nameInci: 'Some Name',
              localizeBrazilianName: 'Algum Nome',
            },
          ],
          certifications: [
            {
              id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
              name: 'Some Certification Name',
            },
          ],
        },
        {
          id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
          name: 'Some Product',
          classificationScore: 4,
          barCode: '789123456',
          requests: 10,
          status:"Em Analise",
          images: [
            {
              id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
              image: 'Some Url',
            },
          ],
          productFunctions: [
            {
              id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
              name: 'Some Function Name',
            },
          ],
          brand: {
            id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
            name: 'Some Brand Name',
            image: 'Some URL',
          },
          ingredients: [
            {
              id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
              nameInci: 'Some Name',
              localizeBrazilianName: 'Algum Nome',
            },
          ],
          certifications: [
            {
              id: 'ee6aaa86-5fec-4328-9296-8ac54330834b',
              name: 'Some Certification Name',
            },
          ],
        },
      ],
    }
  


    return dataItens 
  },

  async getAnalysisById(id?: string) {
    if (!id) {
      throw new Error('')
    }
  },
}

// Old
// export default {
//   async getExercises(query?: ExerciseListQuery): Promise<ExerciseListResponse> {
//     if (query) {
//       return {
//         items: [],
//       }
//     }

//     return {
//       items: [
//         {
//           id: '1',
//           title: 'Push-ups',
//           place: ExercisePlace.Home,
//           repetitions: 10,
//           isActive: true,
//         },
//         {
//           id: '2',
//           title: 'Pull-ups',
//           place: ExercisePlace.Gym,
//           repetitions: 10,
//           isActive: true,
//         },
//       ],
//     }
//   },

//   async getExerciseById(id?: string): Promise<Exercise> {
//     if (!id) {
//       throw new Error('Exercício não encontrado')
//     }

//     return {
//       id: '1',
//       title: 'Push-ups',
//       description: 'Push-ups description',
//       imageUrl: 'https://via.placeholder.com/150',
//       type: ExerciseType.OpenAir,
//       place: ExercisePlace.Home,
//       repetitions: 10,
//       isActive: true,
//       object: null,
//     }
//   },

//   async createExercise(exercise: ExerciseRequest): Promise<Exercise> {
//     return {
//       id: '1',
//       title: exercise.title,
//       description: exercise.description,
//       imageUrl: exercise.imageUrl,
//       type: exercise.type,
//       place: exercise.place,
//       repetitions: exercise.repetitions,
//       isActive: exercise.isActive,
//       object: exercise.object,
//     }
//   },

//   async updateExercise(exercise: ExerciseRequest): Promise<Exercise> {
//     return {
//       id: exercise.id || '1',
//       title: exercise.title,
//       description: exercise.description,
//       imageUrl: exercise.imageUrl,
//       type: exercise.type,
//       place: exercise.place,
//       repetitions: exercise.repetitions,
//       isActive: exercise.isActive,
//       object: exercise.object,
//     }
//   },

//   async deleteExercise(id?: string): Promise<void> {
//     if (!id) {
//       throw new Error('Exercício não encontrado')
//     }
//   },
// }
