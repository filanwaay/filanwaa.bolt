import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

const COLORS = {
  deep: '#0B3D2E', deepDark: '#06251C', gold: '#f0a70b',
  goldLight: '#E8C468', terracotta: '#B5622E', sand: '#70c7fa',
  ink: '#12211B', slate: '#4A554E',
}

function CornerMark({ corner }: { corner: 'tl' | 'tr' | 'bl' | 'br' }) {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -1, left: -1, borderTop: `8px solid ${COLORS.gold}`, borderLeft: `8px solid ${COLORS.gold}` },
    tr: { top: -1, right: -1, borderTop: `8px solid ${COLORS.gold}`, borderRight: `8px solid ${COLORS.gold}` },
    bl: { bottom: -1, left: -1, borderBottom: `8px solid ${COLORS.gold}`, borderLeft: `8px solid ${COLORS.gold}` },
    br: { bottom: -1, right: -1, borderBottom: `8px solid ${COLORS.gold}`, borderRight: `8px solid ${COLORS.gold}` },
  }
  return <span aria-hidden="true" style={{ position: 'absolute', width: 24, height: 24, zIndex: 5, ...pos[corner] }} />
}

export function CulturePage() {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()

  const topics = [
    {
      title: t.culture.proverbs,
      desc: t.culture.proverbsDesc,
      icon: '💬',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/maahmaah',
    },
    {
      title: t.culture.wisdom,
      desc: t.culture.wisdomDesc,
      icon: '🧠',
      image: 'https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/xikmad',
    },
    {
      title: t.culture.poetry,
      desc: t.culture.poetryDesc,
      icon: '📜',
      image: 'https://images.pexels.com/photos/1762821/pexels-photo-1762821.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/gabayo',
    },
    {
      title: t.culture.songs,
      desc: t.culture.songsDesc,
      icon: '🎵',
      image: 'https://images.pexels.com/photos/4754019/pexels-photo-4754019.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/heeso',
    },
    {
      title: lang === 'so' ? 'Sheekooyinka' : lang === 'ar' ? 'القصص' : 'Stories',
      desc: lang === 'so' ? 'Sheekooyin dhab ah oo taaban, oo ka hadlaya nolosha iyo badalka.' : lang === 'ar' ? 'قصص واقعية مؤثرة تتحدث عن الحياة والتغيير.' : 'Real, moving stories about life and transformation.',
      icon: '📖',
      image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/sheeko',
    },
    {
      title: lang === 'so' ? 'Baro Dalkaada' : lang === 'ar' ? 'تعرف على بلدك' : 'Learn Your Country',
      desc: lang === 'so' ? 'Gobollada Soomaaliya iyo degmooyinka ka tirsan — aqoonso dhulkaaga.' : lang === 'ar' ? 'مناطق الصومال ومقاطعاتها.' : "Somalia's regions and their districts.",
      icon: '🇸🇴',
      image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/baro-dalkaaga',
    },
  ]

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
            <div style={{ fontSize: '2.8rem', marginBottom: 16 }}>📜</div>
            <h1 style={{
              fontFamily: "'Fraunces', serif", color: COLORS.sand,
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, marginBottom: 16,
            }}>{t.culture.title}</h1>
            <p style={{ color: 'rgba(246,241,228,0.8)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
              {t.culture.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Topics grid */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: '#E2D9C8',
            border: '1px solid #E2D9C8',
          }}
            className="culture-grid"
          >
            {topics.map((topic, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  cursor: 'pointer',
                  transition: 'background 0.25s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.sand }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'white' }}
                onClick={() => navigate(topic.path)}
              >
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={topic.image}
                    alt={topic.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(6,37,28,0.5), rgba(6,37,28,0.1))',
                  }} />
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)', fontSize: '3.5rem',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                  }}>
                    {topic.icon}
                  </div>
                  <span style={{
                    position: 'absolute', top: 14, right: 16,
                    fontFamily: "'Fraunces', serif", fontSize: '0.85rem',
                    color: COLORS.goldLight, fontWeight: 700,
                  }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif", fontSize: '1.4rem', fontWeight: 700,
                    color: COLORS.ink, marginBottom: '10px',
                  }}>
                    {topic.title}
                  </h3>
                  <p style={{ color: COLORS.slate, fontSize: '0.92rem', lineHeight: 1.65 }}>
                    {topic.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />

      <style>{`
        @media (max-width: 700px) {
          .culture-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}