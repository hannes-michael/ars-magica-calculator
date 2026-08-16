import { gestureOptions, loudnessOptions } from '../data/options'
import { NumberField } from './NumberField'
import type { CastingKind } from '../types/calculator'

type CastingPanelProps = {
  kind: CastingKind
  setKind: (kind: CastingKind) => void
  technique: number
  setTechnique: (value: number) => void
  form: number
  setForm: (value: number) => void
  stamina: number
  setStamina: (value: number) => void
  die: number
  setDie: (value: number) => void
  loudness: number
  setLoudness: (value: number) => void
  gestures: number
  setGestures: (value: number) => void
}

export function CastingPanel(props: CastingPanelProps) {
  return <>
    <div className="segmented"><button className={props.kind === 'formulaic' ? 'selected' : ''} onClick={() => props.setKind('formulaic')}>Formulaic</button><button className={props.kind === 'spontaneous' ? 'selected' : ''} onClick={() => props.setKind('spontaneous')}>Spontaneous</button></div>
    <div className="field-grid two"><NumberField label="Technique" value={props.technique} onChange={props.setTechnique} help="Your Technique score" /><NumberField label="Form" value={props.form} onChange={props.setForm} help="Your Form score" /><NumberField label="Stamina" value={props.stamina} onChange={props.setStamina} /><NumberField label="Stress die" value={props.die} onChange={props.setDie} help="Enter the die result" /></div>
    <div className="divider" />
    <div className="subheading"><span>Conditions</span><span className="subheading-note">Applied automatically</span></div>
    <div className="condition-row"><div className="condition-copy"><span className="condition-icon">◌</span><div><strong>Loudness</strong><small>How clearly the spell is spoken</small></div></div><select className="condition-select" aria-label="Loudness" value={props.loudness} onChange={(event) => props.setLoudness(Number(event.target.value))}>{loudnessOptions.map((option) => <option key={option.label} value={option.value}>{option.label}</option>)}</select></div>
    <div className="condition-row"><div className="condition-copy"><span className="condition-icon">⌁</span><div><strong>Gestures</strong><small>Hand movements used while casting</small></div></div><select className="condition-select" aria-label="Gestures" value={props.gestures} onChange={(event) => props.setGestures(Number(event.target.value))}>{gestureOptions.map((option) => <option key={option.label} value={option.value}>{option.label}</option>)}</select></div>
  </>
}
