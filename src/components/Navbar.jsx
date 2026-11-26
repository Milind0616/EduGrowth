import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Our Approach', '/approach'],
  ['Insights', '/sample-report'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link className="brand" to="/" aria-label="Edu Growth Partners home">
          <strong>EDU GROWTH</strong>
          <span>PARTNERS</span>
        </Link>
        <button 
          className="menu-button" 
          type="button" 
          aria-expanded={open} 
          aria-controls="primary-navigation" 
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav 
          id="primary-navigation" 
          className={`nav-links ${open ? 'nav-links--open' : ''}`} 
          aria-label="Primary navigation"
        >
          {links.map(([label, to]) => (
            <NavLink 
              key={to} 
              to={to} 
              end={to === '/'}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link 
            className="button button--nav" 
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Request a Consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}