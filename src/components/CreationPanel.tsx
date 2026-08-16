import { durationOptions, rangeOptions, targetOptions } from '../data/options'
import { artGuidelines, artOptions, getPotentialEffects, techniqueOptions } from '../data/guidelines'
import type { Art, Technique } from '../types/calculator'
import { NumberField } from './NumberField'

type CreationPanelProps = {
  baseLevel: number
  setBaseLevel: (value: number) => void
  creationMagnitudes: number
  setCreationMagnitudes: (value: number) => void
  range: number
  setRange: (value: number) => void
  duration: number
  setDuration: (value: number) => void
  target: number
  setTarget: (value: number) => void
  technique: Technique
  setTechnique: (value: Technique) => void
  art: Art
  setArt: (value: Art) => void
}

export function CreationPanel(props: CreationPanelProps) {
  const select = (label: string, help: string, value: number, onChange: (value: number) => void, options: typeof rangeOptions) => <label className="condition-row"><span><strong>{label}</strong><small>{help}</small></span><select className="condition-select" value={value} onChange={(event) => onChange(Number(event.target.value))}>{options.map((option) => <option key={option.label} value={option.value}>{option.label}</option>)}</select></label>
  const effects = getPotentialEffects(props.technique, props.art)
  const guideline = artGuidelines[props.art]
  return <><div className="field-grid two"><label className="field"><span>Technique</span><select className="creation-select" value={props.technique} onChange={(event) => props.setTechnique(event.target.value as Technique)}>{techniqueOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label><label className="field"><span>Art</span><select className="creation-select" value={props.art} onChange={(event) => props.setArt(event.target.value as Art)}>{artOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label><NumberField label="Base guideline" value={props.baseLevel} onChange={props.setBaseLevel} help="The guideline's listed base level" /><NumberField label="Extra magnitudes" value={props.creationMagnitudes} onChange={props.setCreationMagnitudes} help="Size, complexity or other modifiers" /></div><div className="potential-effects"><div className="subheading"><span>Potential effects</span><span className="subheading-note">{guideline.label} guidelines</span></div><p className="guideline-note">{guideline.note}</p><div className="effect-list">{effects.map((effect) => <div className="effect-row" key={`${effect.level}-${effect.description}`}><b>Lvl {effect.level}</b><span>{effect.description}</span></div>)}</div><a className="source-link" href="https://publish.obsidian.md/ars-magica-definitive-manuscript/09+Spells" target="_blank" rel="noreferrer">Reference: Ars Magica Definitive Manuscript</a></div><div className="divider compact-divider" /><div className="subheading"><span>Guideline modifiers</span><span className="subheading-note">Each magnitude = +5 levels</span></div><div className="creation-selects">{select('Range', 'How far the effect reaches', props.range, props.setRange, rangeOptions)}{select('Duration', 'How long the effect lasts', props.duration, props.setDuration, durationOptions)}{select('Target', 'What the effect can affect', props.target, props.setTarget, targetOptions)}</div></>
}
