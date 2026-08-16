import type { Art, Technique } from '../types/calculator'

export type PotentialEffect = {
  level: number
  description: string
}

export type ArtGuideline = {
  label: string
  subject: string
  note: string
}

export const techniqueOptions: { value: Technique; label: string }[] = [
  { value: 'creo', label: 'Creo · create / restore' },
  { value: 'intellego', label: 'Intellego · perceive / know' },
  { value: 'muto', label: 'Muto · change' },
  { value: 'perdo', label: 'Perdo · destroy / weaken' },
  { value: 'rego', label: 'Rego · control / move' },
]

export const artOptions: { value: Art; label: string }[] = [
  { value: 'animal', label: 'Animal' },
  { value: 'aquam', label: 'Aquam' },
  { value: 'auram', label: 'Auram' },
  { value: 'corpus', label: 'Corpus' },
  { value: 'herbam', label: 'Herbam' },
  { value: 'ignem', label: 'Ignem' },
  { value: 'imaginem', label: 'Imaginem' },
  { value: 'mentem', label: 'Mentem' },
  { value: 'terram', label: 'Terram' },
  { value: 'vim', label: 'Vim' },
]

export const artGuidelines: Record<Art, ArtGuideline> = {
  animal: { label: 'Animal', subject: 'an animal', note: 'Also covers animal products such as leather, bone, and wool.' },
  aquam: { label: 'Aquam', subject: 'water or another liquid', note: 'Unnatural liquids may require extra magnitudes or a Muto requisite.' },
  auram: { label: 'Auram', subject: 'air, weather, or a natural phenomenon', note: 'The exact phenomenon and its scale determine the final guideline.' },
  corpus: { label: 'Corpus', subject: 'a human body', note: 'Corpus affects bodies, not the human mind; use Mentem for thoughts and emotions.' },
  herbam: { label: 'Herbam', subject: 'a plant or plant product', note: 'The size and complexity of the plant or product affect the guideline.' },
  ignem: { label: 'Ignem', subject: 'fire, heat, or light', note: 'The intensity and size of the fire or light affect the guideline.' },
  imaginem: { label: 'Imaginem', subject: 'an image or sensory impression', note: 'Imaginem affects the senses and representations, not the thing represented.' },
  mentem: { label: 'Mentem', subject: 'a human mind', note: 'Mentem affects intelligence, memory, emotion, and the mind.' },
  terram: { label: 'Terram', subject: 'earth, stone, or metal', note: 'The material and amount determine the appropriate guideline.' },
  vim: { label: 'Vim', subject: 'magic or a supernatural effect', note: 'Vim guidelines commonly detect, alter, protect against, or dispel magic.' },
}

const techniqueEffects: Record<Technique, (subject: string) => PotentialEffect[]> = {
  creo: (subject) => [
    { level: 5, description: `Create or restore a small amount of ${subject}.` },
    { level: 15, description: `Create a substantial or useful example of ${subject}.` },
    { level: 25, description: `Heal, restore, or substantially improve ${subject}.` },
  ],
  intellego: (subject) => [
    { level: 1, description: `Sense a basic property or image of ${subject}.` },
    { level: 4, description: `Learn a specific fact about ${subject}.` },
    { level: 15, description: `Gain detailed information about ${subject}.` },
  ],
  muto: (subject) => [
    { level: 2, description: `Make a superficial change to ${subject}.` },
    { level: 4, description: `Make a major change while preserving the substance of ${subject}.` },
    { level: 15, description: `Make a major unnatural change to ${subject}.` },
  ],
  perdo: (subject) => [
    { level: 2, description: `Damage or weaken ${subject}.` },
    { level: 5, description: `Seriously impair or destroy a property of ${subject}.` },
    { level: 15, description: `Destroy a significant part or function of ${subject}.` },
  ],
  rego: (subject) => [
    { level: 2, description: `Manipulate or protect against ${subject}.` },
    { level: 5, description: `Control or ward against ${subject}.` },
    { level: 15, description: `Completely control or strongly move ${subject}.` },
  ],
}

export function getPotentialEffects(technique: Technique, art: Art) {
  return techniqueEffects[technique](artGuidelines[art].subject)
}
