import { NumberField } from './NumberField'

type LaboratoryPanelProps = {
  intelligence: number
  setIntelligence: (value: number) => void
  magicTheory: number
  setMagicTheory: (value: number) => void
  labTechnique: number
  setLabTechnique: (value: number) => void
  labForm: number
  setLabForm: (value: number) => void
  labBonus: number
  setLabBonus: (value: number) => void
  assistant: number
  setAssistant: (value: number) => void
}

export function LaboratoryPanel(props: LaboratoryPanelProps) {
  return <><div className="field-grid two"><NumberField label="Intelligence" value={props.intelligence} onChange={props.setIntelligence} /><NumberField label="Magic Theory" value={props.magicTheory} onChange={props.setMagicTheory} /><NumberField label="Technique" value={props.labTechnique} onChange={props.setLabTechnique} help="Relevant Technique score" /><NumberField label="Form" value={props.labForm} onChange={props.setLabForm} help="Relevant Form score" /><NumberField label="Lab bonus" value={props.labBonus} onChange={props.setLabBonus} help="Specialization and equipment" /><NumberField label="Assistant" value={props.assistant} onChange={props.setAssistant} help="Total assistant contribution" /></div><div className="divider" /><div className="subheading"><span>Conditions</span><span className="subheading-note">Applied automatically</span></div></>
}
