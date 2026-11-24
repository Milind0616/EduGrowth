import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceItem({ service, compact = false }) {
  return (
    <article className={compact ? 'service-item service-item--compact' : 'service-item'}>
      <p className="service-item__number">{service.number}</p>
      <div>
        <h3>{service.title}</h3>
        <p>{compact ? service.short : service.description}</p>
        {!compact && (
          <ul className="deliverables">
            {service.deliverables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
      </div>
      <Link className="icon-link" to="/services" aria-label={`Explore ${service.title}`}>
        <ArrowUpRight size={20} />
      </Link>
    </article>
  )
}
