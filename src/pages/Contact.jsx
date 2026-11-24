import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import { validateContact } from '../utils/validation'

export default function Contact() {
  const [values, setValues] = useState({ fullName: '', institution: '', email: '', message: '', consent: false })
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
    formData.append('subject', `Consultation enquiry — ${values.institution}`)
    formData.append('from_name', 'Edu Growth Partners Website')
    formData.append('name', values.fullName)
    formData.append('institution', values.institution)
    formData.append('email', values.email)
    formData.append('message', values.message)
    formData.append('consent', values.consent ? 'Yes — the visitor consented to being contacted.' : 'No')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setValues({ fullName: '', institution: '', email: '', message: '', consent: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo title="Contact" description="Contact Edu Growth Partners about institutional consulting support in Madhya Pradesh." />
      <PageHero eyebrow="Contact" title="Tell us a little about your institution." text="Share what you are working towards. We will be glad to start a conversation." />
      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-details">
            <p className="eyebrow">Get in touch</p>
            <h2>Start with a conversation.</h2>
            <p><MapPin size={20} /><span><strong>Location</strong>Bhopal, Madhya Pradesh, India</span></p>
            <p><Mail size={20} /><span><strong>Email</strong><a href="mailto:hello@edugrowthpartners.in">hello@edugrowthpartners.in</a></span></p>
            <small>Placeholder address until a real address is supplied.</small>
          </aside>
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="fullName">Full Name <span aria-hidden="true">*</span></label>
                <input id="fullName" name="fullName" value={values.fullName} onChange={update} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} />
                {errors.fullName && <p id="fullName-error" className="form-error" role="alert">{errors.fullName}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="institution">Institution Name <span aria-hidden="true">*</span></label>
                <input id="institution" name="institution" value={values.institution} onChange={update} aria-invalid={Boolean(errors.institution)} aria-describedby={errors.institution ? 'institution-error' : undefined} />
                {errors.institution && <p id="institution-error" className="form-error" role="alert">{errors.institution}</p>}
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
              <input id="email" name="email" type="email" value={values.email} onChange={update} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
              <textarea id="message" name="message" rows="6" value={values.message} onChange={update} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <p id="message-error" className="form-error" role="alert">{errors.message}</p>}
            </div>
            <label className="consent">
              <input type="checkbox" name="consent" checked={values.consent} onChange={update} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} />
              <span>I consent to Edu Growth Partners using this information to respond to my enquiry. <span aria-hidden="true">*</span></span>
            </label>
            {errors.consent && <p id="consent-error" className="form-error" role="alert">{errors.consent}</p>}
            <Button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Submit Enquiry'}</Button>
            {status === 'success' && <div className="form-status form-status--success" role="status">Form submitted successfully. Thank you for contacting Edu Growth Partners.</div>}
            {status === 'error' && <div className="form-status" role="alert">We could not submit your enquiry. Please try again or email <a href="mailto:hello@edugrowthpartners.in">hello@edugrowthpartners.in</a>.</div>}
          </form>
        </div>
      </section>
    </>
  )
}
