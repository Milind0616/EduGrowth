import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ServiceItem from '../components/ServiceItem'
import Button from '../components/Button'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo title="Services" description="Explore institutional health checks, admissions strategy, staff development, placement support and institution launch consulting." />
      <PageHero eyebrow="What We Do" title="Practical support for the issues that matter." text="Focused consulting engagements built around your institution's goals, context and capacity." />
      <section className="section">
        <div className="container detailed-services">
          {services.map((service) => (
            <div className="detailed-service" key={service.title}>
              <ServiceItem service={service} />
              <Button to="/contact" variant="outline">Discuss this Service</Button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
