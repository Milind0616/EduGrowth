export default function ProgressBar({ label, value, className = '' }) {
  return (
    <div className={`progress ${className}`}>
      <div className="progress__meta"><span>{label}</span><strong>{value}/100</strong></div>
      <div className="progress__track" role="progressbar" aria-label={label} aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
