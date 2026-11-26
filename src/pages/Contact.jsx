import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import { validateContact } from '../utils/validation'

export default function Contact() {
  const [values, setValues] = useState({ 
    fullName: '', 
    institution: '', 
    email: '', 
    phone: '', 
    inquiryType: 'General Inquiry',
    message: '', 
    consent: false 
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const update = (event) => {
    const { name, value, type, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = validateContact(values) 
    setErrors(nextErrors)
    setStatus('')
    if (Object.keys(nextErrors).length) return

    setStatus('loading')
    const formData = new FormData()
    formData.append('access_key', '7030e312-8758-400a-98d2-717ea40c4e0a')
    formData.append('subject', `New Enquiry: ${values.inquiryType} — ${values.institution}`)
    formData.append('from_name', 'Edu Growth Partners Website')
    formData.append('name', values.fullName)
    formData.append('institution', values.institution)
    formData.append('email', values.email)
    formData.append('phone', values.phone)
    formData.append('inquiry_type', values.inquiryType)
    formData.append('message', values.message)
    formData.append('consent', values.consent ? 'Yes' : 'No')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setValues({ fullName: '', institution: '', email: '', phone: '', inquiryType: 'General Inquiry', message: '', consent: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo title="Contact Us | Edu Growth Partners" description="Get in touch with Edu Growth Partners for institutional consulting, strategic planning, and academic support." />
      
      <PageHero 
        eyebrow="Contact Us" 
        title={<>Let's build a better <br /> institution, together.</>}
        text="Whether you need a comprehensive institutional health check or targeted advice on admissions strategy, our team is ready to help you navigate your next steps." 
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          
          {/* Left Side: Contact Info & Trust Signals */}
          <aside className="contact-details">
            <div className="contact-details__header">
              <p className="eyebrow">Get in Touch</p>
              <h2>We're here to help.</h2>
              <p className="contact-details__intro">
                Have a specific challenge in mind? Reach out to us directly or fill out the form. We typically respond within 1 business day.
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-item">
                <div className="contact-icon-wrap"><MapPin size={20} /></div>
                <div>
                  <strong>Head Office</strong>
                  <p>Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon-wrap"><Mail size={20} /></div>
                <div>
                  <strong>Email Us</strong>
                  <p><a href="mailto:hello@edugrowthpartners.in">hello@edugrowthpartners.in</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap"><Phone size={20} /></div>
                <div>
                  <strong>Call Us</strong>
                  <p>+91 98765 43210 <span className="text-sm">(Mon-Fri, 10am - 6pm)</span></p>
                </div>
              </div>
            </div>

            <div className="contact-trust-note">
              <Clock size={20} />
              <p>Prefer a direct conversation? <strong>Schedule a 15-min discovery call</strong> with our lead consultant.</p>
            </div>
          </aside>

          {/* Right Side: Premium Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={submit} noValidate>
              
              <div className="form-header">
                <h3>Send us a message</h3>
                <p>Fields marked with an asterisk (*) are required.</p>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name *</label>
                  <input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="e.g. Dr. Rajesh Kumar"
                    value={values.fullName} 
                    onChange={update} 
                    aria-invalid={Boolean(errors.fullName)} 
                  />
                  {errors.fullName && <p className="form-error">{errors.fullName}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="institution">Institution Name *</label>
                  <input 
                    id="institution" 
                    name="institution" 
                    placeholder="e.g. St. Xavier's College"
                    value={values.institution} 
                    onChange={update} 
                    aria-invalid={Boolean(errors.institution)} 
                  />
                  {errors.institution && <p className="form-error">{errors.institution}</p>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="you@institution.edu"
                    value={values.email} 
                    onChange={update} 
                    aria-invalid={Boolean(errors.email)} 
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    value={values.phone} 
                    onChange={update} 
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="inquiryType">How can we help? *</label>
                <select id="inquiryType" name="inquiryType" value={values.inquiryType} onChange={update}>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Institutional Health Check">Institutional Health Check</option>
                  <option value="Admissions Strategy">Admissions Strategy</option>
                  <option value="Staff Development">Staff Development</option>
                  <option value="Placement Support">Placement Support</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="2" 
                  placeholder="Tell us about your institution's current challenges or goals..."
                  value={values.message} 
                  onChange={update} 
                  aria-invalid={Boolean(errors.message)} 
                />
                {errors.message && <p className="form-error">{errors.message}</p>}
              </div>

              <label className="consent">
                <input 
                  type="checkbox" 
                  name="consent" 
                  checked={values.consent} 
                  onChange={update} 
                  aria-invalid={Boolean(errors.consent)} 
                />
                <span>I consent to Edu Growth Partners using this information to respond to my enquiry. *</span>
              </label>
              {errors.consent && <p className="form-error">{errors.consent}</p>}

              <div className="form-submit-area">
                <Button type="submit" disabled={status === 'loading'} className="submit-btn">
                  {status === 'loading' ? 'Sending...' : 'Submit Enquiry'} <ArrowRight size={18} />
                </Button>
              </div>

              {status === 'success' && (
                <div className="form-status form-status--success" role="status">
                  <strong>Thank you!</strong> Your enquiry has been received. Our team will get back to you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status form-status--error" role="alert">
                  Something went wrong. Please try again or email us directly at <a href="mailto:hello@edugrowthpartners.in">hello@edugrowthpartners.in</a>.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}