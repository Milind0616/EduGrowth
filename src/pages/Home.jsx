import { ArrowRight, Building2, Users, Workflow, Megaphone } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import ServiceItem from '../components/ServiceItem'
import ProgressBar from '../components/ProgressBar'
import { services } from '../data/services'
import campusImage from '../assets/hero-campus.jpg'

export default function Home() {
  return (
    <>
      <Seo title="Home" description="Education consulting for institutions seeking clearer direction in people, processes and promotion." />
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Education Consulting | Bhopal, India</p>
            <h1>Better institutions don't happen by chance.</h1>
            <p className="hero-copy__lead">We help schools, colleges and universities understand where they stand, find what needs to change, and build a clearer path forward.</p>
            <div className="button-row">
              <Button to="/services">Explore Our Services <ArrowRight size={17} /></Button>
              <Button to="/contact" variant="text">Start a Conversation</Button>
            </div>
          </div>
          <figure className="hero-image">
            <img src={campusImage} alt="Modern institutional campus building surrounded by landscaped grounds" width="1600" height="1067" />
            <figcaption>People. Process. Promotion.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading eyebrow="Our Perspective" title="Every institution has room to grow." text="Running an educational institution means balancing people, systems and the expectations of students and families. We help you bring those parts together." />
          <div className="pillars">
            <article><Users /><p className="pillar__label">People</p><p>Build capable teams, develop leadership and create a stronger working culture.</p></article>
            <article><Workflow /><p className="pillar__label">Process</p><p>Improve everyday operations, admissions systems and institutional coordination.</p></article>
            <article><Megaphone /><p className="pillar__label">Promotion</p><p>Communicate your strengths and reach the students who are right for you.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Services" title="Practical support for meaningful progress." />
          <div className="services-list">
            {services.map((service) => <ServiceItem key={service.title} service={service} compact />)}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHeading eyebrow="How We Work" title="A focused, practical process." align="center" />
          <div className="process-grid">
            {[
              ['01', 'Listen', "Understand the institution's goals and challenges."],
              ['02', 'Assess', 'Review people, processes and promotion.'],
              ['03', 'Recommend', 'Prepare a practical report with clear priorities.'],
              ['04', 'Support', 'Help the institution move from recommendations to action.'],
            ].map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container report-preview">
          <div>
            <p className="eyebrow">Sample preview</p>
            <h2>See what a clearer picture looks like.</h2>
            <p>Our institutional health check turns observation and conversation into a structured view of priorities.</p>
            <p className="disclaimer">SAMPLE DATA</p>
            <Button to="/sample-report" variant="outline">View Sample Report</Button>
          </div>
          <div className="preview-dashboard">
            <div className="score-ring"><strong>72</strong><span>/100</span></div>
            <ProgressBar label="People" value={78} />
            <ProgressBar label="Process" value={64} />
            <ProgressBar label="Promotion" value={74} />
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-cta__inner">
          <Building2 aria-hidden="true" />
          <h2>Let's talk about where your institution can go next.</h2>
          <Button to="/contact">Request a Consultation</Button>
        </div>
      </section>
    </>
  )
}
