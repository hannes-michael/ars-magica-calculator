import type { Mode } from '../types/calculator'

type SharedConditionsProps = {
  mode: Mode
  aura: number
  setAura: (value: number) => void
  focus: boolean
  setFocus: (value: boolean | ((value: boolean) => boolean)) => void
  focusBonus: number
  spellLevel: number
  setSpellLevel: (value: number) => void
  labActivity: string
  setLabActivity: (value: string) => void
}

export function SharedConditions({ mode, aura, setAura, focus, setFocus, focusBonus, spellLevel, setSpellLevel, labActivity, setLabActivity }: SharedConditionsProps) {
  return <>
    <div className="condition-row"><div className="condition-copy"><span className="condition-icon">☼</span><div><strong>Magical aura</strong><small>Local aura modifies every total</small></div></div><input className="compact-number" aria-label="Magical aura" type="number" value={aura} onChange={(event) => setAura(Number(event.target.value) || 0)} /></div>
    <div className="condition-row focus-row"><div className="condition-copy"><span className="condition-icon">◈</span><div><strong>Magic focus</strong><small>Choose a focus bonus for this effect</small></div></div><button className={`focus-toggle ${focus ? 'enabled' : ''}`} type="button" onClick={() => setFocus((value) => !value)} aria-pressed={focus}>{focus ? `On · +${focusBonus}` : 'Off · +0'}</button></div>
    <div className="target-row"><label htmlFor="target">{mode === 'casting' ? 'Spell level' : 'Target lab total'}</label><input id="target" type="number" value={spellLevel} onChange={(event) => setSpellLevel(Number(event.target.value) || 0)} /></div>
    {mode === 'laboratory' && <div className="activity-row"><label htmlFor="activity">Activity</label><select id="activity" value={labActivity} onChange={(event) => setLabActivity(event.target.value)}><option>Invent a spell</option><option>Enchant an item</option><option>Study from a text</option><option>Study from a teacher</option></select></div>}
  </>
}
