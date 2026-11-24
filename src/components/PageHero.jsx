export default function PageHero({ eyebrow, title, text }) {
  return (
    <header className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </header>
  )
}
