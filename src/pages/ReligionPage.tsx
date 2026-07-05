import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function ReligionPage() {
  const { t } = useLanguage()

  const pillars = [
    {
      title: t.religion.tawhid,
      desc: t.religion.tawhidDesc,
      icon: '🕌',
      gradient: 'linear-gradient(135deg, #0F4C3A, #2E8B5C)',
      image: 'https://images.pexels.com/photos/2845462/pexels-photo-2845462.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: t.religion.salah,
      desc: t.religion.salahDesc,
      icon: '🤲',
      gradient: 'linear-gradient(135deg, #2E8B5C, #5FB088)',
      image: 'https://images.pexels.com/photos/8122647/pexels-photo-8122647.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: t.religion.fasting,
      desc: t.religion.fastingDesc,
      icon: '🌙',
      gradient: 'linear-gradient(135deg, #1A1F1C, #3E4642)',
      image: 'https://images.pexels.com/photos/162359/pexels-photo-162359.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: t.religion.hajj,
      desc: t.religion.hajjDesc,
      icon: '🕋',
      gradient: 'linear-gradient(135deg, #7C5817, #E8B14B)',
      image: 'https://images.pexels.com/photos/4329890/pexels-photo-4329890.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0F4C3A 0%, #051F18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🕌</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.religion.title}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.religion.subtitle}
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '48px',
                  alignItems: 'center',
                  background: 'white',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(15,76,58,0.08)',
                  transition: 'all 0.4s',
                  ...(i % 2 === 1 ? { direction: 'rtl' } : {}),
                }}
                className="pillar-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 24px 64px rgba(15,76,58,0.16)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  height: '320px',
                  background: pillar.gradient,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.8,
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '5rem',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                  }}>
                    {pillar.icon}
                  </div>
                </div>
                <div style={{ padding: '48px', direction: 'ltr' }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    borderRadius: '50px',
                    background: '#E8F5F0',
                    color: '#0F4C3A',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}>
                    {i + 1} / {pillars.length}
                  </div>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#0F4C3A',
                    marginBottom: '16px',
                  }}>
                    {pillar.title}
                  </h2>
                  <p style={{
                    color: '#525C57',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                  }}>
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
