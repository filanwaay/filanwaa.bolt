const COLORS = {
  gold: '#C89B3C', sand: '#F6F1E4', ink: '#12211B',
}

function CornerMark({ corner }: { corner: 'tl' | 'tr' | 'bl' | 'br' }) {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -1, left: -1, borderTop: `6px solid ${COLORS.gold}`, borderLeft: `4px solid ${COLORS.gold}` },
    tr: { top: -1, right: -1, borderTop: `6px solid ${COLORS.gold}`, borderRight: `4px solid ${COLORS.gold}` },
    bl: { bottom: -1, left: -1, borderBottom: `6px solid ${COLORS.gold}`, borderLeft: `4px solid ${COLORS.gold}` },
    br: { bottom: -1, right: -1, borderBottom: `6px solid ${COLORS.gold}`, borderRight: `4px solid ${COLORS.gold}` },
  }
  return <span aria-hidden="true" style={{ position: 'absolute', width: 24, height: 24, zIndex: 5, ...pos[corner] }} />
}

export function PageHero({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
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
  )
}
