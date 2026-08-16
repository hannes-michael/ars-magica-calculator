import type { Mode } from '../types/calculator'

const headings: Record<Mode, { title: string; description: string }> = {
  casting: { title: 'Casting profile', description: 'Build the casting total from the Arts, Form and circumstances.' },
  laboratory: { title: 'Laboratory profile', description: 'Combine your character, specialty and laboratory conditions.' },
  creation: { title: 'Guideline profile', description: 'Choose a Technique and Art, then shape a spell from a potential effect.' },
}

export function SectionHeading({ mode }: { mode: Mode }) {
  const heading = headings[mode]
  return <div className="section-heading"><span className="section-index">A</span><div><h2>{heading.title}</h2><p>{heading.description}</p></div></div>
}
