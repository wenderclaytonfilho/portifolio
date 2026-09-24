export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-content reveal">
        <span className="eyebrow">Olá, eu sou</span>

        <h1>
          Wender
          <br />
          <span>Clayton.</span>
        </h1>

        <p className="hero-role">
          Desenvolvedor <strong>Fullstack</strong> focado em interfaces modernas,
          responsivas e soluções que resolvem problemas reais.
        </p>

        <p className="hero-copy">
          Transformo ideias em produtos digitais funcionais, organizados e agradáveis
          de usar — do protótipo à aplicação publicada.
        </p>

        <div className="hero-actions">
          <a href="#projetos" className="btn primary">Ver projetos <span>↗</span></a>
          <a href="#contato" className="btn secondary">Falar comigo</a>
        </div>

        <div className="quick-info">
          <div><span className="dot" /> Disponível para oportunidades</div>
          <div>Brasil · Remoto</div>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="terminal-card">
          <div className="terminal-top">
            <div className="window-dots"><i /><i /><i /></div>
            <span>portfolio.jsx</span>
          </div>

          <pre>
            <code>
              <span className="c-purple">const</span> <span className="c-blue">developer</span> = {'{'}
{`  name: `}<span className="c-green">"Wender Clayton"</span>,
{`  focus: `}<span className="c-green">"Front-end"</span>,
{`  stack: [
    `}<span className="c-green">"JavaScript"</span>,
{`    `}<span className="c-green">"TypeScript"</span>,
{`    `}<span className="c-green">"React"</span>,
{`    `}<span className="c-green">"Next.js"</span>
{`  ],
  mindset: `}<span className="c-green">"build & learn"</span>
{'}'}

<span className="c-purple">export default</span> developer;
            </code>
          </pre>

          <div className="terminal-glow" />
        </div>

        <div className="floating-chip chip-1">React</div>
        <div className="floating-chip chip-2">TypeScript</div>
        <div className="floating-chip chip-3">UI/UX</div>
      </div>
    </section>
  )
}
