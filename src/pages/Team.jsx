import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { team } from '../data/team'

export default function Team() {
  return (
    <>
      <Seo title="Team" description="Meet the Edu Growth Partners consulting team." />
      <PageHero eyebrow="Our Team" title="Consulting grounded in context and conversation." text="Our approach brings strategy, operations and learning development into one practical conversation." />
      <section className="section">
        <div className="container team-grid">
          {team.map((member, index) => (
            <article className="team-card" key={member.name}>
              <div className={`team-card__portrait team-card__portrait--${index + 1}`} aria-label={`Portrait placeholder for ${member.name}`}><span>{member.initials}</span></div>
              <h2>{member.name}</h2>
              <p className="team-card__role">{member.role}</p>
              <p>Focus: {member.focus}</p>
            </article>
          ))}
        </div>
        <p className="team-note container">Profiles shown on this site are sample team information.</p>
      </section>
    </>
  )
}
