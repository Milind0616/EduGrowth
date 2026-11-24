import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link className="brand brand--footer" to="/"><strong>EDU GROWTH</strong><span>PARTNERS</span></Link>
          <p>Practical consulting for schools, colleges and universities seeking clearer direction and sustainable progress.</p>
        </div>
        <div>
          <h2>Quick links</h2>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/approach">Our Approach</Link>
          <Link to="/team">Team</Link>
        </div>
        <div>
          <h2>Services</h2>
          <Link to="/services">Institutional Health Check</Link>
          <Link to="/services">Admissions Strategy</Link>
          <Link to="/services">Staff Development</Link>
          <Link to="/services">Placement Support</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <p><MapPin size={16} /> Bhopal, Madhya Pradesh, India</p>
          <p><Mail size={16} /> <a href="mailto:hello@edugrowthpartners.in">hello@edugrowthpartners.in</a></p>
          <small>Placeholder address</small>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Edu Growth Partners</p>
        <div><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms &amp; Conditions</Link></div>
      </div>
    </footer>
  )
}
