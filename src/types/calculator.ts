export type Mode = 'casting' | 'laboratory' | 'creation'
export type CastingKind = 'formulaic' | 'spontaneous'

export type Option = {
  value: number
  label: string
}

export type CastingResult = {
  raw: number
  total: number
  target: number
  margin: number
}

export type LaboratoryResult = {
  total: number
  margin: number
}

export type CreationResult = {
  level: number
  totalMagnitudes: number
}
