import ProjectVisual from './ProjectVisual'

function ProjectLink({ href, children }) {
  const disabled = href === '#'

  return (
    <a
      href={href}
      target={disabled ? undefined : '_blank'}
      rel={disabled ? undefined : 'noreferrer'}
      className={disabled ? 'disabled-link' : ''}
      onClick={disabled ? (event) => event.preventDefault() : undefined}
      aria-disabled={disabled}
    >
      {children}
    </a>
  )
}

export default function ProjectCard({ project, index }) {
  return (
    <article className="project reveal">
      <ProjectVisual type={project.visual} />

      <div className="project-info">
        <div className="project-topline">
          <span>{project.category}</span>
          <span>0{index + 1}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <ProjectLink href={project.demo}>Abrir projeto ↗</ProjectLink>
          <ProjectLink href={project.github}>GitHub ↗</ProjectLink>
        </div>
      </div>
    </article>
  )
}
