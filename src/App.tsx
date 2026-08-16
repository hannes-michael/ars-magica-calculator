import { useMemo, useState } from 'react'
import './App.css'

type Mode = 'casting' | 'laboratory'
type CastingKind = 'formulaic' | 'spontaneous'

const loudnessOptions = [
  { value: 1, label: 'Loud · +1' },
  { value: 0, label: 'Normal · +0' },
  { value: -5, label: 'Quiet · -5' },
  { value: -10, label: 'Silent · -10' },
]

const gestureOptions = [
  { value: 1, label: 'Broad · +1' },
  { value: 0, label: 'Normal · +0' },
  { value: -2, label: 'Subtle · -2' },
  { value: -5, label: 'None · -5' },
]

function NumberField({
  label,
  value,
  onChange,
  help,
}: {
  label: string
  value: number
  onChange: (value: number) => void
  help?: string
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        type="number"
        value={value}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
      />
      {help && <small>{help}</small>}
    </label>
  )
}

function App() {
  const [mode, setMode] = useState<Mode>('casting')
  const [kind, setKind] = useState<CastingKind>('formulaic')
  const [technique, setTechnique] = useState(10)
  const [form, setForm] = useState(10)
  const [stamina, setStamina] = useState(2)
  const [aura, setAura] = useState(0)
  const [focus, setFocus] = useState(false)
  const [die, setDie] = useState(7)
  const [spellLevel, setSpellLevel] = useState(20)
  const [loudness, setLoudness] = useState(0)
  const [gestures, setGestures] = useState(0)
  const [intelligence, setIntelligence] = useState(2)
  const [magicTheory, setMagicTheory] = useState(3)
  const [labArt, setLabArt] = useState(10)
  const [labForm, setLabForm] = useState(10)
  const [labBonus, setLabBonus] = useState(0)
  const [assistant, setAssistant] = useState(0)
  const [labActivity, setLabActivity] = useState('Invent a spell')

  const focusBonus = focus ? Math.min(technique, form) : 0

  const casting = useMemo(() => {
    const raw = technique + form + stamina + aura + focusBonus + die
    const baseTotal = kind === 'spontaneous' ? Math.floor(raw / 2) : raw
    const total = baseTotal + loudness + gestures
    const target = spellLevel - (kind === 'formulaic' ? 10 : 0)
    return { raw, total, target, margin: total - target }
  }, [aura, die, focusBonus, form, gestures, kind, loudness, spellLevel, stamina, technique])

  const laboratory = useMemo(() => {
    const total = intelligence + magicTheory + aura + labArt + labForm + labBonus + assistant
    return { total, margin: total - spellLevel }
  }, [assistant, aura, intelligence, labArt, labBonus, labForm, magicTheory, spellLevel])

  const activeTotal = mode === 'casting' ? casting.total : laboratory.total
  const activeMargin = mode === 'casting' ? casting.margin : laboratory.margin
  const activeTarget = mode === 'casting' ? casting.target : spellLevel
  const targetDescription = mode === 'casting' && kind === 'formulaic' ? `Spell level ${spellLevel} − 10` : `Spell level ${spellLevel}`

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark">✦</span><span>ARS MAGICA <b>V</b></span></div>
        <span className="edition">5th edition · field notes</span>
      </header>

      <div className="mode-switch" role="tablist" aria-label="Calculator mode">
        <button className={mode === 'casting' ? 'active' : ''} onClick={() => setMode('casting')} role="tab" aria-selected={mode === 'casting'}>
          <span className="tab-number">01</span> Casting a spell <span className="arrow">↗</span>
        </button>
        <button className={mode === 'laboratory' ? 'active' : ''} onClick={() => setMode('laboratory')} role="tab" aria-selected={mode === 'laboratory'}>
          <span className="tab-number">02</span> Laboratory <span className="arrow">↗</span>
        </button>
      </div>

      <section className="workspace">
        <div className="inputs-column">
          <div className="section-heading"><span className="section-index">A</span><div><h2>{mode === 'casting' ? 'Casting profile' : 'Laboratory profile'}</h2><p>{mode === 'casting' ? 'Build the casting total from the Arts, Form and circumstances.' : 'Combine your character, specialty and laboratory conditions.'}</p></div></div>

          {mode === 'casting' ? (
            <>
              <div className="segmented">
                <button className={kind === 'formulaic' ? 'selected' : ''} onClick={() => setKind('formulaic')}>Formulaic</button>
                <button className={kind === 'spontaneous' ? 'selected' : ''} onClick={() => setKind('spontaneous')}>Spontaneous</button>
              </div>
              <div className="field-grid two">
                <NumberField label="Technique" value={technique} onChange={setTechnique} help="Your Technique score" />
                <NumberField label="Form" value={form} onChange={setForm} help="Your Form score" />
                <NumberField label="Stamina" value={stamina} onChange={setStamina} />
                <NumberField label="Stress die" value={die} onChange={setDie} help="Enter the die result" />
              </div>
            </>
          ) : (
            <div className="field-grid two">
              <NumberField label="Intelligence" value={intelligence} onChange={setIntelligence} />
              <NumberField label="Magic Theory" value={magicTheory} onChange={setMagicTheory} />
              <NumberField label="Art" value={labArt} onChange={setLabArt} help="Relevant Art score" />
              <NumberField label="Form" value={labForm} onChange={setLabForm} help="Relevant Form score" />
              <NumberField label="Lab bonus" value={labBonus} onChange={setLabBonus} help="Specialization and equipment" />
              <NumberField label="Assistant" value={assistant} onChange={setAssistant} help="Total assistant contribution" />
            </div>
          )}

          <div className="divider" />
          <div className="subheading"><span>Conditions</span><span className="subheading-note">Applied automatically</span></div>
          {mode === 'casting' && <div className="condition-row">
            <div className="condition-copy"><span className="condition-icon">◌</span><div><strong>Loudness</strong><small>How clearly the spell is spoken</small></div></div>
            <select className="condition-select" aria-label="Loudness" value={loudness} onChange={(event) => setLoudness(Number(event.target.value))}>
              {loudnessOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>}
          {mode === 'casting' && <div className="condition-row">
            <div className="condition-copy"><span className="condition-icon">⌁</span><div><strong>Gestures</strong><small>Hand movements used while casting</small></div></div>
            <select className="condition-select" aria-label="Gestures" value={gestures} onChange={(event) => setGestures(Number(event.target.value))}>
              {gestureOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>}
          <div className="condition-row">
            <div className="condition-copy"><span className="condition-icon">☼</span><div><strong>Magical aura</strong><small>Local aura modifies every total</small></div></div>
            <input className="compact-number" aria-label="Magical aura" type="number" value={aura} onChange={(event) => setAura(Number(event.target.value) || 0)} />
          </div>
          {mode === 'casting' && <div className="condition-row focus-row">
            <div className="condition-copy"><span className="condition-icon">◈</span><div><strong>Magic focus</strong><small>Choose a focus bonus for this effect</small></div></div>
            <button className={`focus-toggle ${focus ? 'enabled' : ''}`} type="button" onClick={() => setFocus((value) => !value)} aria-pressed={focus}>
              {focus ? `On · +${focusBonus}` : 'Off · +0'}
            </button>
          </div>}
          <div className="target-row">
            <label htmlFor="target">{mode === 'casting' ? 'Spell level' : 'Target lab total'}</label>
            <input id="target" type="number" value={spellLevel} onChange={(event) => setSpellLevel(Number(event.target.value) || 0)} />
          </div>
          {mode === 'laboratory' && <div className="activity-row"><label htmlFor="activity">Activity</label><select id="activity" value={labActivity} onChange={(event) => setLabActivity(event.target.value)}><option>Invent a spell</option><option>Enchant an item</option><option>Study from a text</option><option>Study from a teacher</option></select></div>}
        </div>

        <aside className="result-card">
          <div className="result-top"><span>LIVE RESULT</span><span className="live-dot">● updating</span></div>
          <p className="result-label">{mode === 'casting' ? `${kind === 'formulaic' ? 'Formulaic' : 'Spontaneous'} casting total` : labActivity}</p>
          <div className="target-display"><span>Target</span><b>{activeTarget}</b><small>{mode === 'casting' ? targetDescription : 'Target lab total'}</small></div>
          <div className="total">{activeTotal}</div>
          <div className={`margin ${activeMargin >= 0 ? 'positive' : 'negative'}`}>{activeMargin >= 0 ? `+${activeMargin}` : activeMargin} <span>{activeMargin >= 0 ? 'above target' : 'below target'}</span></div>
          <div className="result-rule" />
          <div className="breakdown"><div><span>Base total</span><b>{mode === 'casting' ? casting.raw - aura - focusBonus : laboratory.total - aura}</b></div><div><span>Aura</span><b>{aura >= 0 ? `+${aura}` : aura}</b></div>{mode === 'casting' && <><div><span>Focus</span><b>+{focusBonus}</b></div><div><span>Loudness</span><b>{loudness >= 0 ? `+${loudness}` : loudness}</b></div><div><span>Gestures</span><b>{gestures >= 0 ? `+${gestures}` : gestures}</b></div></>}</div>
          <div className="formula">{mode === 'casting' ? 'Technique + Form + Sta + die + conditions' : 'Int + MT + Art + Form + bonuses'}</div>
        </aside>
      </section>

      <footer><span>ARS MAGICA CALCULATOR</span><span>Arts and Forms stay numeric by design.</span><span>✦</span></footer>
    </main>
  )
}

export default App
