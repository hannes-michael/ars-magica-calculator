import type { CastingKind, CastingResult, CreationResult, LaboratoryResult } from '../types/calculator'

export function calculateCasting({
  technique, form, stamina, aura, focusBonus, die, kind, loudness, gestures, spellLevel,
}: {
  technique: number
  form: number
  stamina: number
  aura: number
  focusBonus: number
  die: number
  kind: CastingKind
  loudness: number
  gestures: number
  spellLevel: number
}): CastingResult {
  const raw = technique + form + stamina + aura + focusBonus + die
  const baseTotal = kind === 'spontaneous' ? Math.floor(raw / 2) : raw
  const total = baseTotal + loudness + gestures
  const target = spellLevel - (kind === 'formulaic' ? 10 : 0)
  return { raw, total, target, margin: total - target }
}

export function calculateLaboratory({
  intelligence, magicTheory, aura, labTechnique, labForm, labBonus, assistant, focusBonus, spellLevel,
}: {
  intelligence: number
  magicTheory: number
  aura: number
  labTechnique: number
  labForm: number
  labBonus: number
  assistant: number
  focusBonus: number
  spellLevel: number
}): LaboratoryResult {
  const total = intelligence + magicTheory + aura + labTechnique + labForm + labBonus + assistant + focusBonus
  return { total, margin: total - spellLevel }
}

export function calculateCreation({ baseLevel, range, duration, target, extraMagnitudes }: {
  baseLevel: number
  range: number
  duration: number
  target: number
  extraMagnitudes: number
}): CreationResult {
  const totalMagnitudes = range + duration + target + extraMagnitudes
  return { totalMagnitudes, level: baseLevel + totalMagnitudes * 5 }
}
