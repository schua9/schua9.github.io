import { portfolioData } from '../data/portfolioData.js'
import { useInView } from '../hooks/useInView.js'
import Section from './Section.jsx'
import './Timeline.css'

function TimelineCard({ event }) {
  const [ref, inView] = useInView({ threshold: 0.15, once: false })
  return (
    <div className={inView ? 'tl-card tl-visible' : 'tl-card'} ref={ref}>
      <div className="tl-date">{event.date}</div>
      <div className="tl-title">{event.title}</div>
      <div className="tl-body">{event.body}</div>
      <div className="tl-tags">
        {event.tags.map((tag) => (
          <span className={`tag tag-${tag}`} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TimelineSection() {
  return (
    <Section
      id="timeline"
      title="Timeline"
      sub="Key milestones across the period covered by this portfolio"
    >
      <div className="timeline">
        {portfolioData.timeline.map((event) => (
          <TimelineCard event={event} key={event.title} />
        ))}
      </div>
    </Section>
  )
}
