import { ApiListQuery, ApiListResponse } from '@shared/types'

export interface AnalysisType {
  id: string
  name: string
  classificationScore: number
  barCode: string
  requests: number
  status: AnalysisStatus
}

export enum AnalysisStatus {
  'Concluido',
  'Em Analise',
}


export type AnalysisListResponse = ApiListResponse<AnalysisItem>

export type AnalysisItem = Pick<AnalysisType, 'id' | 'barCode' | 'requests' | 'status'>

export type AnalysisListQuery = Partial<Pick<AnalysisType, 'id' | 'barCode' | 'requests' | 'status'>> & ApiListQuery
