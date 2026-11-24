export function validateContact(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.institution.trim()) errors.institution = 'Please enter your institution name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please tell us about your enquiry.'
  if (!values.consent) errors.consent = 'Please provide your consent to be contacted.'
  return errors
}
