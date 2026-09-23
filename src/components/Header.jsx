import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <a href="#inicio" className="brand" aria-label="Início" onClick={closeMenu}>
        <span className="brand-mark">&lt;/&gt;</span>
        <span>Wender.dev</span>
      </a>

      <nav className={`nav ${open ? 'open' : ''}`}>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projetos" onClick={closeMenu}>Projetos</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
      </nav>

      <button
        className="menu-btn"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? '✕' : '☰'}
      </button>
    </header>
  )
}
