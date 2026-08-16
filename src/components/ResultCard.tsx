import type { CastingKind, CastingResult, CreationResult, LaboratoryResult, Mode } from '../types/calculator'

type ResultCardProps = {
  mode: Mode
  kind: CastingKind
  casting: CastingResult
  laboratory: LaboratoryResult
  creation: CreationResult
  labActivity: string
  spellLevel: number
  aura: number
  focusBonus: number
  loudness: number
  gestures: number
  baseLevel: number
}

export function ResultCard({ mode, kind, casting, laboratory, creation, labActivity, spellLevel, aura, focusBonus, loudness, gestures, baseLevel }: ResultCardProps) {
  const activeTotal = mode === 'casting' ? casting.total : laboratory.total
  const activeMargin = mode === 'casting' ? casting.margin : laboratory.margin
  const activeTarget = mode === 'casting' ? casting.target : mode === 'laboratory' ? spellLevel : creation.level
  const targetDescription = mode === 'casting' && kind === 'formulaic'
    ? `Spell level ${spellLevel} − 10`
    : mode === 'creation'
      ? `${creation.totalMagnitudes} magnitude${creation.totalMagnitudes === 1 ? '' : 's'} above base`
      : `Spell level ${spellLevel}`

  return (
    <aside className="result-card">
      <p className="result-label">{mode === 'casting' ? `${kind === 'formulaic' ? 'Formulaic' : 'Spontaneous'} casting total` : mode === 'laboratory' ? labActivity : 'Created spell level'}</p>
      <div className="target-display"><span>{mode === 'creation' ? 'Level' : 'Target'}</span><b>{activeTarget}</b><small>{targetDescription}</small></div>
      <div className="total">{mode === 'creation' ? creation.level : activeTotal}</div>
      {mode !== 'creation' && <div className={`margin ${activeMargin >= 0 ? 'positive' : 'negative'}`}>{activeMargin >= 0 ? `+${activeMargin}` : activeMargin} <span>{activeMargin >= 0 ? 'above target' : 'below target'}</span></div>}
      <div className="result-rule" />
      <div className="breakdown">{mode === 'creation' ? <><div><span>Base guideline</span><b>{baseLevel}</b></div><div><span>Magnitude modifiers</span><b>+{creation.totalMagnitudes} × 5</b></div></> : <><div><span>Base total</span><b>{mode === 'casting' ? casting.raw - aura - focusBonus : laboratory.total - aura - focusBonus}</b></div><div><span>Aura</span><b>{aura >= 0 ? `+${aura}` : aura}</b></div><div><span>Focus</span><b>+{focusBonus}</b></div>{mode === 'casting' && <><div><span>Loudness</span><b>{loudness >= 0 ? `+${loudness}` : loudness}</b></div><div><span>Gestures</span><b>{gestures >= 0 ? `+${gestures}` : gestures}</b></div></>}</>}</div>
      <div className="formula">{mode === 'casting' ? 'Technique + Form + Sta + die + conditions' : mode === 'laboratory' ? 'Int + MT + Technique + Form + bonuses' : 'Base level + (magnitudes × 5)'}</div>
    </aside>
  )
}
