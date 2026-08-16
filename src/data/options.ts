import type { Option } from '../types/calculator'

export const loudnessOptions: Option[] = [
  { value: 1, label: 'Loud · +1' },
  { value: 0, label: 'Normal · +0' },
  { value: -5, label: 'Quiet · -5' },
  { value: -10, label: 'Silent · -10' },
]

export const gestureOptions: Option[] = [
  { value: 1, label: 'Broad · +1' },
  { value: 0, label: 'Normal · +0' },
  { value: -2, label: 'Subtle · -2' },
  { value: -5, label: 'None · -5' },
]

export const rangeOptions: Option[] = [
  { value: 0, label: 'Personal · +0' },
  { value: 1, label: 'Touch · +1' },
  { value: 2, label: 'Voice · +2' },
  { value: 3, label: 'Sight · +3' },
  { value: 4, label: 'Arcane Connection · +4' },
]

export const durationOptions: Option[] = [
  { value: 0, label: 'Momentary · +0' },
  { value: 1, label: 'Concentration · +1' },
  { value: 2, label: 'Diameter / Sun · +2' },
  { value: 3, label: 'Moon · +3' },
  { value: 4, label: 'Year · +4' },
]

export const targetOptions: Option[] = [
  { value: 0, label: 'Individual · +0' },
  { value: 1, label: 'Part · +1' },
  { value: 2, label: 'Group / Room · +2' },
  { value: 3, label: 'Structure · +3' },
  { value: 4, label: 'Boundary / Vision · +4' },
]
