import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Hospital,
  Bot,
  Database,
  FileSpreadsheet,
  Smartphone,
  ArrowRight,
  MapPin
} from 'lucide-react'

const projects = [
  {
    title: 'CoordMed',
    category: 'Gestão Hospitalar',
    description: 'Sistema para coordenação médica com presença, plantões, evoluções, relatórios e ferramentas administrativas.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PDF', 'Excel'],
    icon: Hospital,
    link: 'https://github.com/wenderclaytonfilho/coordmed'
  },
  {
    title: 'Plataforma de Extras da Enfermagem',
    category: 'Automação Interna',
    description: 'Aplicação para registrar, editar, exportar e gerar relatórios de extras por competência, setor e profissional.',
    tech: ['React', 'PostgreSQL', 'Supabase', 'Apps Script'],
    icon: FileSpreadsheet,
    link: '#'
  },
  {
    title: 'Bot Discord PromoGames',
    category: 'Bot & Automação',
    description: 'Bot para monitorar promoções de jogos, evitar duplicados e enviar ofertas automaticamente em canais do Discord.',
    tech: ['Node.js', 'Discord.js', 'API', 'Cron'],
    icon: Bot,
    link: '#'
  },
  {
    title: 'Sistema de Presença por QR Code',
    category: 'Controle de Presença',
    description: 'Protótipo para registro de presença com QR Code, geolocalização e validações por ambiente hospitalar.',
    tech: ['React', 'Supabase', 'Geolocation API'],
    icon: Smartphone,
    link: '#'
  }
]

const skills = [
  'React', 'JavaScript', 'HTML', 'CSS', 'Node.js',
  'Supabase', 'PostgreSQL', 'Google Apps Script',
  'Automação', 'PDF/Excel', 'Dashboards', 'GitHub'
]

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">WF</a>
        <div className="navlinks">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <span className="badge">Desenvolvedor • Automação • Gestão Hospitalar</span>
          <h1>Olá, eu sou <strong>Wender Filho</strong>.</h1>
          <p>
            Crio sistemas, automações e plataformas web para resolver problemas reais,
            principalmente nas áreas de gestão hospitalar, relatórios, escalas, presença,
            indicadores e produtividade.
          </p>

          <div className="actions">
            <a className="btn primary" href="#projetos">
              Ver projetos <ArrowRight size={18} />
            </a>
            <a className="btn secondary" href="https://github.com/wenderclaytonfilho" target="_blank">
              GitHub <Github size={18} />
            </a>
          </div>
        </div>

        <div className="heroCard">
          <div className="avatar">WF</div>
          <h2>Wender Filho</h2>
          <p>Afogados da Ingazeira - PE</p>
          <div className="miniInfo">
            <span><Code2 size={16} /> Front-end</span>
            <span><Database size={16} /> Banco de Dados</span>
            <span><Hospital size={16} /> Sistemas Hospitalares</span>
          </div>
        </div>
      </section>

      <section id="sobre" className="section about">
        <div>
          <span className="sectionTag">Sobre mim</span>
          <h2>Transformo rotinas manuais em ferramentas digitais.</h2>
        </div>
        <p>
          Tenho experiência criando soluções web para ambientes administrativos e hospitalares:
          controle de presença médica, relatórios, indicadores, escalas, extração de dados,
          dashboards, automações com planilhas e integrações com banco de dados.
        </p>
      </section>

      <section id="projetos" className="section">
        <div className="sectionHeader">
          <span className="sectionTag">Projetos</span>
          <h2>Alguns trabalhos e ideias em desenvolvimento</h2>
        </div>

        <div className="projectsGrid">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article className="projectCard" key={project.title}>
                <div className="projectIcon">
                  <Icon size={28} />
                </div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="techList">
                  {project.tech.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>

                <a href={project.link} target="_blank" className="projectLink">
                  Ver projeto <ExternalLink size={16} />
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section id="habilidades" className="section">
        <div className="sectionHeader">
          <span className="sectionTag">Habilidades</span>
          <h2>Tecnologias e áreas que utilizo</h2>
        </div>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="contato" className="section contact">
        <div>
          <span className="sectionTag">Contato</span>
          <h2>Vamos construir algo útil?</h2>
          <p>
            Estou sempre desenvolvendo ferramentas para facilitar processos, automatizar rotinas
            e melhorar a organização de dados.
          </p>
        </div>

        <div className="contactLinks">
          <a href="mailto:wenderifpe@gmail.com">
            <Mail size={18} /> wenderifpe@gmail.com
          </a>
          <a href="https://github.com/wenderclaytonfilho" target="_blank">
            <Github size={18} /> github.com/wenderclaytonfilho
          </a>
          <a href="#">
            <MapPin size={18} /> Afogados da Ingazeira - PE
          </a>
        </div>
      </section>

      <footer>
        <p>
          Copyright © | 
          <a href="https://github.com/wenderclaytonfilho" target="_blank">
            Wender Filho
          </a>
        </p>
      </footer>
    </main>
  )
}

export default App
