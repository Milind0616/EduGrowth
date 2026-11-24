import { Link } from 'react-router-dom'

export default function Button({ to, href, children, variant = 'primary', type = 'button', onClick, className = '', disabled = false }) {
  const classes = `button button--${variant} ${className}`.trim()
  if (to) return <Link className={classes} to={to}>{children}</Link>
  if (href) return <a className={classes} href={href}>{children}</a>
  return <button className={classes} type={type} onClick={onClick} disabled={disabled}>{children}</button>
}
