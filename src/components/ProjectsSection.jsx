import { portfolioData } from '../data/portfolioData.js'
import Section from './Section.jsx'
import './Projects.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-icon">{project.icon}</div>
      <div className="project-name">{project.name}</div>
      <div className="project-repo">{project.repo}</div>
      <div className="project-desc">{project.desc}</div>
      <div className="project-meta">
        {Object.entries(project.stats).map(([key, value]) => (
          <span key={key}>
            <strong>{value}</strong> {key}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" sub="Major workstreams from this period" alt>
      <div className="projects-grid">
        {portfolioData.projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </Section>
  )
}
