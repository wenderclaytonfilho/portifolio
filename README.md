# Portfólio — Wender Clayton

Portfólio pessoal desenvolvido em **React + Vite**, com estrutura componentizada e responsiva.

## Estrutura

```text
src/
├─ components/
│  ├─ About.jsx
│  ├─ Contact.jsx
│  ├─ Footer.jsx
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ ProjectCard.jsx
│  ├─ Projects.jsx
│  ├─ ProjectVisual.jsx
│  ├─ ScrollReveal.jsx
│  ├─ SectionHeading.jsx
│  └─ Skills.jsx
├─ data/
│  └─ portfolio.js
├─ styles/
│  └─ global.css
├─ App.jsx
└─ main.jsx
```

## Projetos incluídos

- CoordMed
- Plataforma de Japonês
- Leitor de Mangás Web

O Sistema Hospitalar foi removido.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy na Vercel

1. Suba o projeto para o GitHub.
2. Importe o repositório na Vercel.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`

## Personalização

Edite:

- `src/data/portfolio.js` para projetos e tecnologias.
- `src/components/Contact.jsx` para e-mail.
- Links do GitHub e LinkedIn em `Contact.jsx`.
- Informações pessoais em `Hero.jsx` e `About.jsx`.


## Responsividade

O layout foi ajustado para:
- Desktop
- Tablet
- Celulares grandes
- Celulares pequenos
- Telas de até 360px

Foram tratados menu mobile, hero, terminal, projetos, mockups, botões e textos longos.
