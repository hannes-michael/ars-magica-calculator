import { useMemo, useState } from 'react'
import { calculateCasting, calculateCreation, calculateLaboratory } from '../domain/calculations'
import type { Art, CastingKind, Mode, Technique } from '../types/calculator'

export function useCalculatorState() {
  const [mode, setMode] = useState<Mode>('casting')
  const [kind, setKind] = useState<CastingKind>('formulaic')
  const [technique, setTechnique] = useState(10)
  const [form, setForm] = useState(10)
  const [stamina, setStamina] = useState(2)
  const [aura, setAura] = useState(0)
  const [focus, setFocus] = useState(false)
  const [die, setDie] = useState(0)
  const [spellLevel, setSpellLevel] = useState(20)
  const [loudness, setLoudness] = useState(0)
  const [gestures, setGestures] = useState(0)
  const [intelligence, setIntelligence] = useState(2)
  const [magicTheory, setMagicTheory] = useState(3)
  const [labTechnique, setLabTechnique] = useState(10)
  const [labForm, setLabForm] = useState(10)
  const [labBonus, setLabBonus] = useState(0)
  const [assistant, setAssistant] = useState(0)
  const [labActivity, setLabActivity] = useState('Invent a spell')
  const [baseLevel, setBaseLevel] = useState(5)
  const [creationTechnique, setCreationTechnique] = useState<Technique>('creo')
  const [creationArt, setCreationArt] = useState<Art>('animal')
  const [range, setRange] = useState(0)
  const [duration, setDuration] = useState(0)
  const [target, setTarget] = useState(0)
  const [creationMagnitudes, setCreationMagnitudes] = useState(0)

  const focusBonus = focus ? mode === 'casting' ? Math.min(technique, form) : Math.min(labTechnique, labForm) : 0
  const casting = useMemo(() => calculateCasting({ technique, form, stamina, aura, focusBonus, die, kind, loudness, gestures, spellLevel }), [aura, die, focusBonus, form, gestures, kind, loudness, spellLevel, stamina, technique])
  const laboratory = useMemo(() => calculateLaboratory({ intelligence, magicTheory, aura, labTechnique, labForm, labBonus, assistant, focusBonus, spellLevel }), [assistant, aura, focusBonus, intelligence, labBonus, labForm, labTechnique, magicTheory, spellLevel])
  const creation = useMemo(() => calculateCreation({ baseLevel, range, duration, target, extraMagnitudes: creationMagnitudes }), [baseLevel, creationMagnitudes, duration, range, target])

  return {
    mode, setMode, kind, setKind, technique, setTechnique, form, setForm, stamina, setStamina,
    aura, setAura, focus, setFocus, die, setDie, spellLevel, setSpellLevel, loudness, setLoudness,
    gestures, setGestures, intelligence, setIntelligence, magicTheory, setMagicTheory,
    labTechnique, setLabTechnique, labForm, setLabForm, labBonus, setLabBonus, assistant, setAssistant,
    labActivity, setLabActivity, baseLevel, setBaseLevel, range, setRange, duration, setDuration,
    target, setTarget, creationMagnitudes, setCreationMagnitudes, creationTechnique, setCreationTechnique,
    creationArt, setCreationArt, focusBonus, casting, laboratory, creation,
  }
}
