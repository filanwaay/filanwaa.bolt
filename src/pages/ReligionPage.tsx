import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

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

export function ReligionPage() {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()

  const pillars = [
    {
      title: t.religion.tawhid,
      desc: t.religion.tawhidDesc,
      icon: '🕌',
      image: 'https://images.pexels.com/photos/13302045/pexels-photo-13302045.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: t.religion.salah,
      desc: t.religion.salahDesc,
      icon: '🤲',
      image: 'https://images.pexels.com/photos/32718453/pexels-photo-32718453.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: t.religion.fasting,
      desc: t.religion.fastingDesc,
      icon: '🌙',
      image: 'https://images.pexels.com/photos/34520224/pexels-photo-34520224.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: lang === 'so' ? 'Zakada' : lang === 'ar' ? 'الزكاة' : 'Zakah',
      desc: lang === 'so' ? 'Bixinta xoolaha loo baahan yahay masaakiinta iyo saboolka' : lang === 'ar' ? 'إعطاء المال للمحتاجين والفقراء' : 'Giving a fixed portion of wealth to those in need',
      icon: '💰',
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: t.religion.hajj,
      desc: t.religion.hajjDesc,
      icon: '🕋',
      image: 'https://images.pexels.com/photos/38303363/pexels-photo-38303363.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  const paths = ['/diinta/towxiid', '/diinta/salaadda', '/diinta/soonka', '/diinta/zakada', '/diinta/xaj']

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
            <div style={{ fontSize: '2.8rem', marginBottom: 16 }}>🕌</div>
            <h1 style={{
              fontFamily: "'Fraunces', serif", color: COLORS.sand,
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, marginBottom: 16,
            }}>{t.religion.title}</h1>
            <p style={{ color: 'rgba(246,241,228,0.8)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
              {t.religion.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Pillars — alternating image/text rows */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0',
                  alignItems: 'stretch',
                  background: 'white',
                  border: `1px solid #E2D9C8`,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s',
                  ...(i % 2 === 1 ? { direction: 'rtl' } : {}),
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(18,33,27,0.12)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
                onClick={() => navigate(paths[i])}
              >
                <div style={{ height: '320px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(6,37,28,0.55), rgba(6,37,28,0.1))',
                  }} />
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)', fontSize: '4.5rem',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                  }}>
                    {pillar.icon}
                  </div>
                </div>
                <div style={{ padding: '48px', direction: 'ltr' }}>
                  <div style={{
                    fontFamily: "'Fraunces', serif", color: COLORS.gold,
                    fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px',
                  }}>
                    {String(i + 1).padStart(2, '0')} / {String(pillars.length).padStart(2, '0')}
                  </div>
                  <h2 style={{
                    fontFamily: "'Fraunces', serif", fontSize: '2rem', fontWeight: 700,
                    color: COLORS.ink, marginBottom: '16px',
                  }}>
                    {pillar.title}
                  </h2>
                  <p style={{ color: COLORS.slate, fontSize: '1.02rem', lineHeight: 1.8 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />
      <SubscribeSection />
    </div>
  )
}