import { durationOptions, rangeOptions, targetOptions } from '../data/options'
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
}

export function CreationPanel(props: CreationPanelProps) {
  const select = (label: string, help: string, value: number, onChange: (value: number) => void, options: typeof rangeOptions) => <label className="condition-row"><span><strong>{label}</strong><small>{help}</small></span><select className="condition-select" value={value} onChange={(event) => onChange(Number(event.target.value))}>{options.map((option) => <option key={option.label} value={option.value}>{option.label}</option>)}</select></label>
  return <><div className="field-grid two"><NumberField label="Base guideline" value={props.baseLevel} onChange={props.setBaseLevel} help="The guideline's listed base level" /><NumberField label="Extra magnitudes" value={props.creationMagnitudes} onChange={props.setCreationMagnitudes} help="Size, complexity or other modifiers" /></div><div className="divider compact-divider" /><div className="subheading"><span>Guideline modifiers</span><span className="subheading-note">Each magnitude = +5 levels</span></div><div className="creation-selects">{select('Range', 'How far the effect reaches', props.range, props.setRange, rangeOptions)}{select('Duration', 'How long the effect lasts', props.duration, props.setDuration, durationOptions)}{select('Target', 'What the effect can affect', props.target, props.setTarget, targetOptions)}</div></>
}
