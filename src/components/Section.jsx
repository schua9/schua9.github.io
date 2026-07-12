import './Section.css'

export default function Section({ id, title, sub, alt = false, children }) {
  return (
    <section id={id} className={alt ? 'section section-alt' : 'section'}>
      <div className="section-inner">
        {title && <h2 className="section-title">{title}</h2>}
        {sub && <p className="section-sub">{sub}</p>}
        {children}
      </div>
    </section>
  )
}
