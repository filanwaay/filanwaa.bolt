import { useLanguage } from '../i18n/LanguageContext'
import { SubscribeSection } from '../components/SubscribeSection'
import { AdBanner } from '../components/AdBanner'

export function AboutPage() {
  const { t } = useLanguage()

  const values = [
    { title: t.about.value1, desc: t.about.value1Desc, icon: '📚' },
    { title: t.about.value2, desc: t.about.value2Desc, icon: '🌍' },
    { title: t.about.value3, desc: t.about.value3Desc, icon: '🕌' },
    { title: t.about.value4, desc: t.about.value4Desc, icon: '💻' },
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
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,177,75,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>ℹ️</div>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.about.title}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: '#F8FAF9' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            marginBottom: '64px',
          }}
            className="about-grid"
          >
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 4px 12px rgba(15,76,58,0.08)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 24px 64px rgba(15,76,58,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.08)'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #0F4C3A, #2E8B5C)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '24px',
              }}>
                🎯
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F4C3A', marginBottom: '16px' }}>
                {t.about.missionTitle}
              </h2>
              <p style={{ color: '#525C57', fontSize: '1rem', lineHeight: 1.8 }}>
                {t.about.missionText}
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 4px 12px rgba(15,76,58,0.08)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 24px 64px rgba(15,76,58,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.08)'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #E8B14B, #D49A2E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '24px',
              }}>
                👁️
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F4C3A', marginBottom: '16px' }}>
                {t.about.visionTitle}
              </h2>
              <p style={{ color: '#525C57', fontSize: '1rem', lineHeight: 1.8 }}>
                {t.about.visionText}
              </p>
            </div>
          </div>

          {/* Values */}
          <h2 style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#0F4C3A',
            marginBottom: '48px',
          }}>
            {t.about.valuesTitle}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
            className="values-grid"
          >
            {values.map((value, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(15,76,58,0.06)',
                  transition: 'all 0.3s',
                  animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 24px 64px rgba(15,76,58,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15,76,58,0.06)'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: '#E8F5F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  margin: '0 auto 20px',
                }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F4C3A', marginBottom: '10px' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#525C57', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {value.desc}
                </p>
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
