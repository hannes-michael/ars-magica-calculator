type NumberFieldProps = {
  label: string
  value: number
  onChange: (value: number) => void
  help?: string
}

export function NumberField({ label, value, onChange, help }: NumberFieldProps) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type="number" value={value} onChange={(event) => onChange(Number(event.target.value) || 0)} />
      {help && <small>{help}</small>}
    </label>
  )
}
