import { useState } from 'react'

const EMAIL = 'wenderifpeaf@gmail.com'

export default function Contact() {
  const [message, setMessage] = useState('')

  async function copyEmail() {
    if (EMAIL === 'SEU_EMAIL_AQUI') {
      setMessage('Troque SEU_EMAIL_AQUI pelo seu e-mail.')
      setTimeout(() => setMessage(''), 2600)
      return
    }

    try {
      await navigator.clipboard.writeText(EMAIL)
      setMessage('E-mail copiado!')
    } catch {
      setMessage(EMAIL)
    }

    setTimeout(() => setMessage(''), 2200)
  }

  return (
    <section className="section contact-section" id="contato">
      <div className="contact-card reveal">
        <span className="eyebrow">Vamos trabalhar juntos?</span>

        <h2>Tem um projeto ou uma oportunidade em mente?</h2>

        <p>
          Estou aberto a oportunidades como desenvolvedor front-end e a projetos
          onde eu possa aprender, contribuir e construir soluções úteis.
        </p>

        <div className="contact-actions">
          <a className="btn primary" href={`mailto:${EMAIL}`}>Enviar e-mail ↗</a>
          <button className="btn secondary" onClick={copyEmail}>Copiar e-mail</button>
        </div>

        <div className="socials">
          <a href="#" onClick={(e) => e.preventDefault()}>GitHub ↗</a>
          <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn ↗</a>
        </div>
      </div>

      <div className={`toast ${message ? 'show' : ''}`}>{message}</div>
    </section>
  )
}
