import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading index="02 — TECNOLOGIAS" title="Ferramentas que uso para construir." />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article className="skill-card reveal" key={skill.title}>
            <span className="skill-number">0{index + 1}</span>
            <h3>{skill.title}</h3>
            <div className="tags">
              {skill.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
