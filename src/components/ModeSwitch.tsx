import type { Mode } from '../types/calculator'

type ModeSwitchProps = {
  mode: Mode
  onChange: (mode: Mode) => void
}

const modes: { value: Mode; number: string; label: string }[] = [
  { value: 'casting', number: '01', label: 'Casting a spell' },
  { value: 'laboratory', number: '02', label: 'Laboratory' },
  { value: 'creation', number: '03', label: 'Create a spell' },
]

export function ModeSwitch({ mode, onChange }: ModeSwitchProps) {
  return (
    <div className="mode-switch" role="tablist" aria-label="Calculator mode">
      {modes.map((item) => (
        <button key={item.value} className={mode === item.value ? 'active' : ''} onClick={() => onChange(item.value)} role="tab" aria-selected={mode === item.value}>
          <span className="tab-number">{item.number}</span> {item.label} <span className="arrow">↗</span>
        </button>
      ))}
    </div>
  )
}
