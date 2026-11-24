import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" description="Terms for using the Edu Growth Partners website." />
      <PageHero eyebrow="Legal" title="Terms &amp; Conditions" />
      <section className="section"><div className="container prose policy">
        <h2>General guidance</h2><p>Information on this website is general educational consulting guidance and not a substitute for institution-specific professional advice.</p>
        <h2>Sample report</h2><p>The Central Valley College report and its scores are sample information used to show the format of an institutional report.</p>
        <h2>Health check</h2><p>Quiz results are indicative reflections only. They are not a formal institutional audit, accreditation assessment or prediction of performance.</p>
        <h2>No guaranteed outcomes</h2><p>Consulting recommendations may support improvement, but Edu Growth Partners does not guarantee admissions, rankings, placements or other institutional outcomes.</p>
        <h2>Contact details</h2><p>The email address published on this website is a placeholder until a real address is confirmed.</p>
      </div></section>
    </>
  )
}
