import { useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import { questions } from '../data/questions'
import { calculateScores, scoreCategory } from '../utils/scoring'

export default function HealthCheck() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(0))
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  const choose = (value) => {
    setAnswers((current) => current.map((answer, index) => index === step ? value : answer))
    setError('')
  }

  const next = () => {
    if (!answers[step]) { setError('Please choose a response before continuing.'); return }
    if (step === questions.length - 1) {
      setResult(calculateScores(answers))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else setStep((value) => value + 1)
  }

  const restart = () => { setStep(0); setAnswers(Array(questions.length).fill(0)); setError(''); setResult(null) }

  if (result) {
    const lowest = Object.entries(result.byCategory).sort((a, b) => a[1] - b[1])[0]
    const suggestions = {
      People: 'Start with a clear staff development calendar and review roles and responsibilities.',
      Process: 'Document admissions and administrative workflows, then introduce consistent enquiry tracking.',
      Promotion: 'Create a regular communication calendar and review your institution’s website and outreach materials.',
    }
    return (
      <>
        <Seo title="Institutional Health Check" description="Complete a nine-question People, Process and Promotion institutional reflection tool." />
        <PageHero eyebrow="Self-Assessment" title="Your institutional reflection" text="A simple indicative view based on your responses." />
        <section className="section">
          <div className="container result-panel">
            <div className="result-summary"><p>Overall reflection</p><strong>{result.overall}%</strong><h2>{scoreCategory(result.overall)}</h2></div>
            <div className="result-scores">
              {Object.entries(result.byCategory).map(([label, value]) => <ProgressBar key={label} label={label} value={value} />)}
            </div>
            <div className="lowest-area"><p className="eyebrow">Suggested starting point</p><h2>{lowest[0]} is your lowest-scoring area.</h2><p>{suggestions[lowest[0]]}</p></div>
            <p className="disclaimer">This self-assessment is an informal reflection tool. It is not a formal institutional audit or accreditation assessment.</p>
            <div className="button-row"><Button onClick={restart} variant="outline">Restart Assessment</Button><Button to="/contact">Discuss These Results</Button></div>
          </div>
        </section>
      </>
    )
  }

  const question = questions[step]
  return (
    <>
      <Seo title="Institutional Health Check" description="Complete a nine-question People, Process and Promotion institutional reflection tool." />
      <PageHero eyebrow="Institutional Health Check" title="How is your institution performing?" text="Answer nine short questions to get a simple picture of your institution across People, Process and Promotion." />
      <section className="section quiz-section">
        <div className="container quiz">
          <div className="quiz-progress"><span>Question {step + 1} of {questions.length}</span><span>{question.category}</span></div>
          <div className="quiz-progress__track"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
          <fieldset className="quiz-question">
            <legend>{question.text}</legend>
            <div className="scale-options">
              {[
                [1, 'Not at all'], [2, 'Rarely'], [3, 'Sometimes'], [4, 'Usually'], [5, 'Consistently'],
              ].map(([value, label]) => (
                <label key={value} className={answers[step] === value ? 'scale-option scale-option--selected' : 'scale-option'}>
                  <input type="radio" name={`question-${step}`} value={value} checked={answers[step] === value} onChange={() => choose(value)} />
                  <strong>{value}</strong><span>{label}</span>
                </label>
              ))}
            </div>
            {error && <p className="form-error" role="alert">{error}</p>}
          </fieldset>
          <div className="quiz-nav">
            <Button variant="outline" onClick={() => { setStep((value) => value - 1); setError('') }} disabled={step === 0}>Previous</Button>
            <Button onClick={next}>{step === questions.length - 1 ? 'View My Results' : 'Next Question'}</Button>
          </div>
        </div>
      </section>
    </>
  )
}
