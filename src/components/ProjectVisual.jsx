export default function ProjectVisual({ type }) {
  if (type === 'coordmed') {
    return (
      <div className="project-visual coordmed">
        <div className="mock-window">
          <div className="mock-bar"><i /><i /><i /></div>
          <div className="mock-content">
            <aside>
              <b>CoordMed</b>
              <span>Dashboard</span>
              <span>Escalas</span>
              <span>Agendas</span>
              <span>Relatórios</span>
            </aside>
            <div className="mock-dashboard">
              <div className="mock-title" />
              <div className="mock-cards"><i /><i /><i /></div>
              <div className="mock-table" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'nihongo') {
    return (
      <div className="project-visual nihongo">
        <div className="phone">
          <div className="phone-island" />
          <div className="japanese-ui">
            <span className="jp-small">日本語を学ぼう</span>
            <b>こんにちは!</b>
            <div className="progress"><i /></div>
            <div className="lesson-box">
              <span>今日のレッスン</span>
              <strong>ひらがな</strong>
            </div>
            <div className="kana-row"><i>あ</i><i>か</i><i>さ</i></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual manga">
      <div className="reader-ui">
        <div className="reader-sidebar">
          <span>Library</span><i /><i /><i /><i />
        </div>
        <div className="reader-page">
          <div className="manga-panel big" />
          <div className="manga-cols">
            <div className="manga-panel" />
            <div className="manga-panel" />
          </div>
        </div>
      </div>
    </div>
  )
}
