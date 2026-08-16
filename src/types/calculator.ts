export type Mode = 'casting' | 'laboratory' | 'creation'
export type CastingKind = 'formulaic' | 'spontaneous'
export type Technique = 'creo' | 'intellego' | 'muto' | 'perdo' | 'rego'
export type Art = 'animal' | 'aquam' | 'auram' | 'corpus' | 'herbam' | 'ignem' | 'imaginem' | 'mentem' | 'terram' | 'vim'

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
