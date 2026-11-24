import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { Target, HeartHandshake, MapPin } from 'lucide-react'

export default function About() {
  return (
    <>
      <Seo title="About Us" description="Learn how Edu Growth Partners helps educational institutions create practical, people-led progress." />
      <PageHero eyebrow="About the Firm" title="Helping institutions move forward with clarity." text="A growing education consultancy shaped around useful questions, thoughtful assessment and practical action." />
      <section className="section">
        <div className="container editorial-grid">
          <div><p className="eyebrow">Our Purpose</p><h2>Make institutional improvement understandable and achievable.</h2></div>
          <div className="prose"><p>Edu Growth Partners exists to help education leaders see their institution more clearly. We bring structure to complex questions and help teams turn insight into realistic priorities.</p><p>As a growing consultancy, we are developing long-term partnerships rooted in listening, professional respect and measurable movement.</p></div>
        </div>
      </section>
      <section className="section section--ivory">
        <div className="container three-column">
          <article><HeartHandshake /><h3>What We Believe</h3><p>Improvement begins with honest observation, shared understanding and clear ownership. Every institution's context matters.</p></article>
          <article><Target /><h3>Why Institutions Work With Us</h3><p>We combine a structured People–Process–Promotion framework with practical recommendations that teams can actually implement.</p></article>
          <article><MapPin /><h3>Our Focus on Madhya Pradesh</h3><p>We understand the value of context. Our work focuses on the opportunities and operating realities of institutions across Madhya Pradesh.</p></article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Framework" title="Three areas, viewed together." text="People capability, operational processes and institutional promotion are distinct areas, but they influence one another. We consider the whole system rather than solving one issue in isolation." />
        </div>
      </section>
    </>
  )
}
