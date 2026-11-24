import Seo from '../components/Seo'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="not-found">
      <Seo title="Page Not Found" description="The requested Edu Growth Partners page could not be found." />
      <div className="container">
        <p className="eyebrow">404 — Page not found</p>
        <h1>We couldn't find that page.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <div className="button-row"><Button to="/">Back to Home</Button><Button to="/services" variant="outline">Explore Services</Button></div>
      </div>
    </section>
  )
}
