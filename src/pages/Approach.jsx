import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { Users, Workflow, Megaphone } from 'lucide-react'

export default function Approach() {
  const areas = [
    { title: 'People', icon: Users, text: 'We review leadership, staff capability, communication, training and organisational culture. Strong institutions create clarity, confidence and consistent development for their teams.' },
    { title: 'Process', icon: Workflow, text: 'We review administration, admissions, student services, internal systems and operational efficiency. Strong processes make responsibilities visible and everyday work more dependable.' },
    { title: 'Promotion', icon: Megaphone, text: 'We review institutional positioning, communication, outreach and admissions visibility. Strong promotion communicates a credible story to the students and families it serves.' },
  ]
  return (
    <>
      <Seo title="Our Approach" description="Our People, Process and Promotion framework connects institutional assessment with practical action." />
      <PageHero eyebrow="How We Work" title="Understand the whole institution. Improve the right things." text="A structured framework for turning evidence, conversation and priorities into coordinated progress." />
      <section className="section">
        <div className="container approach-list">
          {areas.map((area, index) => (
            <article className="approach-item" key={area.title}>
              <div className="approach-item__index">0{index + 1}</div>
              <area.icon />
              <div><h2>{area.title}</h2><p>{area.text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--ivory">
        <div className="container">
          <h2 className="center-heading">How the areas connect</h2>
          <p className="connection-text">Capable people need clear processes. Clear processes become stronger when communicated consistently. Clear communication attracts the right audience and creates better conditions for people and systems to improve.</p>
          <div className="process-grid process-grid--dark">
            {[['01', 'Listen'], ['02', 'Assess'], ['03', 'Recommend'], ['04', 'Support']].map(([number, title]) => <article key={number}><span>{number}</span><h3>{title}</h3></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
