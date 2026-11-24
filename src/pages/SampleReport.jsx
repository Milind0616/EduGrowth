import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ProgressBar from '../components/ProgressBar'
import institutionImage from '../assets/institution.jpg'

export default function SampleReport() {
  return (
    <>
      <Seo title="Sample Institutional Report" description="View a sample institutional health-check report with scores and recommendations." />
      <PageHero eyebrow="Sample Institutional Report" title="A clearer view of institutional health." text="Central Valley College | Madhya Pradesh" />
      <main className="section report-page">
        <div className="container">
          <div className="report-banner"><strong>SAMPLE REPORT</strong><span>Sample findings for review</span></div>
          <section className="report-overview">
            <div className="report-score"><p>Overall institutional score</p><strong>72</strong><span>/100</span></div>
            <div className="report-bars">
              <ProgressBar label="People" value={78} />
              <ProgressBar label="Process" value={64} />
              <ProgressBar label="Promotion" value={74} />
            </div>
          </section>

          <section className="report-section">
            <p className="report-section__number">01</p>
            <div><h2>Key Findings</h2>
              <div className="findings-grid">
                <article><h3>People</h3><p>Staff capability is encouraging, but regular development programmes could improve consistency.</p></article>
                <article><h3>Process</h3><p>Admissions follow-up and internal reporting need better coordination.</p></article>
                <article><h3>Promotion</h3><p>The institution has a clear academic offering, but its digital communication could be more consistent.</p></article>
              </div>
            </div>
          </section>

          <section className="report-section">
            <p className="report-section__number">02</p>
            <div><h2>Recommended Priorities</h2><ol className="priority-list">
              <li>Introduce a structured staff development calendar.</li><li>Standardise admissions enquiry follow-up.</li><li>Improve website content and institutional communication.</li>
            </ol></div>
          </section>

          <section className="report-section report-roadmap">
            <p className="report-section__number">03</p>
            <div><h2>Improvement Roadmap</h2>
              <div className="roadmap-grid">
                <article><span>First 30 days</span><p>Review responsibilities and document current workflows.</p></article>
                <article><span>Days 31–60</span><p>Introduce admissions tracking and staff development plans.</p></article>
                <article><span>Days 61–90</span><p>Review progress and refine communication activities.</p></article>
              </div>
            </div>
          </section>
          <img className="report-image" src={institutionImage} alt="Modern institutional meeting and working environment" loading="lazy" width="1200" height="800" />
        </div>
      </main>
    </>
  )
}
