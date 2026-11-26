import {
  ArrowRight,
  Building2,
  Users,
  Workflow,
  Megaphone,
} from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ServiceItem from "../components/ServiceItem";
import ProgressBar from "../components/ProgressBar";
import { services } from "../data/services";
import campusImage from "../assets/hero-campus.jpg";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Education consulting for institutions seeking clearer direction in people, processes and promotion."
      />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Education Consulting | Bhopal, India</p>
            <h1>
              Better institutions <br /> don't happen by chance.
            </h1>
            <p className="hero-copy__lead">
              We help schools, colleges and universities understand where they
              stand, find what needs to change, and build a clearer path
              forward.
            </p>
            <div className="button-row">
              <Button to="/services">
                Explore Our Services <ArrowRight size={17} />
              </Button>
              <Button to="/contact" variant="text">
                Start a Conversation
              </Button>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src={campusImage}
              alt="Modern institutional campus building surrounded by landscaped grounds"
              width="1600"
              height="1067"
            />
            <div className="hero-badge">
              <span className="hero-badge__title">
                Strategic Campus Advisory
              </span>
              <span className="hero-badge__subtitle">
                Empowering 50+ Educational Campuses
              </span>
            </div>
          </figure>
        </div>
      </section>

      {/* OUR PERSPECTIVE SECTION */}
      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Our Perspective"
            title="Every institution has room to grow."
            text="Running an educational institution means balancing people, systems and the expectations of students and families. We help you bring those parts together."
          />
          <div className="pillars">
            <article>
              <Users />
              <p className="pillar__label">People</p>
              <p>
                Build capable teams, develop leadership and create a stronger
                working culture.
              </p>
            </article>
            <article>
              <Workflow />
              <p className="pillar__label">Process</p>
              <p>
                Improve everyday operations, admissions systems and
                institutional coordination.
              </p>
            </article>
            <article>
              <Megaphone />
              <p className="pillar__label">Promotion</p>
              <p>
                Communicate your strengths and reach the students who are right
                for you.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Practical support for meaningful progress."
          />
          <div className="services-list">
            {services.map((service) => (
              <ServiceItem key={service.title} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow eyebrow--light">How We Work</p>
            <h2>A focused, practical process.</h2>
            <p className="section-heading__text process-subtitle">
              Our battle-tested diagnostic-to-execution methodology designed specifically for
              educational boards, founders, and vice-chancellors.
            </p>
          </div>

          <div className="process-grid">
            {[
              ["01", "WEEK 1-2", "Listen", "Understand the governing body's strategic vision, academic priorities, and current structural constraints.", "Stakeholder Interviews & Campus Audit"],
              ["02", "WEEK 3-4", "Assess", "Deep dive across talent, operating workflows, enrolments data, and institutional reputation.", "360° Diagnostic Health Matrix"],
              ["03", "WEEK 5-6", "Recommend", "Synthesize actionable recommendations into a sequenced transformation roadmap with KPI targets.", "Prioritized Roadmap & Executive Report"],
              ["04", "ONGOING", "Support", "Partner with leadership to guide implementation, train key teams, and monitor measurable institutional progress.", "On-ground Execution & Checkpoints"],
            ].map(([number, phase, title, text, tag]) => (
              <div className="process-card" key={number}>
                <div className="process-card__header">
                  <span className="process-card__number">{number}</span>
                  <span className="process-card__tag">{phase}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="process-card__footer">
                  <span className="footer-label">KEY MILESTONE</span>
                  <span className="footer-value">▪ {tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE PREVIEW SECTION (UPDATED FOR COMPACT HEIGHT) */}
      <section className="section section--sample-preview">
        <div className="container report-preview">
          
          {/* Left Side Content */}
          <div className="report-preview__copy">
            <div className="eyebrow-wrapper">
              <span className="eyebrow" style={{ marginBottom: 0 }}>Sample Preview</span>
              <span className="badge-confidential">CONFIDENTIAL AUDIT</span>
            </div>
            <h2>See what a clearer picture looks like.</h2>
            <p className="report-preview__desc">
              Our institutional health check turns anecdotal observations into quantified operational clarity across academic delivery, governance, and brand equity.
            </p>
            
            <ul className="report-checklist">
              <li>Quantifiable scoring across 48 operational indicators</li>
              <li>Peer benchmark comparison against top regional institutions</li>
              <li>Executive summary with 30-60-90 day intervention roadmap</li>
            </ul>

            <div className="report-actions">
              <Button to="/sample-report">Request Diagnostic Audit</Button>
              <span className="report-actions__meta">18-Page Comprehensive PDF Report Sample</span>
            </div>
          </div>

          {/* Right Side Dashboard (Wider) */}
          <div className="preview-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-header__left">
                <span className="dashboard-tag">SAMPLE CLIENT AUDIT PREVIEW</span>
                <h3>St. Anne's Group of Institutions — MP Campus</h3>
              </div>
              <div className="dashboard-header__right">
                <span className="dashboard-badge dashboard-badge--success">● Sector Benchmark: 64/100 (+8 pts)</span>
              </div>
            </div>

            <div className="dashboard-body">
              {/* Left Column: Score Ring */}
              <div className="score-section">
                <div className="score-ring-wrapper">
                  <div className="score-ring">
                    <div className="score-ring-inner">
                      <strong>72</strong>
                      <span>HEALTH INDEX</span>
                    </div>
                  </div>
                  <div className="score-target">
                    <span className="score-target__label">GOOD READINESS</span>
                    <span className="score-target__value">Target for Year 1: 85/100</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Metrics */}
              <div className="dashboard-metrics">
                <div className="metric-row">
                  <div className="metric-header">
                    <strong>People & Academic Leadership</strong>
                    <span className="metric-status metric-status--optimized">Optimized</span>
                    <span className="metric-value">78/100</span>
                  </div>
                  <p className="metric-desc">Strong core faculty retention; mid-level leadership needs alignment.</p>
                  <div className="metric-progress-bg"><div className="metric-progress-fill" style={{width: '78%', background: '#68d391'}}></div></div>
                </div>

                <div className="metric-row">
                  <div className="metric-header">
                    <strong>Process & Operations Systems</strong>
                    <span className="metric-status metric-status--moderate">Needs Attention</span>
                    <span className="metric-value">64/100</span>
                  </div>
                  <p className="metric-desc">Manual admissions inquiry tracking causing 22% drop-off in conversion.</p>
                  <div className="metric-progress-bg"><div className="metric-progress-fill" style={{width: '64%', background: '#f6ad55'}}></div></div>
                </div>

                <div className="metric-row">
                  <div className="metric-header">
                    <strong>Promotion & Regional Reputation</strong>
                    <span className="metric-status metric-status--strong">Strong Outreach</span>
                    <span className="metric-value">74/100</span>
                  </div>
                  <p className="metric-desc">Brand recall high in Tier-2 catchment; digital storytelling unorganized.</p>
                  <div className="metric-progress-bg"><div className="metric-progress-fill" style={{width: '74%', background: '#63b3ed'}}></div></div>
                </div>
              </div>
            </div>
            
            <div className="dashboard-footer">
              <p>● Diagnostic based on Edu Growth Partners 3P Proprietary Audit Framework. DOC-REF: EGP-BPL-2026-HC</p>
            </div>
          </div>
        </div>
      </section>


            {/* CLOSING CTA SECTION (UPDATED TO 1st IMAGE) */}
      <section className="closing-cta">
        <div className="container closing-cta__inner">
          <div className="closing-cta__copy">
            <span className="closing-cta__tag">● ADVISORY ENGAGEMENTS OPEN FOR 2026–27 ACADEMIC CYCLE</span>
            <h2>Let's talk about where your institution can go next.</h2>
            <p>Whether you are restructuring admissions, developing faculty leadership, or planning a greenfield campus in Central India, our senior partners are ready to assist.</p>
            <ul className="closing-cta__list">
              <li>Strictly Confidential</li>
              <li>Response Within 24 Hours</li>
              <li>Direct Advisory With Senior Partners</li>
            </ul>
          </div>
          
          <div className="closing-cta__actions">
            <Button to="/contact" className="btn-primary-light">Schedule Executive Consultation</Button>
            
            {/* Direct Advisory Desk Box (1st Image jaisa) */}
            <div className="advisory-desk">
              <span className="advisory-desk__label">DIRECT ADVISORY DESK</span>
              <a href="tel:+919876543210" className="advisory-desk__number">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}