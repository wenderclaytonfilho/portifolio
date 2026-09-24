import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className="section" id="sobre">
      <SectionHeading index="01 — SOBRE" title="Desenvolvimento com propósito." />

      <div className="about-grid">
        <div className="about-text reveal">
          <p className="lead">
            Sou desenvolvedor com interesse em criar aplicações web que unam
            <strong> boa experiência de uso</strong>, organização e tecnologia.
          </p>

          <p>
            Gosto de desenvolver ferramentas que simplificam rotinas, automatizam
            processos e transformam necessidades do dia a dia em soluções digitais.
            Tenho experiência prática construindo projetos voltados para gestão,
            saúde, educação e produtividade.
          </p>

          <p>
            Busco evoluir constantemente como desenvolvedor fullstack, trabalhando
            com componentização, consumo de APIs, responsividade e interfaces claras.
          </p>
        </div>

        <div className="about-card reveal">
          {[
            'Foco em experiências responsivas e funcionais',
            'Projetos aplicados a problemas reais',
            'Aprendizado contínuo e evolução técnica',
          ].map((item, index) => (
            <div className="about-stat" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
