const COLORS = {
  deep: '#0B3D2E', deepDark: '#06251C', gold: '#C89B3C',
  goldLight: '#E8C468', terracotta: '#B5622E', sand: '#F6F1E4',
  ink: '#12211B', slate: '#4A554E',
}

function CornerMark({ corner }: { corner: 'tl' | 'tr' | 'bl' | 'br' }) {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -1, left: -1, borderTop: `2px solid ${COLORS.gold}`, borderLeft: `2px solid ${COLORS.gold}` },
    tr: { top: -1, right: -1, borderTop: `2px solid ${COLORS.gold}`, borderRight: `2px solid ${COLORS.gold}` },
    bl: { bottom: -1, left: -1, borderBottom: `2px solid ${COLORS.gold}`, borderLeft: `2px solid ${COLORS.gold}` },
    br: { bottom: -1, right: -1, borderBottom: `2px solid ${COLORS.gold}`, borderRight: `2px solid ${COLORS.gold}` },
  }
  return <span aria-hidden="true" style={{ position: 'absolute', width: 24, height: 24, zIndex: 5, ...pos[corner] }} />
}

export interface LessonSection {
  title: string
  body: string
}

export function LessonPage({
  icon, title, subtitle, sections, accentColor,
}: {
  icon: string
  title: string
  subtitle: string
  sections: LessonSection[]
  accentColor: string
}) {
  return (
    <div style={{ background: COLORS.sand }}>
      {/* Hero, framed like the homepage */}
      <div style={{ background: COLORS.ink, padding: '28px 6vw' }}>
        <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto' }}>
          <CornerMark corner="tl" />
          <CornerMark corner="tr" />
          <CornerMark corner="bl" />
          <CornerMark corner="br" />
          <div style={{
            border: `1px solid rgba(200,155,60,0.5)`, padding: '56px 6vw',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2.8rem', marginBottom: 16 }}>{icon}</div>
            <h1 style={{
              fontFamily: "'Fraunces', serif", color: COLORS.sand,
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, marginBottom: 16,
            }}>{title}</h1>
            <p style={{ color: 'rgba(246,241,228,0.8)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Lesson sections — numbered ledger style */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {sections.map((section, i) => (
              <div key={i} style={{
                display: 'flex', gap: 24,
                padding: '28px 0',
                borderBottom: i < sections.length - 1 ? '1px solid #E2D9C8' : 'none',
              }}>
                <span style={{
                  fontFamily: "'Fraunces', serif", fontSize: '1rem', color: accentColor,
                  fontWeight: 700, flexShrink: 0, width: 30, paddingTop: 2,
                }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 style={{
                    fontFamily: "'Fraunces', serif", fontSize: '1.25rem', fontWeight: 700,
                    color: COLORS.ink, marginBottom: '10px',
                  }}>
                    {section.title.replace(/^\d+\.\s*/, '')}
                  </h2>
                  <p style={{ color: COLORS.slate, fontSize: '1rem', lineHeight: 1.8 }}>
                    {section.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}