import './App.css'
import { CastingPanel } from './components/CastingPanel'
import { CreationPanel } from './components/CreationPanel'
import { LaboratoryPanel } from './components/LaboratoryPanel'
import { ModeSwitch } from './components/ModeSwitch'
import { ResultCard } from './components/ResultCard'
import { SectionHeading } from './components/SectionHeading'
import { SharedConditions } from './components/SharedConditions'
import { useCalculatorState } from './hooks/useCalculatorState'

function App() {
  const calculator = useCalculatorState()

  return (
    <main className="app-shell">
      <header className="topbar"><div className="brand"><span className="brand-mark">✦</span><span>ARS MAGICA <b>V</b></span></div><span className="edition">5th edition · field notes</span></header>
      <ModeSwitch mode={calculator.mode} onChange={calculator.setMode} />
      <section className="workspace">
        <div className="inputs-column">
          <SectionHeading mode={calculator.mode} />
          {calculator.mode === 'casting' && <CastingPanel kind={calculator.kind} setKind={calculator.setKind} technique={calculator.technique} setTechnique={calculator.setTechnique} form={calculator.form} setForm={calculator.setForm} stamina={calculator.stamina} setStamina={calculator.setStamina} die={calculator.die} setDie={calculator.setDie} loudness={calculator.loudness} setLoudness={calculator.setLoudness} gestures={calculator.gestures} setGestures={calculator.setGestures} />}
          {calculator.mode === 'laboratory' && <LaboratoryPanel intelligence={calculator.intelligence} setIntelligence={calculator.setIntelligence} magicTheory={calculator.magicTheory} setMagicTheory={calculator.setMagicTheory} labTechnique={calculator.labTechnique} setLabTechnique={calculator.setLabTechnique} labForm={calculator.labForm} setLabForm={calculator.setLabForm} labBonus={calculator.labBonus} setLabBonus={calculator.setLabBonus} assistant={calculator.assistant} setAssistant={calculator.setAssistant} />}
          {calculator.mode === 'creation' && <CreationPanel baseLevel={calculator.baseLevel} setBaseLevel={calculator.setBaseLevel} creationMagnitudes={calculator.creationMagnitudes} setCreationMagnitudes={calculator.setCreationMagnitudes} range={calculator.range} setRange={calculator.setRange} duration={calculator.duration} setDuration={calculator.setDuration} target={calculator.target} setTarget={calculator.setTarget} technique={calculator.creationTechnique} setTechnique={calculator.setCreationTechnique} art={calculator.creationArt} setArt={calculator.setCreationArt} />}
          {calculator.mode !== 'creation' && <SharedConditions mode={calculator.mode} aura={calculator.aura} setAura={calculator.setAura} focus={calculator.focus} setFocus={calculator.setFocus} focusBonus={calculator.focusBonus} spellLevel={calculator.spellLevel} setSpellLevel={calculator.setSpellLevel} labActivity={calculator.labActivity} setLabActivity={calculator.setLabActivity} />}
        </div>
        <ResultCard mode={calculator.mode} kind={calculator.kind} casting={calculator.casting} laboratory={calculator.laboratory} creation={calculator.creation} labActivity={calculator.labActivity} spellLevel={calculator.spellLevel} aura={calculator.aura} focusBonus={calculator.focusBonus} loudness={calculator.loudness} gestures={calculator.gestures} baseLevel={calculator.baseLevel} />
      </section>
      <footer><span>ARS MAGICA CALCULATOR</span><span>✦</span></footer>
    </main>
  )
}

export default App
