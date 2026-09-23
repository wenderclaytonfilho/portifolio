import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="section projects-section" id="projetos">
      <SectionHeading index="03 — PROJETOS" title="Algumas coisas que construí." />

      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
